# EduPro LMS - Mini LMS Dashboard

## 🎯 Mục tiêu
Mini LMS Dashboard mô phỏng hệ thống học trực tuyến, xây dựng bằng React.

## 🛠 Tech Stack
- React 18
- React Router DOM v6
- Redux Toolkit
- Context API
- Tailwind CSS
- Vite

## ✨ Tính năng
- Trang chủ với featured courses
- Danh sách khóa học với loading state
- Trang chi tiết khóa học
- Yêu thích khóa học (Redux)
- Đăng nhập giả lập (Context API)
- Dashboard học viên (Protected Route)
- Danh sách khóa học đã tham gia
- Responsive mobile & desktop

## 📁 Cấu trúc thư mục
src/
├── components/
│   ├── course/
│   │   ├── CourseCard.jsx
│   │   └── CourseDetail.jsx
│   └── PrivateRoute.jsx
├── contexts/
│   └── AuthContext.jsx
├── data/
│   ├── courses.js
│   └── courseApi.js
├── layouts/
│   ├── MainLayout.jsx
│   └── DashboardLayout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── CoursesPage.jsx
│   ├── CourseDetailPage.jsx
│   ├── FavoritesPage.jsx
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   ├── MyCoursesPage.jsx
│   └── NotFoundPage.jsx
└── store/
    ├── store.js
    ├── authSlice.js
    ├── favoritesSlice.js
    ├── coursesSlice.js
    └── coursesThunk.js

## 🚀 Cài đặt & Chạy

```bash
# Clone repo
git clone https://github.com/canhtrong26-dev/lms-mini.git

# Cài dependencies
cd lms-mini
npm install

# Chạy development
npm run dev

# Build production
npm run build
```

## 🔐 Demo Credentials
Email: any@email.com
Password: 123456 (tối thiểu 6 ký tự)

## 🌐 Demo
Link: https://lms-mini-rho.vercel.app/

## 👨‍💻 Tác giả
Võ Trọng Cảnh
Email: canhtrong26@gmail.com
GitHub: github.com/canhtrong26-dev
GitLab: gitlab.com/canh-dev