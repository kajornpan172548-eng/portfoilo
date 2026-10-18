/**
 * Vibrant Modern Tech Portfolio
 * Full Color Profile & Rich Vibrant Gradients
 * Student: Khajonphan Phakdee (SPU ICT)
 */

// --- 1. INTERNATIONALIZATION (TH / EN) ---
const I18N = {
  th: {
    // Nav & Sidebar
    navBrand: "KHAJONPHAN.P",
    navSub: "SPU ICT PORTFOLIO",
    navAbout: "ข้อมูลส่วนตัว",
    navEducation: "ประวัติการศึกษา",
    navSkills: "ทักษะความสามารถ",
    navExperience: "ประสบการณ์ทำงาน",
    navProjects: "ผลงานของฉัน",
    navCertificates: "การฝึกอบรม & ใบรับรอง",
    navContact: "ติดต่อฉัน",
    statusBadge: "พร้อมรับโอกาสฝึกงาน / ร่วมงาน",
    langToggle: "TH / EN",
    themeToggle: "ธีมสีสัน Vibrant Dark",
    collapseMenu: "ย่อเมนู",
    expandMenu: "ขยายเมนู",

    // Hero / Personal Details
    heroGreeting: "ยินดีต้อนรับ, ผมคือ",
    heroRole: "นักศึกษาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) | Full-Stack Web Developer",
    changePhoto: "เปลี่ยนรูปภาพ",
    resetPhoto: "รีเซ็ตรูปเดิม",
    gpaxLabel: "เกรดเฉลี่ยสะสม (GPAX)",
    educationQuick: "มหาวิทยาลัยศรีปทุม (SPU)",
    phoneLabel: "เบอร์โทรศัพท์",
    emailLabel: "อีเมล",
    locationLabel: "ที่อยู่",
    locationValue: "กรุงเทพมหานคร, ประเทศไทย",
    contactBtn: "ติดต่อฉันทันที",
    downloadCvBtn: "ดาวน์โหลด CV / Resume",
    statYears: "ปีการศึกษาชั้นปีที่ 4",
    statProjects: "โครงงานที่พัฒนา",
    statCerts: "ใบรับรอง & การอบรม",
    statCode: "ความพร้อมทำงาน 100%",

    // Education
    eduTitle: "ประวัติการศึกษา",
    eduSubtitle: "เส้นทางการศึกษาระดับอุดมศึกษา ณ มหาวิทยาลัยศรีปทุม (SPU)",
    eduDegree: "วิทยาศาสตรบัณฑิต (วท.บ.) สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
    eduInst: "มหาวิทยาลัยศรีปทุม (Sripatum University - SPU)",
    eduPeriod: "2564 – ปัจจุบัน (ปี 4)",
    eduMajorHighlights: "รายวิชาสำคัญและทักษะเฉพาะทาง:",
    eduHighlights: [
      "Software Engineering & Web Application Development",
      "Cloud Infrastructure Architecture & Serverless Computing",
      "Database Systems Design & Big Data Management",
      "Computer Networks & Network Security Protocols",
      "Human-Computer Interaction (HCI) & Modern UI/UX Design"
    ],
    eduHonor: "เกียรตินิยม / ทุนการศึกษาและผลการเรียนดีเด่น สาขา ICT",

    // Skills
    skillsTitle: "ทักษะความเชี่ยวชาญ",
    skillsSubtitle: "จัดหมวดหมู่ทักษะ 4 ด้านหลักเพื่อการพัฒนาดิจิทัลโซลูชันอย่างครบวงจร",
    catLang: "ภาษาโปรแกรมมิ่ง (Languages)",
    catFrontend: "การพัฒนาส่วนหน้า (Frontend)",
    catBackend: "ระบบหลังบ้านและฐานข้อมูล (Backend & DB)",
    catTools: "เครื่องมือและเดฟออปส์ (Tools & DevOps)",

    // Experience
    expTitle: "ประสบการณ์ทำงาน",
    expSubtitle: "ประวัติการฝึกงานและงานฟรีแลนซ์/Part-time ด้านการพัฒนาเว็บ",
    internTag: "งานฝึกงาน (Internship)",
    partTimeTag: "งาน Part-time / Freelance",
    academicTag: "กิจกรรมมหาวิทยาลัย",

    // Projects
    projectsTitle: "ผลงานของฉัน",
    projectsSubtitle: "โครงงานจริงที่ออกแบบและพัฒนาด้วยสถาปัตยกรรมที่ทันสมัย",
    filterAll: "ทั้งหมด",
    filterFullStack: "Full-Stack",
    filterFrontend: "Frontend",
    filterBackend: "Backend",
    addProjectBtn: "➕ เพิ่มผลงานใหม่",
    editBtn: "แก้ไข",
    deleteBtn: "ลบ",
    changeImgBtn: "📷 เปลี่ยนรูปภาพ",
    viewDemoBtn: "ดูเดโม",
    viewCodeBtn: "ซอร์สโค้ด",
    emptyProjects: "ไม่พบผลงานในหมวดหมู่นี้",

    // Certifications
    certsTitle: "การฝึกอบรม & ใบรับรอง",
    certsSubtitle: "วุฒิบัตรและการอบรมเพิ่มพูนทักษะทางวิชาชีพด้านเทคโนโลยีสารสนเทศ",
    addCertBtn: "➕ เพิ่มใบรับรองใหม่",
    viewPdfBtn: "📄 เปิดดู PDF",
    attachPdfBtn: "📎 แนบไฟล์ PDF",
    issuerLabel: "ผู้ออกใบรับรอง",
    issueDateLabel: "วันที่ได้รับ",
    credentialIdLabel: "รหัสอ้างอิง",
    noPdfAttached: "ยังไม่มีไฟล์ PDF แนบ (คลิกเพื่ออัปโหลด)",

    // Modals
    modalProjectTitleAdd: "เพิ่มผลงานใหม่",
    modalProjectTitleEdit: "แก้ไขผลงาน",
    modalCertTitleAdd: "เพิ่มใบรับรองใหม่",
    modalCertTitleEdit: "แก้ไขใบรับรอง",
    lblTitleTH: "ชื่อผลงาน / หัวข้อ (ภาษาไทย)",
    lblTitleEN: "ชื่อผลงาน / หัวข้อ (English)",
    lblCategory: "ประเภทผลงาน",
    lblDescTH: "รายละเอียด (ภาษาไทย)",
    lblDescEN: "รายละเอียด (English)",
    lblTech: "เทคโนโลยีที่ใช้ (คั่นด้วยจุลภาค เช่น React, Tailwind, D1)",
    lblDemoUrl: "ลิงก์เว็บไซต์เดโม (Demo URL)",
    lblGithubUrl: "ลิงก์ GitHub Repo",
    lblProjectImg: "เลือกรูปภาพผลงานจากเครื่อง (PNG/JPG)",
    lblIssuerTH: "สถาบัน/องค์กรผู้ออก (ภาษาไทย)",
    lblIssuerEN: "สถาบัน/องค์กรผู้ออก (English)",
    lblIssueDate: "วันที่/ปีที่ได้รับ (เช่น มี.ค. 2567 / 2024)",
    lblCredId: "รหัสใบรับรอง (Credential ID)",
    lblCertPdf: "เลือกไฟล์ PDF ใบรับรองจากเครื่อง",
    saveBtn: "บันทึกข้อมูล",
    cancelBtn: "ยกเลิก",
    closeBtn: "ปิด",
    confirmDeleteTitle: "ยืนยันการลบ",
    confirmDeleteMsg: "คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้? การดำเนินการนี้ไม่สามารถย้อนกลับได้",
    deleteConfirmBtn: "ลบรายการ",

    // PDF Viewer Modal
    pdfModalTitle: "ตัวอย่างเอกสารใบรับรอง (PDF Preview)",
    downloadPdf: "ดาวน์โหลด PDF",
    openNewTab: "เปิดในแท็บใหม่",

    // Cloudflare Footer Badge
    cloudflareReadyTitle: "Cloudflare Ready Architecture",
    cloudflareDesc: "รองรับ Cloudflare Pages, D1 Database SQL, R2 Object Storage และ Pages Functions อย่างสมบูรณ์",

    // Toasts
    toastPhotoUpdated: "อัปเดตรูปภาพโปรไฟล์เรียบร้อยแล้ว",
    toastPhotoReset: "รีเซ็ตรูปภาพโปรไฟล์เป็นค่าเริ่มต้นแล้ว",
    toastProjectAdded: "เพิ่มผลงานใหม่เรียบร้อยแล้ว",
    toastProjectUpdated: "อัปเดตผลงานเรียบร้อยแล้ว",
    toastProjectDeleted: "ลบผลงานเรียบร้อยแล้ว",
    toastCertAdded: "เพิ่มใบรับรองใหม่เรียบร้อยแล้ว",
    toastCertUpdated: "อัปเดตใบรับรองเรียบร้อยแล้ว",
    toastCertDeleted: "ลบใบรับรองเรียบร้อยแล้ว",
    toastPdfAttached: "แนบเอกสาร PDF สำเร็จแล้ว",
    toastThemeSwitched: "เปิดใช้งาน Vibrant Dark Theme",
    toastLangSwitched: "สลับเป็นภาษาไทยเรียบร้อยแล้ว"
  },
  en: {
    // Nav & Sidebar
    navBrand: "KHAJONPHAN.P",
    navSub: "SPU ICT PORTFOLIO",
    navAbout: "About Me",
    navEducation: "Education",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navCertificates: "Certifications",
    navContact: "Contact",
    statusBadge: "Open to Internship & Junior Roles",
    langToggle: "TH / EN",
    themeToggle: "Vibrant Dark Theme",
    collapseMenu: "Collapse",
    expandMenu: "Expand",

    // Hero / Personal Details
    heroGreeting: "Welcome, I am",
    heroRole: "Information & Communication Technology (ICT) Student | Full-Stack Developer",
    changePhoto: "Change Photo",
    resetPhoto: "Reset Default",
    gpaxLabel: "Cumulative GPAX",
    educationQuick: "Sripatum University (SPU)",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Bangkok, Thailand",
    contactBtn: "Get in Touch",
    downloadCvBtn: "Download Resume / CV",
    statYears: "Senior Year (4th Year)",
    statProjects: "Projects Shipped",
    statCerts: "Certifications",
    statCode: "Work Ready 100%",

    // Education
    eduTitle: "Education History",
    eduSubtitle: "Higher education background at Sripatum University (SPU)",
    eduDegree: "Bachelor of Science (B.S.) in Information and Communication Technology (ICT)",
    eduInst: "Sripatum University (SPU)",
    eduPeriod: "2021 – Present (Senior)",
    eduMajorHighlights: "Core Coursework & Competencies:",
    eduHighlights: [
      "Software Engineering & Web Application Development",
      "Cloud Infrastructure Architecture & Serverless Computing",
      "Database Systems Design & Big Data Management",
      "Computer Networks & Network Security Protocols",
      "Human-Computer Interaction (HCI) & Modern UI/UX Design"
    ],
    eduHonor: "First-Class Honors Track / Dean's List Academic Excellence Award in ICT",

    // Skills
    skillsTitle: "Technical Skills",
    skillsSubtitle: "4 core categories powering end-to-end modern digital solutions",
    catLang: "Programming Languages",
    catFrontend: "Frontend Development",
    catBackend: "Backend & Database",
    catTools: "Tools & DevOps",

    // Experience
    expTitle: "Work Experience",
    expSubtitle: "Practical internship and freelance journey in software development",
    internTag: "Internship",
    partTimeTag: "Part-time / Freelance",
    academicTag: "University Experience",

    // Projects
    projectsTitle: "My Projects",
    projectsSubtitle: "Real-world applications engineered with modern architectures",
    filterAll: "All",
    filterFullStack: "Full-Stack",
    filterFrontend: "Frontend",
    filterBackend: "Backend",
    addProjectBtn: "➕ Add New Project",
    editBtn: "Edit",
    deleteBtn: "Delete",
    changeImgBtn: "📷 Change Image",
    viewDemoBtn: "Live Demo",
    viewCodeBtn: "Source Code",
    emptyProjects: "No projects found in this category",

    // Certifications
    certsTitle: "Training & Certifications",
    certsSubtitle: "Professional credentials and workshops advancing technical expertise",
    addCertBtn: "➕ Add Certificate",
    viewPdfBtn: "📄 View PDF",
    attachPdfBtn: "📎 Attach PDF",
    issuerLabel: "Issuer",
    issueDateLabel: "Issued Date",
    credentialIdLabel: "Credential ID",
    noPdfAttached: "No PDF attached yet (Click to upload)",

    // Modals
    modalProjectTitleAdd: "Add New Project",
    modalProjectTitleEdit: "Edit Project",
    modalCertTitleAdd: "Add New Certificate",
    modalCertTitleEdit: "Edit Certificate",
    lblTitleTH: "Project Title (Thai)",
    lblTitleEN: "Project Title (English)",
    lblCategory: "Category",
    lblDescTH: "Description (Thai)",
    lblDescEN: "Description (English)",
    lblTech: "Technologies Used (comma separated, e.g. React, Tailwind, D1)",
    lblDemoUrl: "Live Demo URL",
    lblGithubUrl: "GitHub Repo URL",
    lblProjectImg: "Select Project Image (PNG/JPG)",
    lblIssuerTH: "Issuing Organization (Thai)",
    lblIssuerEN: "Issuing Organization (English)",
    lblIssueDate: "Issue Date (e.g. Mar 2024 / 2024)",
    lblCredId: "Credential ID",
    lblCertPdf: "Select Certificate PDF from device",
    saveBtn: "Save Changes",
    cancelBtn: "Cancel",
    closeBtn: "Close",
    confirmDeleteTitle: "Confirm Deletion",
    confirmDeleteMsg: "Are you sure you want to delete this item? This action cannot be undone.",
    deleteConfirmBtn: "Delete Item",

    // PDF Viewer Modal
    pdfModalTitle: "Certificate Document Preview",
    downloadPdf: "Download PDF",
    openNewTab: "Open in New Tab",

    // Cloudflare Footer Badge
    cloudflareReadyTitle: "Cloudflare Ready Architecture",
    cloudflareDesc: "Full native compatibility with Cloudflare Pages, D1 Database SQL, R2 Storage & Pages Functions.",

    // Toasts
    toastPhotoUpdated: "Profile picture updated successfully",
    toastPhotoReset: "Profile picture reset to default",
    toastProjectAdded: "New project added successfully",
    toastProjectUpdated: "Project updated successfully",
    toastProjectDeleted: "Project deleted successfully",
    toastCertAdded: "Certificate added successfully",
    toastCertUpdated: "Certificate updated successfully",
    toastCertDeleted: "Certificate deleted successfully",
    toastPdfAttached: "PDF attached successfully",
    toastThemeSwitched: "Vibrant Dark Theme Active",
    toastLangSwitched: "Language switched to English"
  }
};

