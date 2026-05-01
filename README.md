# 🌍 WanderStay – Full Stack Listing & Review Platform

🚀 Built with real-world features like authentication, session management, and CRUD operations.

💡 A scalable full-stack web application built using MVC architecture with secure authentication.

Airbnb-inspired platform where users can create, explore, and review property listings.

---

## 🔗 Live Demo
👉 https://project1-7jh4.onrender.com

---

## 📸 Screenshots

<img src="https://github.com/user-attachments/assets/10dc9f7a-e625-4551-a7fe-6567a4db4731" width="800"/>
<img src="https://github.com/user-attachments/assets/3cc49409-71f8-4186-a709-b8ffddd475bb" width="800"/>
<img src="https://github.com/user-attachments/assets/12e2c2f0-4a12-4d53-8b4b-8056515c5649" width="800"/>
<img src="https://github.com/user-attachments/assets/de7e3e8f-22e1-4443-833d-88ef0ba1a7bb" width="800"/>
<img src="https://github.com/user-attachments/assets/3d23a363-95a0-4915-9281-76c868cef96c" width="800"/>

---

## 🔧 Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- EJS  
- Passport.js  
- Express Session & Flash  
- Mapbox (Map Integration)  

---

## ✨ Features

- 🔐 User Authentication (Signup/Login/Logout)  
- 🏡 Create, Edit & Delete Listings  
- ⭐ Add and Manage Reviews  
- 📦 MVC Architecture  
- ⚡ RESTful Routing  
- 💬 Flash Messages  
- 🛡️ Centralized Error Handling  
- 🗺️ Interactive Map Integration (Mapbox)  
- 📍 Location-based listing display with markers  

---

## 📁 Project Structure
```
wanderstay/
│── controllers/
│── models/
│── routes/
│── views/
│── public/
│── utils/
│── init/
│── app.js
│── cloudConfig.js
│── middleware.js
│── schema.js
│── package.json
│── .gitignore
```

---

## ⚙️ Installation
```bash
git clone https://github.com/Vikashkumarpd/wanderstay
cd wanderstay
npm install
```

## 🌐 Environment Variables

Create a `.env` file in the root directory and add:
```
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token
```
⚠️ Never commit your `.env` file to GitHub.

## ▶️ Run Locally

```bash
npm start
```

## 📌 Future Improvements

- 📸 Image Upload (Cloudinary)  
- 🔍 Search by location  
- 📍 Multiple markers & clustering  
- 💳 Payment Gateway  
- 📅 Booking System  

## 🙌 Author

👤 Vikash Kumar  
🔗 GitHub: https://github.com/Vikashkumarpd
