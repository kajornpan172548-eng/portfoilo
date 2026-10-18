-- Cloudflare D1 Database Schema for ICT Portfolio
-- Profile: Khajonphan Phakdee (SPU ICT)

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY DEFAULT 'main_profile',
    full_name_th TEXT NOT NULL,
    full_name_en TEXT NOT NULL,
    title_th TEXT NOT NULL,
    title_en TEXT NOT NULL,
    bio_th TEXT,
    bio_en TEXT,
    gpax REAL DEFAULT 3.65,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    location_th TEXT,
    location_en TEXT,
    avatar_url TEXT,
    github_url TEXT,
    linkedin_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Educations Table
CREATE TABLE IF NOT EXISTS educations (
    id TEXT PRIMARY KEY,
    degree_th TEXT NOT NULL,
    degree_en TEXT NOT NULL,
    field_th TEXT NOT NULL,
    field_en TEXT NOT NULL,
    institution_th TEXT NOT NULL,
    institution_en TEXT NOT NULL,
    start_year TEXT NOT NULL,
    end_year TEXT NOT NULL,
    gpax REAL,
    description_th TEXT,
    description_en TEXT,
    honors_th TEXT,
    honors_en TEXT
);

-- 3. Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL CHECK(category IN ('languages', 'frontend', 'backend', 'tools')),
    name TEXT NOT NULL,
    level INTEGER DEFAULT 85,
    icon TEXT
);

-- 4. Work Experiences Table
CREATE TABLE IF NOT EXISTS experiences (
    id TEXT PRIMARY KEY,
    role_th TEXT NOT NULL,
    role_en TEXT NOT NULL,
    company_th TEXT NOT NULL,
    company_en TEXT NOT NULL,
    type_th TEXT NOT NULL, -- เช่น งานฝึกงาน, งาน Part-time
    type_en TEXT NOT NULL,
    period_th TEXT NOT NULL,
    period_en TEXT NOT NULL,
    description_th TEXT,
    description_en TEXT,
    technologies TEXT -- JSON Array หรือ Comma-separated list
);

-- 5. Projects Table (CRUD)
CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title_th TEXT NOT NULL,
    title_en TEXT NOT NULL,
    category TEXT NOT NULL CHECK(category IN ('fullstack', 'frontend', 'backend')),
    description_th TEXT,
    description_en TEXT,
    technologies TEXT, -- Comma-separated
    image_url TEXT,
    demo_url TEXT,
    github_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 6. Certifications & Training Table (CRUD + PDF Attachment)
CREATE TABLE IF NOT EXISTS certifications (
    id TEXT PRIMARY KEY,
    title_th TEXT NOT NULL,
    title_en TEXT NOT NULL,
    issuer_th TEXT NOT NULL,
    issuer_en TEXT NOT NULL,
    issue_date TEXT NOT NULL,
    credential_id TEXT,
    pdf_url TEXT,
    pdf_filename TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initial Mock Data Seed
INSERT OR REPLACE INTO profiles (id, full_name_th, full_name_en, title_th, title_en, bio_th, bio_en, gpax, email, phone, location_th, location_en, avatar_url, github_url, linkedin_url)
VALUES (
    'main_profile',
    'ขจรพัน ภักดี',
    'Khajonphan Phakdee',
    'นักศึกษาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) | Full-Stack Web Developer',
    'Information & Communication Technology Student | Full-Stack Web Developer',
    'นักศึกษาชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ สาขา ICT มหาวิทยาลัยศรีปทุม มีความหลงใหลในการพัฒนา Web Application สถาปัตยกรรมคลาวด์ และการออกแบบ UI/UX ที่เรียบง่าย ทันสมัย พร้อมสร้างสรรค์โซลูชันดิจิทัลที่มีประสิทธิภาพสูง',
    'Senior ICT student at Sripatum University (SPU) passionate about modern web applications, cloud architecture, and sleek UI/UX design. Eager to solve real-world problems with scalable and high-performance digital solutions.',
    3.72,
    'khajonphan.phakdee@spu.ac.th',
    '065-573-0374',
    'กรุงเทพมหานคร, ประเทศไทย',
    'Bangkok, Thailand',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    'https://github.com/khajonphan',
    'https://linkedin.com/in/khajonphan-phakdee'
);

INSERT OR REPLACE INTO educations (id, degree_th, degree_en, field_th, field_en, institution_th, institution_en, start_year, end_year, gpax, description_th, description_en, honors_th, honors_en)
VALUES (
    'edu-1',
    'ปริญญาตรี วิทยาศาสตรบัณฑิต (วท.บ.)',
    'Bachelor of Science (B.S.)',
    'เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)',
    'Information and Communication Technology (ICT)',
    'มหาวิทยาลัยศรีปทุม (SPU)',
    'Sripatum University (SPU)',
    '2564',
    'ปัจจุบัน',
    3.72,
    'เน้นการพัฒนา Full-Stack Software Engineering, Cloud Computing Architecture, Database Systems Design, Computer Networking และ Cyber Security',
    'Focused on Full-Stack Software Engineering, Cloud Computing Architecture, Database Systems, Computer Networking, and Cyber Security.',
    'ผลการเรียนดีเด่น (Dean’s List) & รางวัลโครงงานนวัตกรรม ICT ยอดเยี่ยม',
    'Dean’s List Honor & Outstanding ICT Innovative Project Award'
);