// --- 2. DEFAULT INITIAL DATA ---
const DEFAULT_PROFILE = {
  nameTH: "ขจรพัน ภักดี",
  nameEN: "Khajonphan Phakdee",
  titleTH: "นักศึกษาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) | Full-Stack Web Developer",
  titleEN: "ICT Student @ Sripatum University (SPU) | Full-Stack Web Developer",
  bioTH: "นักศึกษาชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศรีปทุม มีความมุ่งมั่นในการเป็น Full-Stack Developer ที่เชี่ยวชาญการสร้าง Web Application ประสิทธิภาพสูงด้วยสถาปัตยกรรมคลาวด์ พร้อมดีไซน์ทันสมัย มีสีสันสดใส ใช้งานง่าย และตอบโจทย์ธุรกิจจริง",
  bioEN: "Senior ICT student at Sripatum University (SPU) passionate about full-stack web engineering, cloud-native architectures, and slick modern UI/UX design with vibrant digital aesthetics.",
  gpax: "3.72",
  phone: "065-573-0374",
  email: "khajonphan.phakdee@spu.ac.th",
  locationTH: "กรุงเทพมหานคร, ประเทศไทย",
  locationEN: "Bangkok, Thailand",
  github: "https://github.com/khajonphan",
  linkedin: "https://linkedin.com/in/khajonphan-phakdee",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
};

