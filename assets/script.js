const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');
  const menuToggle = document.getElementById('menuToggle');
  const tabs = document.querySelectorAll('.tab');
  const treeItems = document.querySelectorAll('.tree-item');
  const breadcrumbCur = document.querySelector('#breadcrumb .cur');
  const sections = document.querySelectorAll('section[id]');

  function openSidebar(){ sidebar.classList.add('open'); backdrop.classList.add('open'); }
  function closeSidebar(){ sidebar.classList.remove('open'); backdrop.classList.remove('open'); }
  menuToggle.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  backdrop.addEventListener('click', closeSidebar);

  function setActive(id){
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
    treeItems.forEach(t => t.classList.toggle('active', t.dataset.target === id));
    const activeTab = document.querySelector('.tab[data-target="' + id + '"]');
    if(activeTab) breadcrumbCur.textContent = activeTab.textContent.trim();
  }

  [...tabs, ...treeItems].forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.target;
      const target = document.getElementById(id);
      if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
      setActive(id);
      closeSidebar();
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const scrollRoot = document.querySelector('.editor-scroll');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ setActive(e.target.id); }
    });
  }, { root: scrollRoot, threshold: 0.4 });
  sections.forEach(s => spy.observe(s));

  // ===== README MODAL =====
  const projectsData = {
    sensai: {
      name: "SensAI — AI Career Coach",
      tagline: "AI-powered career development platform",
      desc: "Helps users generate resumes, cover letters, interview preparation, personalized career roadmaps, and career insights using Google's Gemini API.",
      features: ["AI resume & cover letter generation", "Interview preparation assistant", "Personalized career roadmaps", "Career insights dashboard", "Subscription billing via Stripe"],
      tech: ["Next.js", "Node.js", "Gemini API", "NeonDB", "Tailwind CSS", "Stripe"],
      repo: "https://github.com/afsheen-pathan/sensai-ai-career-coach"
    },
    cityguard: {
      name: "CityGuard — Smart City Governance",
      tagline: "Multi-role municipal management platform",
      desc: "Allows citizens to report civic issues while enabling officers and administrators to manage complaints efficiently. AI image verification helps validate reports before processing.",
      features: ["Multi-role access — citizen, officer, admin", "Civic issue reporting", "AI image verification of reports", "Officer / admin review dashboard", "JWT-based authentication"],
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Gemini Vision API", "Cloudinary", "JWT"],
      repo: "https://github.com/afsheen-pathan/cityguard"
    },
    finance: {
      name: "Finance Dashboard API",
      tagline: "Secure backend for financial record management",
      desc: "A secure backend system for financial record management featuring authentication, role-based access control, analytics, filtering, pagination, and scalable REST APIs.",
      features: ["Secure authentication", "Role-based access control (RBAC)", "Analytics & reporting endpoints", "Filtering & pagination", "Scalable, MVC-structured REST APIs"],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC"],
      repo: "https://github.com/afsheen-pathan/finance-dashboard-api"
    },
    roadpulse: {
      name: "RoadPulse — Smart Navigation System",
      tagline: "Real-time traffic & emergency management platform",
      desc: "A real-time traffic and emergency management platform providing optimized routing, flood alerts, road blockage reporting, and live location updates.",
      features: ["Real-time optimized routing", "Flood alert notifications", "Road-blockage reporting", "Live location updates via WebSockets"],
      tech: ["React Native", "Node.js", "MongoDB", "Socket.IO", "OSRM"],
      repo: "https://github.com/afsheen-pathan/roadpulse"
    },
    tiffly: {
      name: "Tiffly — Subscription Tiffin Marketplace",
      tagline: "Food subscription marketplace connecting customers with home chefs",
      desc: "A food subscription platform connecting customers with home chefs, featuring subscription management, payments, provider dashboards, and push notifications.",
      features: ["Subscription management", "Home-chef / provider dashboards", "Stripe payment integration", "Cloudinary image uploads", "Push notifications"],
      tech: ["React Native", "Node.js", "Express.js", "Firebase", "Stripe", "Cloudinary"],
      repo: "https://github.com/afsheen-pathan/tiffly"
    },
    lms: {
      name: "Learning Management System",
      tagline: "Course platform with role-based access",
      desc: "A learning platform supporting role-based access, online courses, automated certificate generation, and secure payment integration.",
      features: ["Role-based access — student, instructor, admin", "Online course delivery", "Automated certificate generation", "Secure payment integration"],
      tech: ["PHP", "MySQL", "JavaScript", "Stripe"],
      repo: "https://github.com/afsheen-pathan/learning-management-system"
    },
    foodgo: {
      name: "FoodGo — Food Ordering App",
      tagline: "Flutter-based food ordering application",
      desc: "A Flutter-based food ordering application with product browsing, cart management, food customization, and a responsive mobile interface.",
      features: ["Product browsing & categories", "Cart management", "Food customization options", "Responsive mobile UI"],
      tech: ["Flutter", "Dart"],
      repo: "https://github.com/afsheen-pathan/foodgo"
    },
    moviewatchlist: {
      name: "🎬 Movie Watchlist",
      tagline: "Manage your personal movie watchlist",
      desc: "A simple and elegant web app to manage your personal watchlist of movies. Add your favorite films, mark them as watched, and keep your movie goals on track.",
      features: ["Add movies with title, year, genre & poster URL", "Mark movies as watched / unwatched", "Delete movies from the list", "Clean, attractive UI", "Data persistence using JSON — no external DB"],
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
      repo: "https://github.com/afsheen-pathan/MovieWatchlist"
    },
    "resume-analyzer": {
      name: "AI Resume Analyzer",
      tagline: "AI-powered resume analysis platform",
      desc: "Built with Streamlit and the Gemini API — evaluates ATS compatibility, generates resume and ATS scores, identifies missing keywords, and suggests role-specific improvements.",
      features: ["ATS compatibility score", "Resume score", "Missing keyword detection", "Suggested skills & formatting recommendations", "Role-specific, experience-level-aware analysis", "PDF report generation & JSON export", "PDF / TXT resume upload support"],
      tech: ["Python", "Streamlit", "Gemini 2.5 Flash API", "PyPDF2", "ReportLab", "python-dotenv"],
      repo: "https://github.com/afsheen-pathan/AI-Resume-Analyzer"
    },
    "python-projects": {
      name: "Python Projects",
      tagline: "A branch-per-project collection of beginner Python builds",
      desc: "Rather than one main codebase, each branch in this repository holds a small, standalone Python practice project. The default branch, day-1, is a BMI Calculator (bmi.py + a small HTML front-end + JSON history log). Browse the branches list on GitHub to see the rest.",
      features: ["One focused project per branch", "day-1 — BMI Calculator (Python + HTML + JSON storage)", "Mix of pure Python scripts and simple HTML front-ends", "Good for quickly browsing small, self-contained practice builds"],
      tech: ["Python", "HTML", "JSON"],
      repo: "https://github.com/afsheen-pathan/Python-Projects",
      branches: "https://github.com/afsheen-pathan/Python-Projects/branches"
    }
  };

  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalName = document.getElementById('modalName');
  const modalTagline = document.getElementById('modalTagline');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTech = document.getElementById('modalTech');
  const modalCode = document.getElementById('modalCode');
  const modalBranches = document.getElementById('modalBranches');
  const modalTabLabel = document.getElementById('modalTabLabel');
  const modalBreadcrumb = document.getElementById('modalBreadcrumb');

  function openModal(id){
    const p = projectsData[id];
    if(!p) return;
    modalName.textContent = p.name;
    modalTagline.textContent = p.tagline;
    modalDesc.textContent = p.desc;
    modalFeatures.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    modalTech.innerHTML = p.tech.map(t => `<span class="chip">${t}</span>`).join('');
    modalCode.href = p.repo;
    modalTabLabel.textContent = 'README.md';
    modalBreadcrumb.textContent = p.repo.split('/').pop() + ' / README.md';
    if(p.branches){
      modalBranches.href = p.branches;
      modalBranches.style.display = 'inline-flex';
    } else {
      modalBranches.style.display = 'none';
    }
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.proj-card[data-project]').forEach(card => {
    card.addEventListener('click', (e) => {
      if(e.target.closest('.proj-gh')) return; // let the GitHub icon link behave normally
      openModal(card.dataset.project);
    });
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openModal(card.dataset.project);
      }
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if(e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modalBackdrop.classList.contains('open')) closeModal();
  });
