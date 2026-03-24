<div align="center">
  
# ✅ Next.js Todo App

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()

</div>

---

## 📖 **About The Project**

A modern, full-stack task management application built with **Next.js 15 (App Router)**, featuring server-side rendering, API routes, and persistent data storage with MongoDB. This project demonstrates my understanding of modern Next.js patterns and full-stack development.

### 🎯 **Key Highlights**

- ⚡ **Modern Stack** - Built with Next.js 15, React 19, and Tailwind CSS
- 🔄 **Full CRUD Operations** - Create, Read, Update, Delete tasks seamlessly
- 🗄️ **Database Integration** - MongoDB Atlas for reliable data persistence
- 📱 **Responsive Design** - Works flawlessly on all devices
- 🎨 **Beautiful UI** - Clean and intuitive user interface

---

## ✨ **Features**

| Feature | Description |
|---------|-------------|
| ✅ **Create Tasks** | Add new todos with a clean, intuitive interface |
| 📝 **Edit Tasks** | Update existing tasks with inline editing |
| 🗑️ **Delete Tasks** | Remove completed or unwanted tasks |
| ✔️ **Task Completion** | Mark tasks as complete/incomplete with visual feedback |
| 💾 **Persistent Storage** | All tasks saved to MongoDB database |
| 📱 **Responsive Design** | Fully responsive UI using Tailwind CSS |
| 🚀 **Fast Performance** | Server-side rendering with Next.js App Router |

---

## 🛠️ **Tech Stack**

<details open>
<summary><b>Frontend</b></summary>
<br>

| Technology | Description |
|------------|-------------|
| **Next.js 16.2** | React framework with App Router |
| **React 19** | UI library for building components |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **JavaScript (ES6+)** | Modern JavaScript features |

</details>

<details open>
<summary><b>Backend & Database</b></summary>
<br>

| Technology | Description |
|------------|-------------|
| **Next.js API Routes** | Serverless API endpoints |
| **MongoDB** | NoSQL database for data persistence |
| **Mongoose** | ODM for MongoDB |

</details>

---

## 📂 **Project Structure**

NextJS-Todo-App/                                                             
├── 📁 app/                                                           
│ ├── 📁 api/                                                          
│ │ └── 📁 todos/                                                                                                                    
│ │ ├── 📄 route.js # GET & POST endpoints                                                                                                                    
│ │ └── 📁 [id]/                                                                                                                    
│ │ └── 📄 route.js # PUT & DELETE endpoints                                                          
│ ├── 📁 components/                                                          
│ │ ├── ⚛️ TodoForm.jsx # Add new todo form                                                          
│ │ ├── ⚛️ TodoList.jsx # Display all todos                                                          
│ │ └── ⚛️ TodoItem.jsx # Individual todo component                                                          
│ ├── 📁 lib/                                                          
│ │ └── 📄 mongodb.js # MongoDB connection utility                                                          
│ ├── 📁 models/                                                          
│ │ └── 📄 Todo.js # Mongoose schema/model                                                          
│ ├── 🎨 globals.css # Global styles with Tailwind                                                          
│ ├── 📄 layout.js # Root layout component                                                          
│ └── 📄 page.js # Main todo page                                                          
├── 📁 public/ # Static assets                                                          
├── 🔒 .env.local # Environment variables (gitignored)                                                          
├── 📦 package.json # Dependencies                                                          
├── ⚙️ postcss.config.mjs # PostCSS config for Tailwind                                                          
└── 📖 README.md # Project documentation               


---

## 🚀 **Getting Started**

### 📋 **Prerequisites**

- Node.js (v18 or higher)
- MongoDB Atlas account (free tier) or local MongoDB installation
- npm, yarn, or pnpm

### 🔧 **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/FarrukhGul/NextJS-Todo-App.git
   cd NextJS-Todo-App

Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Set up environment variables

Create a .env.local file in the root directory:

env
MONGODB_URI=your_mongodb_connection_string_here
Get your MongoDB URI from MongoDB Atlas

Run the development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open your browser

Navigate to http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description	Request Body
🔍 GET	/api/todos	Fetch all todos	-
➕ POST	/api/todos	Create a new todo	{ "title": "Task name" }
✏️ PUT	/api/todos/[id]	Update a todo	{ "title": "Updated", "completed": true }
❌ DELETE	/api/todos/[id]	Delete a todo	-
🎯 Key Features Implemented
🖥️ Frontend
Server Components - Main page renders on server for better SEO

Client Components - Interactive elements use 'use client' directive

Real-time Updates - UI updates instantly after CRUD operations

Loading States - Visual feedback during API calls

Error Handling - Graceful error messages for failed operations

🔧 Backend
RESTful API - Clean API design following REST conventions

Database Integration - MongoDB with Mongoose for data modeling

Environment Variables - Secure configuration management

Error Handling - Proper error responses with status codes

🔮 Future Improvements
<details> <summary>Click to expand</summary>
Add user authentication (login/signup)

Implement task categories and tags

Add due dates with reminders

Create task priorities (High, Medium, Low)

Add search and filter functionality

Implement drag-and-drop reordering

Add dark/light theme toggle

Create user profiles and personalized dashboards

Add task sharing/collaboration features

</details>
🧪 Testing
Ensure MongoDB is running (or use MongoDB Atlas)

Start the development server

Create, read, update, and delete todos to verify functionality

Check browser console for any errors

Verify data persistence by refreshing the page

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
Distributed under the MIT License. See LICENSE for more information.

👤 Author
<div align="center">
Muhammad Farrukh Gul
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white

</div>
🙏 Acknowledgments
Next.js Documentation - For comprehensive guides

Tailwind CSS - For amazing utility-first CSS

MongoDB Atlas - For free cloud database

Vercel - For hosting and deployment

<div align="center">
⭐️ If this project helped you, please consider giving it a star! ⭐️
Built with ❤️ by Muhammad Farrukh Gul

</div> ```
This enhanced README features:

✨ Modern layout with centered header and badges

🎨 Emoji icons for visual appeal

📊 Tables for organized information

📁 Folder structure with emoji icons

🔧 Collapsible sections for future improvements

👤 Author section with social badges

🎯 Clean formatting with proper markdown