const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    titleTH: "SPU ICT Smart Portal & Student Management",
    titleEN: "SPU ICT Smart Portal & Student Management",
    category: "fullstack",
    descriptionTH: "ระบบพอร์ทัลจัดการข้อมูลการเรียนและโครงงานนักศึกษา ICT มหาวิทยาลัยศรีปทุม รองรับระบบ Role-Based Access, ส่งเอกสารออนไลน์ และแสดงผลเกรดอัตโนมัติ",
    descriptionEN: "Smart campus portal for SPU ICT students featuring role-based authorization, online project submission, and real-time academic progression tracking.",
    technologies: ["Node.js", "Express", "Tailwind CSS", "Cloudflare D1", "JWT"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://spu-ict-portal.pages.dev",
    githubUrl: "https://github.com/khajonphan/spu-ict-portal"
  },
  {
    id: "proj-2",
    titleTH: "Vibrant E-Commerce Platform & Marketplace",
    titleEN: "Vibrant E-Commerce Platform & Marketplace",
    category: "frontend",
    descriptionTH: "เว็บแอปพลิเคชันช้อปปิ้งออนไลน์ดีไซน์สวยสดใส รองรับระบบตะกร้าสินค้า ค้นหาสินค้าแบบ Instant Search แอนิเมชันลื่นไหล และ Responsive เต็มรูปแบบ",
    descriptionEN: "High-performance e-commerce interface with instant filter search, reactive cart state management, and optimized responsive checkout UX.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "Stripe API", "Zustand"],
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://mono-store-demo.pages.dev",
    githubUrl: "https://github.com/khajonphan/monochrome-store"
  },
  {
    id: "proj-3",
    titleTH: "Cloudflare D1 Serverless Task Management API",
    titleEN: "Cloudflare D1 Serverless Task Management API",
    category: "backend",
    descriptionTH: "RESTful API ประสิทธิภาพสูงที่ทำงานบน Edge Network ของ Cloudflare เชื่อมต่อฐานข้อมูล Cloudflare D1 SQL และจัดเก็บรูปภาพผ่าน R2 Storage",
    descriptionEN: "High-throughput serverless RESTful API powered by Cloudflare Workers, D1 SQL Database, and R2 Object Storage with sub-50ms latency.",
    technologies: ["Cloudflare Workers", "D1 SQL", "R2 Storage", "TypeScript", "Wrangler"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://task-api.pages.dev",
    githubUrl: "https://github.com/khajonphan/cloudflare-d1-api"
  },
  {
    id: "proj-4",
    titleTH: "Cyber Security Threat Intelligence Dashboard",
    titleEN: "Cyber Security Threat Intelligence Dashboard",
    category: "backend",
    descriptionTH: "ระบบวิเคราะห์บันทึกการเข้าถึงเครือข่ายและตรวจจับพฤติกรรมผิดปกติ (Anomaly Detection) พร้อมชาร์ตแสดงผลข้อมูลแบบเรียลไทม์",
    descriptionEN: "Network log parsing and real-time security intrusion detection system built for the SPU ICT Capstone Network Defense Research.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Chart.js", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://ict-sec-analyzer.pages.dev",
    githubUrl: "https://github.com/khajonphan/sec-log-analyzer"
  }
];

