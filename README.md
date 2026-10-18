# 🌐 SPU ICT Minimalist Web Portfolio
### Single-Page Web Portfolio for Khajonphan Phakdee (SPU ICT)

ออกแบบและพัฒนาตามมาตรฐาน **Senior Full-Stack Web Developer & UI/UX Designer** ด้วยสไตล์ **Minimalist Modern (ขาว/ดำ)** พร้อมระบบ **Sticky Left Vertical Sidebar** ที่พับเก็บได้, ระบบสลับภาษา **[TH / EN]** อัตโนมัติ, ระบบสลับธีม **Dark / Light Mode**, ระบบ **CRUD ผลงานและใบรับรอง** ที่บันทึกลง LocalStorage และโครงสร้างที่พร้อมสำหรับ **Cloudflare (Pages, D1 SQL, R2 Storage)**

---

## 🎨 สไตล์การออกแบบและฟีเจอร์เด่น (Features)

1. **Color Palette & Design Style**:
   - **Monochrome Minimalist Modern**: คุมโทนสีดำ-ขาว (#09090b, #18181b, #ffffff, #27272a) คมชัด สะอาดตา ไฮเทคแบบวิศวกรซอฟต์แวร์
   - ลายพื้นหลัง Dot Pattern แบบโปร่งแสง ทั้งโหมดมืดและสว่าง
   - รองรับ **Dark / Light Theme Toggle** พร้อมจำสถานะผ่าน LocalStorage

2. **Sticky Left Vertical Sidebar (สามารถเปิด-ปิดได้)**:
   - ตรึงอยู่ฝั่งซ้ายมือ สามารถกดปุ่ม `⮜` เพื่อยุบเมนูเป็น Slim Rail (ไอคอนอย่างเดียว) หรือขยายออกได้
   - รองรับ Mobile Responsive เต็มรูปแบบ ด้วยแถบ Drawer และ Backdrop Blur

3. **ระบบสลับภาษา 2 ภาษา `[TH / EN]`**:
   - ปุ่มสลับภาษาที่มุมขวาบน ทำงานทันทีโดยไม่ต้องรีโหลดหน้าเว็บ
   - แปลเนื้อหาครบทั้ง 6 ส่วน พร้อมบันทึกภาษาที่เลือกลง LocalStorage

4. **หัวข้อสำคัญครบทั้ง 6 ส่วน (Core Sections)**:
   - 👤 **1. ข้อมูลส่วนตัว (Personal Details & Hero)**:
     - ชื่อ **ขจรพัน ภักดี (Khajonphan Phakdee)**, นักศึกษา ICT มหาวิทยาลัยศรีปทุม (SPU)
     - GPAX 3.72, อีเมล, เบอร์โทรศัพท์ `065-573-0374`
     - **ระบบเปลี่ยนรูปโปรไฟล์**: กดที่รูปหรือปุ่ม "เปลี่ยนรูปภาพ" เพื่อเลือกไฟล์ภาพจากเครื่องได้ทันที พร้อมปุ่มรีเซ็ตรูปเดิม
   - 🎓 **2. ประวัติการศึกษา (Education)**:
     - วท.บ. เทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศรีปทุม
     - การ์ดแสดงรายวิชาสำคัญ (Software Engineering, Cloud, Database, Network Security) และรางวัลเกียรตินิยม
   - 🛠️ **3. ทักษะความเชี่ยวชาญ (Skills)**:
     - จัดกลุ่ม 4 หมวด: **Programming Languages**, **Frontend**, **Backend & Database**, **Tools & DevOps**
   - 💼 **4. ประสบการณ์ทำงาน (Work Experience)**:
     - Timeline แสดงประวัติงานฝึกงาน (Full-Stack Web Developer Intern) และงาน Part-time / Freelance
   - 📁 **5. ผลงานของฉัน (My Projects - Dynamic Grid & Image CRUD)**:
     - ปุ่มฟิลเตอร์: `[ทั้งหมด]`, `[Full-Stack]`, `[Frontend]`, `[Backend]`
     - ระบบ **CRUD**: `[➕ เพิ่มผลงานใหม่]`, `[✏️ แก้ไข]`, `[🗑️ ลบ]`
     - ระบบ **`[📷 ใส่/เปลี่ยนรูปภาพผลงาน]`**: สามารถเลือกไฟล์รูปภาพจากเครื่องเพื่อเปลี่ยนรูปการ์ดผลงานได้ทันที
   - 💻 **6. การฝึกอบรม (Training & Certifications - PDF Attachment CRUD)**:
     - ระบบ **CRUD**: `[➕ เพิ่มใบรับรองใหม่]`, `[✏️ แก้ไข]`, `[🗑️ ลบ]`
     - ระบบ **`[📄 เปิดดู PDF]`**: เปิดพรีวิวใบรับรองใน Modal หรือแท็บใหม่ พร้อมปุ่มดาวน์โหลด
     - ระบบ **`[📎 แนบไฟล์ PDF]`**: อัปโหลดไฟล์ PDF จากเครื่องเพื่อแนบเข้ากับใบรับรอง

5. **Toast Notification System**:
   - แจ้งเตือนเมื่ออัปโหลดรูปภาพ, แนบ PDF, สลับธีม หรือบันทึก/ลบข้อมูล

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
ict-portfolio-khajonphan/
├── index.html                 # หน้าเว็บหลัก Single-Page Web Portfolio
├── styles.css                 # สไตล์ชีทเสริม (Typography, Pattern, Animations)
├── app.js                     # จาวาสคริปต์ควบคุมระบบ i18n, CRUD, File Readers, Theme
├── schema.sql                 # Cloudflare D1 Database SQL Schema
├── wrangler.toml              # การตั้งค่า Cloudflare Pages, D1 Database และ R2 Storage
├── functions/                 # Cloudflare Pages Functions (Serverless APIs)
│   └── api/
│       ├── projects.js        # API CRUD สำหรับ Projects เชื่อมต่อ D1
│       └── upload.js          # API สำหรับอัปโหลดไฟล์ภาพและ PDF สู่ Cloudflare R2
└── README.md                  # คู่มือการใช้งานและการติดตั้ง
```

---

## 🚀 วิธีเปิดใช้งานและทดสอบในเครื่อง (Local Testing)

คุณสามารถเปิดไฟล์ `index.html` บนเบราว์เซอร์ได้ทันที หรือรันเซิร์ฟเวอร์แบบ Local:

### ใช้ Python หรือ Node.js / npx serve:
```bash
# ทางเลือกที่ 1: ใช้ Python HTTP Server
python -m http.server 8080

# ทางเลือกที่ 2: ใช้ Node.js serve
npx serve .
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:8080`

---

## ☁️ วิธีการ Deploy ขึ้น Cloudflare Pages

### 1. ติดตั้ง Wrangler CLI:
```bash
npm install -g wrangler
```

### 2. ล็อกอินเข้า Cloudflare:
```bash
wrangler login
```

### 3. สร้าง Cloudflare D1 Database และรัน Schema:
```bash
# สร้างฐานข้อมูล D1
wrangler d1 create ict_portfolio_db

# อัปเดต database_id ที่ได้ลงในไฟล์ wrangler.toml

# รันคำสั่งสร้างตาราง
wrangler d1 execute ict_portfolio_db --file=./schema.sql
```

### 4. สร้าง Cloudflare R2 Bucket:
```bash
wrangler r2 bucket create ict-portfolio-assets
```

### 5. Deploy ขึ้น Cloudflare Pages:
```bash
wrangler pages deploy . --project-name=ict-portfolio-khajonphan
```
เพียงเท่านี้ เว็บไซต์ Portfolio จะออนไลน์ผ่านเครือข่ายความเร็วสูงระดับโลกของ Cloudflare ทันที!
