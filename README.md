# Image Upload & Storage API

## 🚀 Introduction

This is a simple **Image Upload & Storage API** built using **Node.js, Express.js, MongoDB, Multer, and Cloudinary**. The API allows users to **upload, retrieve, and delete images** with unique URLs.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **File Upload:** Multer
- **Storage:** Cloudinary
- **Image Compression:** Sharp
- **Deployment:** Render

## 📌 Features

- ✅ Upload images (JPG, PNG, JPEG)
- ✅ Retrieve images by ID
- ✅ Delete images
- ✅ Store image metadata in MongoDB
- ✅ Image compression before storing
- ✅ Upload image from your gallery

## ⚙️ Setup & Usage

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/image-upload-api.git
cd image-upload-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the project root and add:

```env
PORT=5000
MONGODB_CLOUD_URL=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4️⃣ Start the Server

```sh
node index.js
```

## OR by

```sh
npm run server
```

The API will run at `http://localhost:5000`

### 6️⃣ Deployment on Render

1. Push code to **GitHub**.
2. Go to [Render](https://render.com/) and create a **new Web Service**.
3. Select the **GitHub repo** and set environment variables.
4. Deploy and get a **Live API URL**.

---

## 📜 API Documentation

### 🔹 Base URL

Local: `http://localhost:5000`
Deployed: `https://image-upload-task.onrender.com/`

### 1️⃣ **Upload Image**

- **Endpoint:** `POST /api/image/upload`
- **Description:** Uploads an image and returns its Metadata return by Database.
- **Request:**
  - `multipart/form-data`
  - `image: File (JPG, PNG, JPEG)`
- **Response:**
  ```json
  {
    "message": "Image uploaded successfully",
    "URL": "https://res.cloudinary.com/image/upload/id"
  }
  ```

### 2️⃣ **Get Image by ID**

- **Endpoint:** `GET /images/:id`
- **Description:** Retrieves an image by its unique ID.
- **Response:** Redirects the user to the URL of the image given by Cloudinary

### 3️⃣ **Delete Image**

- **Endpoint:** `DELETE /images/:id`
- **Description:** Deletes an image from cloudinary and MongoDB database
- **Response:**
  ```json
  {
    "message": "Image deleted successfully"
  }
  ```

## 📌 Postman Collection

To test the API in **Postman**, import the collection: [https://github.com/crazybackdev01/POSTMAN_COLLECTION_FILE/blob/main/upload_API_postman-collection.json](#)

---

## 📬 Contact

For any queries, reach out:

- **Email:** uditnagar419@gmail.com
- **GitHub:** https://github.com/crazybackdev01

---