const DEFAULT_CERTS = [
  {
    id: "cert-1",
    titleTH: "Cloudflare Certified Developer Associate",
    titleEN: "Cloudflare Certified Developer Associate",
    issuerTH: "Cloudflare Inc.",
    issuerEN: "Cloudflare Inc.",
    issueDate: "2024",
    credentialId: "CF-DEV-984210",
    pdfData: null,
    pdfFilename: "Cloudflare_Developer_Certificate.pdf"
  },
  {
    id: "cert-2",
    titleTH: "Google Cloud Platform Digital Leader",
    titleEN: "Google Cloud Platform Digital Leader",
    issuerTH: "Google Cloud Skills Boost",
    issuerEN: "Google Cloud Skills Boost",
    issueDate: "2023",
    credentialId: "GCP-DL-773194",
    pdfData: null,
    pdfFilename: "Google_Cloud_Digital_Leader.pdf"
  },
  {
    id: "cert-3",
    titleTH: "SPU ICT Network Defense & Ethical Hacking",
    titleEN: "SPU ICT Network Defense & Ethical Hacking",
    issuerTH: "คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
    issuerEN: "Faculty of Information Technology, SPU",
    issueDate: "2023",
    credentialId: "SPU-ICT-SEC-2023-08",
    pdfData: null,
    pdfFilename: "SPU_ICT_Security_Workshop.pdf"
  },
  {
    id: "cert-4",
    titleTH: "Meta Front-End Developer Professional Certificate",
    titleEN: "Meta Front-End Developer Professional Certificate",
    issuerTH: "Meta / Coursera",
    issuerEN: "Meta / Coursera",
    issueDate: "2023",
    credentialId: "META-FE-551029",
    pdfData: null,
    pdfFilename: "Meta_Frontend_Specialization.pdf"
  }
];

// --- 3. STATE MANAGER ---
class StateManager {
  constructor() {
    this.lang = localStorage.getItem("portfolio_lang") || "th";
    this.theme = "dark";
    this.isSidebarCollapsed = localStorage.getItem("portfolio_sidebar_collapsed") === "true";
    
    // Load or initialize Profile
    const savedProfile = localStorage.getItem("portfolio_profile");
    this.profile = savedProfile ? JSON.parse(savedProfile) : { ...DEFAULT_PROFILE };

    // Load or initialize Projects
    const savedProjects = localStorage.getItem("portfolio_projects");
    this.projects = savedProjects ? JSON.parse(savedProjects) : [ ...DEFAULT_PROJECTS ];

    // Load or initialize Certs
    const savedCerts = localStorage.getItem("portfolio_certs");
    this.certs = savedCerts ? JSON.parse(savedCerts) : [ ...DEFAULT_CERTS ];

    this.activeProjectFilter = "all";
    this.editingProjectId = null;
    this.editingCertId = null;
  }

  saveProfile() {
    localStorage.setItem("portfolio_profile", JSON.stringify(this.profile));
  }

  saveProjects() {
    localStorage.setItem("portfolio_projects", JSON.stringify(this.projects));
  }

  saveCerts() {
    localStorage.setItem("portfolio_certs", JSON.stringify(this.certs));
  }
}

const state = new StateManager();

