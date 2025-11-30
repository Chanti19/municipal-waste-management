# 🗑️ Smart Waste Collection Scheduler

A clean and simple web-based system that helps citizens report waste-bin fill levels and allows municipal staff to monitor, sort, and prioritize bins for faster waste collection.

---

## 🚀 Features

### 👥 For General Citizens
- Report bin fill levels (0–100%)
- Enter street name and bin ID
- Instant submission stored locally

### 🏛️ For Municipal Staff
- View all citizen reports
- Sort reports using **Insertion Sort (DSA)**
- Auto-calculated priority levels:
  - 🔴 High (80%+)
  - 🟡 Medium (50%+)
  - 🟢 Low (below 50%)
- Filter reports by street name
- Erase all reports option

---

## 🛠️ Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **LocalStorage**
- **DSA Algorithm → Insertion Sort** for sorting reports

---

## 📂 Project Structure
├── index.html # Main home page
├── citizen_form.html # Report form for citizens
├── municipal_login.html # Login for municipal staff
├── municipal_dashboard.html # Dashboard with sorting + filtering
├── dsa.js # Insertion Sort implementation
├── style.css # Complete styling
└── README.md # Project documentation
---

## ▶️ How to Run the Project
1. Download or clone this repository  
2. Open **index.html** in any browser  
3. No backend or server required  
4. Everything works using **LocalStorage + JavaScript**

---

## 🔐 Municipal Staff Login
**Username:** admin  
**Password:** 1234  

---

## 📊 DSA Logic (Insertion Sort)
Used for sorting bins by fill percentage (highest → lowest)  
This ensures **efficient scheduling for waste pickup**

---

## 📸 Screens Included
- Citizen reporting form  
- Staff dashboard  
- Priority indicators  
- Sorted bin table  

---

## ✨ Future Improvements
- Add live map integration  
- Add backend with database  
- Notifications for high-priority bins  
- Role-based authentication  

---

## 👨‍💻 Developer
Made by **Chanti**  
Frontend + DSA Project
