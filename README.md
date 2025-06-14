📁 backend/README.md
md
Copy
Edit
# 🗂️ Notes Manager – Backend (Node.js + Express)

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Express](https://img.shields.io/badge/Express-Framework-lightgrey)

This is the **backend** of the Notes Manager App built using Node.js, Express, and MongoDB.

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Sridharraj2023/Notes-Manager-Back-End.git
cd Notes-Manager-Back-End
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Start the Server
bash
Copy
Edit
npm start
Server will run at: http://localhost:5000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Fetch all notes
POST	/api/notes	Create a new note

Body Example (POST):

json
Copy
Edit
{
  "title": "Meeting Notes",
  "description": "Discussed project milestones"
}
📁 Folder Structure
bash
Copy
Edit
backend/
│
├── models/         # Mongoose Schemas
├── routes/         # API routes
├── server.js       # Main server file
└── .env            # Environment variables
🧠 Author
Built with ❤️ by Sridhar R
GitHub: @Sridharraj2023