// --- 4. TOAST NOTIFICATION UTILITY (VIBRANT) ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const borderClass = type === "success" 
    ? "border-emerald-500/40 bg-slate-900/95 shadow-emerald-500/10" 
    : type === "error" 
    ? "border-rose-500/40 bg-slate-900/95 shadow-rose-500/10" 
    : "border-sky-500/40 bg-slate-900/95 shadow-sky-500/10";

  toast.className = `toast-enter flex items-center gap-3 px-4 py-3 rounded-xl border ${borderClass} text-white shadow-2xl text-xs font-mono font-medium transition-all backdrop-blur-md`;

  const icon = type === "success" 
    ? '<i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i>'
    : type === "error"
    ? '<i class="fa-solid fa-circle-exclamation text-rose-400 text-sm"></i>'
    : '<i class="fa-solid fa-circle-info text-sky-400 text-sm"></i>';

  toast.innerHTML = `
    <span>${icon}</span>
    <span class="flex-1">${message}</span>
    <button class="text-slate-400 hover:text-white transition" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("toast-enter");
    toast.classList.add("toast-leave");
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// --- 5. THEME MANAGER ---
function applyTheme(theme) {
  state.theme = "dark";
  document.documentElement.classList.add("dark");
  const themeIcon = document.getElementById("theme-toggle-icon");
  const themeText = document.getElementById("theme-toggle-text");
  if (themeIcon) themeIcon.className = "fa-solid fa-wand-magic-sparkles text-cyan-400 text-xs";
  if (themeText) themeText.textContent = state.lang === "th" ? "Vibrant Dark" : "Vibrant Dark";
}

function toggleTheme() {
  applyTheme("dark");
  showToast(I18N[state.lang].toastThemeSwitched);
}

// --- 6. SIDEBAR TOGGLER ---
function toggleSidebar(forceState = null) {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const collapseIcon = document.getElementById("sidebar-toggle-icon");
  const brandLabels = document.querySelectorAll(".sidebar-label");

  if (forceState !== null) {
    state.isSidebarCollapsed = forceState;
  } else {
    state.isSidebarCollapsed = !state.isSidebarCollapsed;
  }

  localStorage.setItem("portfolio_sidebar_collapsed", state.isSidebarCollapsed);

  if (state.isSidebarCollapsed) {
    sidebar.classList.add("lg:w-20");
    sidebar.classList.remove("lg:w-64");
    mainContent.classList.add("lg:pl-20");
    mainContent.classList.remove("lg:pl-64");
    brandLabels.forEach(el => el.classList.add("lg:hidden"));
    if (collapseIcon) collapseIcon.className = "fa-solid fa-angles-right text-cyan-400";
  } else {
    sidebar.classList.remove("lg:w-20");
    sidebar.classList.add("lg:w-64");
    mainContent.classList.remove("lg:pl-20");
    mainContent.classList.add("lg:pl-64");
    brandLabels.forEach(el => el.classList.remove("lg:hidden"));
    if (collapseIcon) collapseIcon.className = "fa-solid fa-angles-left text-cyan-400";
  }
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("mobile-sidebar-overlay");
  const isOpen = !sidebar.classList.contains("-translate-x-full");

  if (isOpen) {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  } else {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  }
}

// --- 7. I18N UPDATE FUNCTION ---
function updateI18nText() {
  const t = I18N[state.lang];

  // Update text for static elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Dynamic Profile Fields
  const heroName = document.getElementById("profile-name");
  const heroRole = document.getElementById("profile-role");
  const heroBio = document.getElementById("profile-bio");
  const heroPhone = document.getElementById("profile-phone");
  const heroEmail = document.getElementById("profile-email");
  const heroLocation = document.getElementById("profile-location");
  const heroGpax = document.getElementById("profile-gpax");

  if (heroName) heroName.textContent = state.lang === "th" ? state.profile.nameTH : state.profile.nameEN;
  if (heroRole) heroRole.textContent = state.lang === "th" ? state.profile.titleTH : state.profile.titleEN;
  if (heroBio) heroBio.textContent = state.lang === "th" ? state.profile.bioTH : state.profile.bioEN;
  if (heroPhone) heroPhone.textContent = state.profile.phone;
  if (heroEmail) heroEmail.textContent = state.profile.email;
  if (heroLocation) heroLocation.textContent = state.lang === "th" ? state.profile.locationTH : state.profile.locationEN;
  if (heroGpax) heroGpax.textContent = state.profile.gpax;

  // Language Button Indicator
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.innerHTML = `
      <i class="fa-solid fa-globe text-[11px] text-cyan-400"></i>
      <span class="font-bold tracking-wider text-white">${state.lang.toUpperCase()}</span>
      <span class="text-xs text-slate-400">/ ${state.lang === 'th' ? 'EN' : 'TH'}</span>
    `;
  }

  // Render Projects and Certs with new language
  renderProjects(state.activeProjectFilter);
  renderCertifications();
}

function switchLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("portfolio_lang", lang);
  updateI18nText();
  showToast(I18N[state.lang].toastLangSwitched);
}

// --- 8. PROFILE AVATAR MANAGEMENT ---
function setupProfileManager() {
  const avatarImg = document.getElementById("profile-avatar-img");
  const fileInput = document.getElementById("profile-file-input");
  const resetBtn = document.getElementById("reset-avatar-btn");

  if (avatarImg && state.profile.avatar) {
    avatarImg.src = state.profile.avatar;
  }

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        showToast("กรุณาเลือกไฟล์รูปภาพ (PNG, JPG, WEBP)", "error");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        showToast("ไฟล์รูปภาพต้องมีขนาดไม่เกิน 5MB", "error");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        state.profile.avatar = base64;
        state.saveProfile();
        if (avatarImg) avatarImg.src = base64;
        showToast(I18N[state.lang].toastPhotoUpdated, "success");
      };
      reader.readAsDataURL(file);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.profile.avatar = DEFAULT_PROFILE.avatar;
      state.saveProfile();
      if (avatarImg) avatarImg.src = DEFAULT_PROFILE.avatar;
      showToast(I18N[state.lang].toastPhotoReset, "info");
    });
  }
}

// --- 9. PROJECTS CRUD SYSTEM (VIBRANT FULL-COLOR CARDS) ---
function renderProjects(filter = "all") {
  state.activeProjectFilter = filter;
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const t = I18N[state.lang];
  const filtered = filter === "all" 
    ? state.projects 
    : state.projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center border border-dashed border-slate-700/60 rounded-2xl bg-slate-900/40">
        <i class="fa-solid fa-folder-open text-4xl text-slate-500 mb-3"></i>
        <p class="text-slate-400 font-mono text-xs">${t.emptyProjects}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(proj => {
    const title = state.lang === "th" ? proj.titleTH : proj.titleEN;
    const desc = state.lang === "th" ? proj.descriptionTH : proj.descriptionEN;
    const techBadges = (Array.isArray(proj.technologies) ? proj.technologies : proj.technologies.split(','))
      .map(t => `<span class="px-2.5 py-1 text-[11px] font-mono rounded-md border border-zinc-800 bg-zinc-900/90 text-zinc-300">${t.trim()}</span>`)
      .join("");

    return `
      <div class="group lux-card relative flex flex-col justify-between rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
        <!-- Project Image in Crisp View -->
        <div class="relative h-52 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800">
          <img src="${proj.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'}" 
               alt="${title}" 
               class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
               id="proj-img-${proj.id}" />
          
          <div class="absolute inset-0 bg-zinc-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
            <button onclick="triggerProjectImageChange('${proj.id}')" class="px-3.5 py-1.5 text-xs font-bold rounded-lg lux-btn-primary shadow-lg">
              <i class="fa-solid fa-camera mr-1"></i> ${t.changeImgBtn}
            </button>
          </div>

          <span class="absolute top-3 right-3 px-3 py-1 text-[11px] font-mono uppercase font-bold tracking-wider rounded-lg bg-zinc-900/90 border border-zinc-700 text-zinc-200 shadow-md">
            ${proj.category}
          </span>
        </div>

        <!-- Project Details -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-bold text-white mb-2 group-hover:text-zinc-200 transition tracking-tight">
              ${title}
            </h3>
            <p class="text-xs text-zinc-400 line-clamp-3 mb-5 font-normal leading-relaxed">
              ${desc}
            </p>
          </div>

          <div>
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${techBadges}
            </div>

            <!-- Project Actions Toolbar -->
            <div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div class="flex gap-2">
                ${proj.demoUrl ? `
                  <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" 
                     class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white transition shadow-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> ${t.viewDemoBtn}
                  </a>
                ` : ''}
                ${proj.githubUrl ? `
                  <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" 
                     class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white transition shadow-sm">
                    <i class="fa-brands fa-github text-[11px]"></i> ${t.viewCodeBtn}
                  </a>
                ` : ''}
              </div>

              <!-- CRUD Buttons -->
              <div class="flex items-center gap-1">
                <button onclick="openEditProjectModal('${proj.id}')" title="${t.editBtn}"
                        class="p-2 text-xs rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="deleteProject('${proj.id}')" title="${t.deleteBtn}"
                        class="p-2 text-xs rounded-lg hover:bg-rose-950/50 text-zinc-400 hover:text-rose-400 transition">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Update filter buttons UI
  document.querySelectorAll(".project-filter-btn").forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (f === filter) {
      btn.className = "project-filter-btn px-4 py-1.5 rounded-lg text-xs font-bold bg-zinc-800 text-white border border-zinc-600 shadow-md transition";
    } else {
      btn.className = "project-filter-btn px-4 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900/60 transition";
    }
  });
}

