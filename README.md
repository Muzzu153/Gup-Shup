# 💬 VartaLoop

A modern real-time chat application built with **MERN Stack**, **Socket.io**, and **TailwindCSS**. Supports **authentication**, **real-time messaging**, **online user status**, and more. Designed to be lightweight, responsive, and production-ready.

## 🌟 Features

- 🔐 **Authentication & Authorization** with **JWT**
- ⚡ **Real-time messaging** using **Socket.io**
- 📶 **Online/Offline user status**
- 🗂️ **Global State Management** using **Zustand**
- 🎨 Beautiful UI with **TailwindCSS** & **Daisy UI**
- ☁️ Media uploads with **Cloudinary**
- 🛠️ Robust **error handling** on both client & server
- 🚀 **Production-ready deployment**
- 🌍 Fully responsive & mobile-friendly

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS, Daisy UI, Zustand, Socket.io-client
- **Backend**: Node.js, Express.js, MongoDB, Socket.io
- **Authentication**: JWT
- **Media Storage**: Cloudinary
- **Deployment**: Render

## 📁 Project Structure

```
📦 chatapp/
├── client/      # React frontend
├── server/      # Node.js backend
├── .env         # Environment variables
└── README.md
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Atharvadethe/vartaloop.git
cd vartaloop
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root of the `server/` directory:

```ini
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

## 🚧 Build & Start the App

### 🔨 Build the app

```bash
# Build the frontend
cd client
npm run build

# Build the backend
cd ../server
npm run build
```

### 🚀 Start the app

```bash
cd server
npm start
```

## 📝 License

MIT

## 👤 Author

Atharva Dethe
