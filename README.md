Add .env with OPENAI_API_KEY
-> npm install
-> npm start
-> got to localhost:3000/train-bot
-> in a second console write: curl -X POST -H "Content-Type: application/json" -d "{\"question\": \"What is he doing since march 2022\"}" http://localhost:3000/get-answer
-> in a second browser tab go to localhost:3000/get-asnwer