function openAddProjectModal() {
  state.editingProjectId = null;
  const t = I18N[state.lang];
  document.getElementById("project-modal-title").textContent = t.modalProjectTitleAdd;
  
  // Reset form
  document.getElementById("project-form").reset();
  document.getElementById("project-id-input").value = "";
  document.getElementById("project-img-preview").src = "";
  document.getElementById("project-img-preview-container").classList.add("hidden");

  document.getElementById("project-modal").classList.remove("hidden");
}

function openEditProjectModal(id) {
  const proj = state.projects.find(p => p.id === id);
  if (!proj) return;

  state.editingProjectId = id;
  const t = I18N[state.lang];
  document.getElementById("project-modal-title").textContent = t.modalProjectTitleEdit;

  document.getElementById("project-id-input").value = proj.id;
  document.getElementById("project-title-th").value = proj.titleTH || "";
  document.getElementById("project-title-en").value = proj.titleEN || "";
  document.getElementById("project-category").value = proj.category || "fullstack";
  document.getElementById("project-desc-th").value = proj.descriptionTH || "";
  document.getElementById("project-desc-en").value = proj.descriptionEN || "";
  document.getElementById("project-tech").value = Array.isArray(proj.technologies) ? proj.technologies.join(", ") : proj.technologies;
  document.getElementById("project-demo-url").value = proj.demoUrl || "";
  document.getElementById("project-github-url").value = proj.githubUrl || "";

  const preview = document.getElementById("project-img-preview");
  const previewContainer = document.getElementById("project-img-preview-container");
  if (proj.imageUrl) {
    preview.src = proj.imageUrl;
    previewContainer.classList.remove("hidden");
  } else {
    previewContainer.classList.add("hidden");
  }

  document.getElementById("project-modal").classList.remove("hidden");
}

function closeProjectModal() {
  document.getElementById("project-modal").classList.add("hidden");
}

function handleProjectFormSubmit(e) {
  e.preventDefault();
  const idInput = document.getElementById("project-id-input").value;
  const titleTH = document.getElementById("project-title-th").value.trim();
  const titleEN = document.getElementById("project-title-en").value.trim();
  const category = document.getElementById("project-category").value;
  const descTH = document.getElementById("project-desc-th").value.trim();
  const descEN = document.getElementById("project-desc-en").value.trim();
  const techStr = document.getElementById("project-tech").value.trim();
  const demoUrl = document.getElementById("project-demo-url").value.trim();
  const githubUrl = document.getElementById("project-github-url").value.trim();
  const preview = document.getElementById("project-img-preview");

  const technologies = techStr ? techStr.split(",").map(s => s.trim()).filter(Boolean) : ["ICT"];
  const imageUrl = preview.src && !preview.src.endsWith("#") ? preview.src : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";

  if (idInput) {
    // Edit existing
    const index = state.projects.findIndex(p => p.id === idInput);
    if (index !== -1) {
      state.projects[index] = {
        ...state.projects[index],
        titleTH,
        titleEN: titleEN || titleTH,
        category,
        descriptionTH: descTH,
        descriptionEN: descEN || descTH,
        technologies,
        demoUrl,
        githubUrl,
        imageUrl
      };
      state.saveProjects();
      showToast(I18N[state.lang].toastProjectUpdated, "success");
    }
  } else {
    // Add new
    const newProject = {
      id: `proj-${Date.now()}`,
      titleTH,
      titleEN: titleEN || titleTH,
      category,
      descriptionTH: descTH,
      descriptionEN: descEN || descTH,
      technologies,
      demoUrl,
      githubUrl,
      imageUrl
    };
    state.projects.unshift(newProject);
    state.saveProjects();
    showToast(I18N[state.lang].toastProjectAdded, "success");
  }

  closeProjectModal();
  renderProjects(state.activeProjectFilter);
}

function deleteProject(id) {
  const t = I18N[state.lang];
  if (confirm(t.confirmDeleteMsg)) {
    state.projects = state.projects.filter(p => p.id !== id);
    state.saveProjects();
    renderProjects(state.activeProjectFilter);
    showToast(t.toastProjectDeleted, "info");
  }
}

// Quick trigger image change on project card
let targetProjectIdForImageChange = null;
function triggerProjectImageChange(id) {
  targetProjectIdForImageChange = id;
  const input = document.getElementById("quick-project-image-input");
  if (input) {
    input.value = "";
    input.click();
  }
}

function handleQuickProjectImageChange(e) {
  const file = e.target.files[0];
  if (!file || !targetProjectIdForImageChange) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const base64 = event.target.result;
    const proj = state.projects.find(p => p.id === targetProjectIdForImageChange);
    if (proj) {
      proj.imageUrl = base64;
      state.saveProjects();
      renderProjects(state.activeProjectFilter);
      showToast(I18N[state.lang].toastPhotoUpdated, "success");
    }
  };
  reader.readAsDataURL(file);
}

