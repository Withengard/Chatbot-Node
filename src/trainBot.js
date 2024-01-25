const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { HNSWLib } = require("langchain/vectorstores/hnswlib");
const fs = require("fs");

async function trainBot(req, res) {
    try {
      const trainingText = fs.readFileSync("training-data.txt", "utf8");
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 10,
      });
      const docs = await textSplitter.createDocuments([trainingText]);
  
      const vectorStore = await HNSWLib.fromDocuments(
        docs,
        new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
      );
      vectorStore.save("hnswlib");
      console.log("success");
      console.log(docs);
  
      return res.status(200).json({
        message: vectorStore,
      });
    } catch (error) {
      // Handle any errors that may occur
      console.error(error);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }
  
  module.exports = trainBot;