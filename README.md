
# 🏡 ALX Listing App

## About the Project
The **ALX Listing App** project aims to scaffold and lay the foundational structure for a modern Airbnb clone.  
This initial milestone focuses on setting up a **well-organized and scalable codebase** using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.

By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a **dynamic, responsive, and user-friendly property listing page**.

---

## 🎯 Learning Objectives
This milestone is designed for professional developers to strengthen their expertise in **modern web application development**.  
By completing this milestone, learners will:

- Gain hands-on experience scaffolding a Next.js project tailored for production readiness.  
- Implement **TypeScript** for type safety and reusable interfaces to enhance code maintainability.  
- Configure **TailwindCSS** for building responsive, accessible, and visually appealing UI components.  
- Structure a Next.js project following industry-standard best practices for scalability and readability.  
- Create foundational reusable components and organize assets effectively for real-world applications.  

---

## 🧠 Requirements

### Prerequisites
Before starting, ensure you have the following:

- Basic knowledge of **Next.js**, **React**, and **TypeScript**  
- Familiarity with **TailwindCSS** and modern styling techniques  
- Understanding of **ESLint** and code linting  
- Experience organizing and structuring scalable projects  

### Technical Requirements
- **Next.js version:** 13+  
- **Node.js version:** 16+  
- **Text editor:** VS Code (recommended) with TypeScript and TailwindCSS extensions installed  

---

## ⚙️ Project Setup

### 1️⃣ Scaffold the Application
Create a new Next.js app with the following command:
```bash
npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir
````

---

### 2️⃣ Confirm and Configure TailwindCSS

If you’re using **Tailwind v4**, your `globals.css` should only contain:

```css
@import "tailwindcss";
```

If using **Tailwind v3**, use:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can optionally include a `tailwind.config.ts` file for theme customization.

---

## 🧩 Folder Structure

The project follows a clean and modular structure:

```
alx-listing-app/
├── components/        # Reusable UI components (e.g., Card, Button)
├── interfaces/        # TypeScript interfaces and type definitions
├── constants/         # Application constants and configuration values
├── pages/             # Next.js pages (using Pages Router)
├── public/
│   └── assets/        # Static assets (images, icons, SVGs)
│       ├── images/
│       ├── icons/
│       └── logos/
├── styles/            # Global and Tailwind CSS styles
├── package.json
└── README.md
```

### 🗂️ Folder Purpose

| Folder             | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| **components/**    | Contains reusable UI elements like `Card`, `Button`, and layout components.      |
| **interfaces/**    | Stores TypeScript interfaces (e.g., `CardProps`, `ButtonProps`) for type safety. |
| **constants/**     | Defines static constants such as routes, labels, and configurations.             |
| **public/assets/** | Holds exported images, icons, and SVGs from Figma for use throughout the app.    |

---

## 🧱 Asset Management

All project images and SVGs should be placed under:

```
public/assets/
├── images/   # Listing and detail images
├── icons/    # SVG icons
├── logos/    # App and brand logos
└── buttons/  # Only for non-code graphical button assets
```

Assets are organized for **easy access and reusability** across components.

---

## 🚀 How to Run the Project Locally

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run the Development Server

```bash
npm run dev
```

### 3️⃣ Open the App

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🧰 Key Highlights

### ✅ Project Setup

* Next.js app scaffolded with **TypeScript**, **ESLint**, and **TailwindCSS**.
* Minimal Tailwind configuration using the latest version.

### ✅ Folder Structure

* Organized and scalable directory layout with clear responsibilities.

### ✅ TypeScript Integration

* Strong typing via reusable interfaces in `interfaces/`.

### ✅ Asset Management

* Centralized `public/assets/` directory for images, SVGs, and icons.

### ✅ Developer Experience

* Clean code enforced via **ESLint**.
* Responsive, accessible UI built with **TailwindCSS**.