// --- 10. CERTIFICATIONS & PDF ATTACHMENT CRUD ---
function renderCertifications() {
  const container = document.getElementById("certs-grid");
  if (!container) return;

  const t = I18N[state.lang];

  container.innerHTML = state.certs.map(cert => {
    const title = state.lang === "th" ? cert.titleTH : cert.titleEN;
    const issuer = state.lang === "th" ? cert.issuerTH : cert.issuerEN;
    const hasPdf = Boolean(cert.pdfData);

    return `
      <div class="lux-card p-6 rounded-2xl flex flex-col justify-between border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
        <div>
          <div class="flex items-start justify-between gap-4 mb-3">
            <div class="h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 shadow-md">
              <i class="fa-solid fa-award text-lg"></i>
            </div>
            <div class="flex items-center gap-1">
              <button onclick="openEditCertModal('${cert.id}')" title="${t.editBtn}"
                      class="p-2 text-xs rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button onclick="deleteCert('${cert.id}')" title="${t.deleteBtn}"
                      class="p-2 text-xs rounded-lg hover:bg-rose-950/50 text-zinc-400 hover:text-rose-400 transition">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          <h3 class="text-sm font-bold text-white mb-1.5 tracking-tight">
            ${title}
          </h3>
          <p class="text-xs text-zinc-400 mb-2 font-mono">
            ${t.issuerLabel}: <span class="text-zinc-200 font-semibold">${issuer}</span>
          </p>

          <div class="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-4">
            <span><i class="fa-regular fa-calendar-check mr-1 text-zinc-400"></i> ${cert.issueDate}</span>
            ${cert.credentialId ? `<span>• ID: ${cert.credentialId}</span>` : ''}
          </div>
        </div>

        <!-- PDF Attachment / Actions -->
        <div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button onclick="openPdfViewer('${cert.id}')" 
                    class="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg border ${
                      hasPdf 
                        ? 'border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 shadow-md' 
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    } transition shadow-sm">
              <i class="fa-solid fa-file-pdf"></i> ${t.viewPdfBtn}
            </button>

            <button onclick="triggerCertPdfUpload('${cert.id}')" 
                    title="${t.attachPdfBtn}"
                    class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/40 transition">
              <i class="fa-solid fa-paperclip"></i>
              <span class="hidden sm:inline">${t.attachPdfBtn}</span>
            </button>
          </div>

          ${hasPdf ? `
            <span class="inline-flex items-center gap-1 text-[11px] text-zinc-300 font-mono font-bold">
              <i class="fa-solid fa-circle-check text-emerald-400"></i> PDF
            </span>
          ` : `
            <span class="text-[11px] text-zinc-600 font-mono italic">No PDF</span>
          `}
        </div>
      </div>
    `;
  }).join("");
}

function openAddCertModal() {
  state.editingCertId = null;
  const t = I18N[state.lang];
  document.getElementById("cert-modal-title").textContent = t.modalCertTitleAdd;
  
  document.getElementById("cert-form").reset();
  document.getElementById("cert-id-input").value = "";
  document.getElementById("cert-pdf-name").textContent = "";
  document.getElementById("cert-modal").classList.remove("hidden");
}

function openEditCertModal(id) {
  const cert = state.certs.find(c => c.id === id);
  if (!cert) return;

  state.editingCertId = id;
  const t = I18N[state.lang];
  document.getElementById("cert-modal-title").textContent = t.modalCertTitleEdit;

  document.getElementById("cert-id-input").value = cert.id;
  document.getElementById("cert-title-th").value = cert.titleTH || "";
  document.getElementById("cert-title-en").value = cert.titleEN || "";
  document.getElementById("cert-issuer-th").value = cert.issuerTH || "";
  document.getElementById("cert-issuer-en").value = cert.issuerEN || "";
  document.getElementById("cert-issued-date").value = cert.issueDate || "";
  document.getElementById("cert-credential-id").value = cert.credentialId || "";
  document.getElementById("cert-pdf-name").textContent = cert.pdfFilename || "";

  document.getElementById("cert-modal").classList.remove("hidden");
}

function closeCertModal() {
  document.getElementById("cert-modal").classList.add("hidden");
}

function handleCertFormSubmit(e) {
  e.preventDefault();
  const idInput = document.getElementById("cert-id-input").value;
  const titleTH = document.getElementById("cert-title-th").value.trim();
  const titleEN = document.getElementById("cert-title-en").value.trim();
  const issuerTH = document.getElementById("cert-issuer-th").value.trim();
  const issuerEN = document.getElementById("cert-issuer-en").value.trim();
  const issueDate = document.getElementById("cert-issued-date").value.trim();
  const credentialId = document.getElementById("cert-credential-id").value.trim();

  if (idInput) {
    const idx = state.certs.findIndex(c => c.id === idInput);
    if (idx !== -1) {
      state.certs[idx] = {
        ...state.certs[idx],
        titleTH,
        titleEN: titleEN || titleTH,
        issuerTH,
        issuerEN: issuerEN || issuerTH,
        issueDate,
        credentialId
      };
      state.saveCerts();
      showToast(I18N[state.lang].toastCertUpdated, "success");
    }
  } else {
    const newCert = {
      id: `cert-${Date.now()}`,
      titleTH,
      titleEN: titleEN || titleTH,
      issuerTH,
      issuerEN: issuerEN || issuerTH,
      issueDate,
      credentialId,
      pdfData: null,
      pdfFilename: null
    };
    state.certs.unshift(newCert);
    state.saveCerts();
    showToast(I18N[state.lang].toastCertAdded, "success");
  }

  closeCertModal();
  renderCertifications();
}

function deleteCert(id) {
  const t = I18N[state.lang];
  if (confirm(t.confirmDeleteMsg)) {
    state.certs = state.certs.filter(c => c.id !== id);
    state.saveCerts();
    renderCertifications();
    showToast(t.toastCertDeleted, "info");
  }
}

// Direct quick PDF file attachment
let targetCertIdForPdfUpload = null;
function triggerCertPdfUpload(id) {
  targetCertIdForPdfUpload = id;
  const input = document.getElementById("quick-cert-pdf-input");
  if (input) {
    input.value = "";
    input.click();
  }
}

