# Real-Time Chat Frontend

This is the **frontend** of the **real-time chat application**, built with **React.js** and deployed on **Vercel**.

---

## 🚀 Features
- **Real-time messaging with WebSockets**
- **User authentication (JWT)**
- **Modern and responsive UI**
- **Optimized for fast performance**

---

## 📦 Tech Stack
- **React.js**
- **TailwindCSS**
- **Axios**
- **WebSockets**
- **Vite.js (or CRA)**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Anushkaa32/real-time-chat-frontend.git
cd real-time-chat-frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
VITE_BACKEND_URL=https://real-time-chat-backend-jsqv.onrender.com
```

### 4️⃣ Run the Application Locally
```sh
npm run dev
```

### 5️⃣ Build for Production
```sh
npm run build
```

### 6️⃣ Deploy to Vercel
```sh
vercel deploy
```

---

## 🔥 API Endpoints (Used in Frontend)
- **Login** → `POST /api/auth/local`
- **Register** → `POST /api/auth/local/register`
- **Fetch User Info** → `GET /api/users/me`
- **Get Messages** → `GET /api/messages`
- **Send Message** → `POST /api/messages`

---

## 🚀 Deployment Guide
- Frontend is deployed on **Vercel**: [Frontend Link](https://real-time-chat-frontend.vercel.app)
- Ensure the **backend** is running before testing the frontend

---

## 🛠️ Troubleshooting

### ❌ **Frontend Not Connecting to Backend**
✅ Ensure `VITE_BACKEND_URL` in `.env` points to the correct backend URL.

### ❌ **CORS Issues**
✅ Make sure CORS settings are properly configured in **Strapi backend**.

### ❌ **Authentication Errors (401 Unauthorized)**
✅ Ensure the **JWT token** is correctly sent in API requests.

---

## 🖼️ Screenshots
(Add screenshots of the frontend UI here)

---

## 🛠️ Contributing
1️⃣ **Fork** the repository
2️⃣ **Create a new branch**
```sh
git checkout -b feature-branch
```
3️⃣ **Commit changes**
```sh
git commit -m "Added a new feature"
```
4️⃣ **Push to branch**
```sh
git push origin feature-branch
```
5️⃣ **Submit a Pull Request**

---

## 📬 Contact
- **Author**: Anushka Srivastava
- **Email**: anushka.srivastava7750@gmail.com

🚀 Enjoy chatting in real-time! 🎉
