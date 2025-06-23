# 🗃️ Inventory Management System

A full-stack Inventory Management web application built with **Next.js** for the frontend, **Node.js/Express** for the backend, and **MySQL** on **AWS RDS** for the database. The application is deployed on various AWS services:

- **Frontend** on AWS Amplify
- **Backend** on AWS EC2
- **Database** on AWS RDS
- **Images** stored in AWS S3

---

## 📦 Features

- 🧾 Add, update, delete, and view inventory items
- 🗂️ Categorize and search products
- 📸 Upload product images to AWS S3
- 🔐 Authentication and Authorization (if implemented)
- 📊 Dashboard to visualize inventory status

---

## ⚙️ Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL (AWS RDS)
- **Storage:** AWS S3
- **Deployment:** AWS Amplify (Frontend), AWS EC2 (Backend), AWS RDS (Database)

---


---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Node.js
- MySQL (or RDS endpoint)
- AWS CLI (for deployment & S3 access)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/inventory-management-aws.git
cd inventory-management-aws
```


## 2.Environment Variables
PORT=5000
DB_HOST=your-rds-endpoint.amazonaws.com
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=inventory_db
AWS_S3_BUCKET=your-s3-bucket-name
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=your-region


inventory-management/
├── frontend/       # Next.js frontend
│   └── pages/
│   └── components/
├── backend/        # Express backend API
│   └── routes/
│   └── controllers/
├── README.md



## 🌐 Architecture
![Screenshot 2025-03-05 134654](https://github.com/user-attachments/assets/30ab110f-bf24-4f4b-904b-bf435ef32b2f)