function handleQuickCertPdfChange(e) {
  const file = e.target.files[0];
  if (!file || !targetCertIdForPdfUpload) return;

  if (file.type !== "application/pdf" && !file.name.endsWith(".pdf")) {
    showToast("กรุณาเลือกไฟล์ PDF เท่านั้น", "error");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showToast("ขนาดไฟล์ PDF ต้องไม่เกิน 10MB", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const base64 = event.target.result;
    const cert = state.certs.find(c => c.id === targetCertIdForPdfUpload);
    if (cert) {
      cert.pdfData = base64;
      cert.pdfFilename = file.name;
      state.saveCerts();
      renderCertifications();
      showToast(`${I18N[state.lang].toastPdfAttached}: ${file.name}`, "success");
    }
  };
  reader.readAsDataURL(file);
}

// In-app PDF Viewer Modal
function openPdfViewer(id) {
  const cert = state.certs.find(c => c.id === id);
  if (!cert) return;

  const t = I18N[state.lang];
  const modal = document.getElementById("pdf-viewer-modal");
  const modalTitle = document.getElementById("pdf-viewer-title");
  const iframe = document.getElementById("pdf-viewer-frame");
  const fallback = document.getElementById("pdf-viewer-fallback");
  const downloadLink = document.getElementById("pdf-download-link");
  const openTabLink = document.getElementById("pdf-opentab-link");

  const title = state.lang === "th" ? cert.titleTH : cert.titleEN;
  modalTitle.textContent = `${t.pdfModalTitle}: ${title}`;

  if (cert.pdfData) {
    iframe.src = cert.pdfData;
    iframe.classList.remove("hidden");
    fallback.classList.add("hidden");

    downloadLink.href = cert.pdfData;
    downloadLink.download = cert.pdfFilename || "certificate.pdf";
    downloadLink.classList.remove("hidden");

    openTabLink.onclick = () => {
      const win = window.open();
      win.document.write(`<iframe src="${cert.pdfData}" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>`);
    };
    openTabLink.classList.remove("hidden");
  } else {
    iframe.classList.add("hidden");
    fallback.classList.remove("hidden");
    downloadLink.classList.add("hidden");
    openTabLink.classList.add("hidden");

    fallback.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-white rounded-xl border border-slate-800">
        <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-4 text-purple-400 border border-purple-500/30 shadow-lg">
          <i class="fa-solid fa-certificate text-5xl"></i>
        </div>
        <h4 class="text-xl font-bold mb-1">${title}</h4>
        <p class="text-sm text-cyan-400 mb-2 font-mono">${state.lang === 'th' ? cert.issuerTH : cert.issuerEN}</p>
        <p class="text-xs font-mono text-slate-400 mb-6">ID: ${cert.credentialId || 'VERIFIED-CREDENTIAL'}</p>
        <p class="text-xs text-slate-400 max-w-sm mb-6">${t.noPdfAttached}</p>
        <button onclick="triggerCertPdfUpload('${cert.id}')" class="px-5 py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-90 transition shadow-lg">
          <i class="fa-solid fa-upload mr-1"></i> ${t.attachPdfBtn}
        </button>
      </div>
    `;
  }

  modal.classList.remove("hidden");
}

function closePdfViewer() {
  const modal = document.getElementById("pdf-viewer-modal");
  const iframe = document.getElementById("pdf-viewer-frame");
  if (iframe) iframe.src = "";
  if (modal) modal.classList.add("hidden");
}

// --- 11. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Theme & Language
  applyTheme(state.theme);
  updateI18nText();

// --- 11. VIEW SWITCHER (NO VERTICAL SCROLLING) ---
function switchView(viewId, updateHash = true) {
  if (!viewId) return;
  const cleanId = viewId.replace("#", "");
  const targetView = document.getElementById(cleanId);
  if (!targetView) return;

  const views = document.querySelectorAll(".portfolio-view");
  const navLinks = document.querySelectorAll(".nav-item");
  const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");

  // Hide all views
  views.forEach(v => {
    v.classList.remove("active-view");
    v.style.display = "none";
  });

  // Display target view
  targetView.style.display = "block";
  void targetView.offsetWidth; // trigger reflow for smooth animation
  targetView.classList.add("active-view");

  // Update desktop sidebar nav links
  navLinks.forEach(link => {
    const target = link.getAttribute("data-nav") || link.getAttribute("href")?.replace("#", "");
    if (target === cleanId) {
      link.classList.add("nav-item-active");
    } else {
      link.classList.remove("nav-item-active");
    }
  });

  // Update mobile bottom nav buttons
  mobileNavBtns.forEach(btn => {
    const target = btn.getAttribute("data-nav");
    if (target === cleanId) {
      btn.classList.add("mobile-nav-active");
    } else {
      btn.classList.remove("mobile-nav-active");
    }
  });

  // Update header breadcrumb
  const currentViewLabel = document.getElementById("header-current-view");
  if (currentViewLabel) {
    currentViewLabel.textContent = cleanId.toUpperCase();
  }

  // Update URL hash without causing a page jump
  if (updateHash && window.location.hash !== "#" + cleanId) {
    history.replaceState(null, "", "#" + cleanId);
  }

  // Ensure scroll position is reset to top cleanly without smooth scroll animation
  window.scrollTo(0, 0);

  // Close mobile drawer if open
  const sidebar = document.getElementById("sidebar");
  if (sidebar && !sidebar.classList.contains("-translate-x-full") && window.innerWidth < 1024) {
    toggleMobileSidebar();
  }
}

// --- 12. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Theme & Language
  applyTheme(state.theme);
  updateI18nText();

  // Sidebar initial collapse state
  if (state.isSidebarCollapsed) {
    toggleSidebar(true);
  }

  // Profile setup
  setupProfileManager();

  // Listeners for Project image input in modal
  const projectImgInput = document.getElementById("project-img-input");
  if (projectImgInput) {
    projectImgInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const preview = document.getElementById("project-img-preview");
        const container = document.getElementById("project-img-preview-container");
        preview.src = event.target.result;
        container.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    });
  }

  // Listeners for Cert PDF input in modal
  const certPdfInput = document.getElementById("cert-pdf-input");
  if (certPdfInput) {
    certPdfInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const nameLabel = document.getElementById("cert-pdf-name");
      nameLabel.textContent = file.name;
    });
  }

  // Intercept all hash links to switch views directly without scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href")?.replace("#", "");
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target && target.classList.contains("portfolio-view")) {
        e.preventDefault();
        switchView(targetId);
      }
    });
  });

  // Initial view load from hash or default to 'about'
  const initialView = window.location.hash ? window.location.hash.replace("#", "") : "about";
  if (document.getElementById(initialView) && document.getElementById(initialView).classList.contains("portfolio-view")) {
    switchView(initialView, false);
  } else {
    switchView("about", false);
  }

  // Handle browser back/forward buttons
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(hash) && document.getElementById(hash).classList.contains("portfolio-view")) {
      switchView(hash, false);
    }
  });
});
