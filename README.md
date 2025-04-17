# 💼 JobConnectPro

A full-featured MERN stack Job Portal where **Recruiters** and **Students** interact for job opportunities. Recruiters can post jobs, manage company details, and track applicants. Students can explore jobs, filter listings, apply, and track their application status.

## 🚀 Live Demo

[🔗 Deployed Frontend](#) &nbsp; | &nbsp; [🔗 Deployed Backend](#)  
> _Add your live deployment links above_

---

## 📌 Features

### 👨‍💼 Recruiter Side
- Recruiter registration & login
- Register and manage company profile
- Post new jobs and edit existing ones
- View list of students who applied to jobs
- Approve or reject applications
- View applicant resume directly
- Cloudinary integration for uploading documents and logos

### 🎓 Student Side
- Student registration & login
- View all available job listings
- Apply to jobs with resume
- Filter and search jobs
- Update student profile and resume
- Track application status (e.g., Pending, Selected, Rejected)

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Storage | Auth | Other |
|----------|---------|----------|---------|------|-------|
| React.js (Vite) | Node.js, Express.js | MongoDB | Cloudinary | JWT | Redux, Formik, Yup |


## 🔒 Authentication

- JWT-based authentication for both Recruiters and Students
- Role-based access control for protected routes
- Separate login and registration flows

---

## 🖼️ Cloudinary Integration

- Recruiters can upload company logos
- Students can upload resumes in their profiles
- All documents/images are stored and served from Cloudinary

---

## ⚙️ Installation and Setup

### 🧑‍💻 Clone the Repository

```bash
git clone https://github.com/Patelakshesh/JobConnectPro-.git
cd JobConnectPro-

Backend Setup (Port 8000)
cd server
npm install
cp .env.example .env   # Add your environment variables
npm run dev

🌐 Frontend Setup (Port 5173)
cd client
npm install
npm run dev

🌍 Environment Variables

Backend .env

PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
