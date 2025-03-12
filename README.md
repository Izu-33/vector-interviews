# Vector Interviews

# Vector Interview

## 🚀 Overview
Vector Interview is an **asynchronous video interview platform** designed to streamline the hiring process by allowing recruiters to pre-record interview questions and candidates to respond at their convenience. The platform enhances hiring efficiency, reduces bias, and supports global recruitment efforts.

## 🎯 Business Goals & Objectives
1. **Improve Hiring Efficiency** – Reduce time spent on scheduling and conducting initial interview rounds.
2. **Enhance Fairness & Objectivity** – Enable independent reviews by multiple evaluators to minimize bias.
3. **Support Global Hiring** – Make interviews accessible across different time zones and locations.
4. **Provide Actionable Insights** – Automate results compilation and candidate scoring for faster decision-making.

## 👥 Target Users
- **Recruiters & Hiring Managers** – Set up interviews, invite candidates, and review responses.
- **Candidates** – Record and submit video interview responses.
- **Evaluators** – Independently review and score candidate responses.
- **HR & Admin Teams** – Monitor hiring progress and generate reports.

## 🛠 Key Features
- **Interview Setup & Customization** – Recruiters create interview sessions, upload pre-recorded questions, and brand the experience.
- **Candidate Video Recording** – Candidates record their responses within a set deadline.
- **Team Collaboration & Blind Reviews** – Evaluators review submissions independently to ensure a bias-free hiring process.
- **Automated Scoring & Reports** – Aggregates scores and feedback to generate hiring insights.
- **Multi-Device Support** – Accessible across desktops and mobile devices.

## 🏗 Tech Stack
- **Backend**: Node.js (Express)
- **Database**: MongoDB
- **Video Storage & Processing**: AWS S3 / Cloudinary
- **Security**: OAuth authentication, data encryption, GDPR compliance
- **Scalability**: Supports 10,000+ concurrent users


## 🔧 Installation & Setup
### **Backend Setup**
```sh
# Clone the repository
git clone https://github.com/Izu-33/vector-interviews.git
cd vector-interviews

# Install dependencies
npm install

# Create a .env file and configure environment variables
cp .env.example .env

# Start the server
npm start
```

### **Frontend Setup (if applicable)**
```sh
cd client  # Navigate to the frontend directory
npm install  # Install dependencies
npm start  # Start the development server
```

## 🔑 Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```env
MONGO_URI=mongodb+srv://your-connection-string
PORT=8000
JWT_SECRET_KEY=your-secret-key
```

## 🧑‍💻 API Endpoints (Backend)
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `https://vector-interviews.onrender.com/api/v1/vector-interviews/users/signup` | Register a new user |
| `POST` | `https://vector-interviews.onrender.com/api/v1/vector-interviews/users/signin` | User login |
| `POST` | `https://vector-interviews.onrender.com/api/v1/vector-interviews/interviews/create-interview` | Create a new interview |

## 🚀 Contributing
We welcome contributions! To get started:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the MIT License. See `LICENSE` for more details.

---
### 🚀 Let's streamline the hiring process with **Vector Interview!**

