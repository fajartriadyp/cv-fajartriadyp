document.addEventListener('DOMContentLoaded', function () {
    // Experience Data
    const experienceData = [
        {
            id: 'exp-spn',
            role: 'QA Engineer',
            company: 'PT Solusi Parkir Nusantara',
            logo: 'assets/images/solusiparkir.png',
            period: 'March 2023 – Present',
            details: {
                'Web Application Testing': [
                    'Developed and executed comprehensive test cases for web-based parking management system using Playwright and JavaScript',
                    'Performed end-to-end testing for user flows including parking transactions, gate operations, and reporting systems',
                    'Conducted cross-browser testing to ensure compatibility across different platforms'
                ],
                'API Testing & Integration': [
                    'Created and maintained automated API test suites using Postman and Newman for CI/CD pipeline',
                    'Tested RESTful APIs integration between parking systems and third-party services',
                    'Validated data consistency across multiple system interfaces'
                ],
                'IoT & Hardware Testing': [
                    'Led testing efforts for IoT devices including RFID readers, thermal printers, and barrier gates',
                    'Performed hardware integration testing with various parking equipment',
                    'Validated communication protocols between devices and central system'
                ],
                'Quality Assurance Process': [
                    'Implemented test automation framework from scratch, reducing manual testing time by 60%',
                    'Created and maintained test documentation including test plans, test cases, and bug reports',
                    'Collaborated with development team in agile environment for continuous improvement'
                ]
            }
        },
        {
            id: 'exp-sgg',
            role: 'QA Engineer',
            company: 'PT Super Giga Generasi',
            logo: 'assets/images/fotoyu.png',
            period: 'September 2022 – March 2023',
            details: [ 
                'Authored, executed, and maintained a comprehensive suite of over 200 detailed test cases for API testing using Mocha & Chai.',
                'Developed and meticulously documented holistic test plans, defining clear quality standards, testing scope, and procedural guidelines.',
                'Performed rigorous manual testing across developer, staging, and production environments, including functional, usability, and regression testing.',
                'Proactively identified, documented, and tracked defects, collaborating with developers on root cause analysis to enhance application stability.'
            ]
        },
        {
            id: 'exp-etp',
            role: 'QA Engineer Intern',
            company: 'PT Ekrut Teknologi Pasifik',
            logo: 'assets/images/ekrut.png',
            period: 'May 2022 – August 2022',
            details: [
                'Applied a range of QA testing methodologies across 4 distinct Ekrut software platforms.',
                'Took initiative in designing and implementing end-to-end automated test scripts using Katalon Studio.',
                'Contributed to the development of comprehensive test plans.',
                'Conducted meticulous feature and functionality testing.',
                'Developed, documented, and maintained test cases and validation reports.'
            ]
        },
        {
            id: 'exp-ejp',
            role: 'QA Engineer Intern',
            company: 'PT Eling Janji Pertama',
            logo: 'assets/images/realfood.jpeg',
            period: 'February 2022 – May 2022',
            details: [
                'Executed daily manual testing routines for the "Awal Mula" e-commerce platform.',
                'Identified opportunities for test process optimization.',
                'Updated and maintained test documentation and user manuals.'
            ]
        }
    ];

    // Initialize Timeline
    const timelineContainer = document.getElementById('timeline-container');
    experienceData.forEach((job, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item relative';
        
        let detailsHtml = '';

        if (index === 0 && typeof job.details === 'object' && !Array.isArray(job.details)) { 
            for (const category in job.details) {
                detailsHtml += `<h4 class="text-md font-semibold text-blue-400 mt-4 mb-2">${category}</h4>`;
                detailsHtml += '<ul class="list-disc list-inside space-y-1 text-slate-400 text-sm">';
                job.details[category].forEach(detail => {
                    detailsHtml += `<li>${detail}</li>`;
                });
                detailsHtml += '</ul>';
            }
        } else if (Array.isArray(job.details)) { 
            detailsHtml = '<ul class="list-disc list-inside space-y-2 text-slate-400">';
            job.details.forEach(detail => {
                detailsHtml += `<li>${detail}</li>`;
            });
            detailsHtml += '</ul>';
        }

        item.innerHTML = `
            <div class="timeline-item-trigger card-item p-6 rounded-lg shadow-xl hover:shadow-2xl cursor-pointer">
                <div class="flex justify-between items-start">
                    <div class="flex items-start space-x-4">
                        <img src="${job.logo}" alt="${job.company} logo" class="company-logo-placeholder" onerror="this.onerror=null; this.src='https://placehold.co/48x48/334155/94a3b8?text=...'; this.alt='Company Logo';">
                        <div>
                            <p class="text-sm font-medium text-blue-400">${job.period}</p>
                            <h3 class="text-xl md:text-2xl font-bold text-slate-100">${job.role}</h3>
                            <p class="text-md text-slate-400">${job.company}</p>
                        </div>
                    </div>
                    <span class="text-blue-400 text-2xl transform transition-transform duration-300 chevron pt-1">►</span>
                </div>
            </div>
            <div class="timeline-item-content">
                ${detailsHtml}
            </div>
        `;
        timelineContainer.appendChild(item);
    });

    // Event Listeners for Timeline Items
    document.querySelectorAll('.timeline-item-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            const chevron = trigger.querySelector('.chevron');
            
            const currentlyOpenTrigger = document.querySelector('.timeline-item-trigger.open');
            const currentlyOpenContent = document.querySelector('.timeline-item-content.open');

            if (currentlyOpenTrigger && currentlyOpenTrigger !== trigger) {
                currentlyOpenTrigger.classList.remove('open');
                currentlyOpenTrigger.querySelector('.chevron').classList.remove('rotate-90');
                currentlyOpenContent.classList.remove('open');
            }

            trigger.classList.toggle('open');
            content.classList.toggle('open');
            chevron.classList.toggle('rotate-90');
        });
    });

    // Initialize Skills Chart
    const skillsData = [
        {
            category: 'Testing Frameworks & Tools',
            items: ['Playwright', 'Jest', 'Supertest', 'Mocha', 'Chai', 'Katalon Studio', 'Appium', 'JMeter', 'OWASP ZAP', 'IoT Specific Tools']
        },
        {
            category: 'Programming & Scripting',
            items: ['Python', 'JavaScript', 'C++', 'R', 'Linux Shell Scripting']
        },
        {
            category: 'Databases & Version Control',
            items: ['SQL', 'Git', 'GitHub', 'GitLab CI']
        },
        {
            category: 'QA Methodologies',
            items: ['Agile Testing', 'Test Strategy Design', 'Test Planning', 'Defect Management', 'Regression Testing', 'Integration Testing', 'API Testing', 'IoT Testing', 'Hardware Validation', 'Firmware Testing', 'Embedded Software Testing', 'Network Protocol Testing', 'Root Cause Analysis']
        },
        {
            category: 'Cloud, DevOps & Other',
            items: ['AWS S3', 'Jenkins', 'Redis']
        }
    ];

    const skillsListContainer = document.getElementById('skills-list');
    skillsData.forEach(skillGroup => {
        const groupEl = document.createElement('div');
        groupEl.innerHTML = `
            <h3 class="text-xl font-semibold mb-3 text-slate-200">${skillGroup.category}</h3>
            <div class="flex flex-wrap gap-3">
                ${skillGroup.items.map(item => `<span class="bg-slate-700 text-blue-300 text-sm font-medium px-4 py-2 rounded-md shadow-md">${item}</span>`).join('')}
            </div>
        `;
        skillsListContainer.appendChild(groupEl);
    });

    // Initialize Radar Chart
    const radarCtx = document.getElementById('skillsRadarChart').getContext('2d');
    Chart.defaults.color = '#94a3b8';
    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['Automation', 'API Testing', 'IoT/Hardware', 'Test Strategy', 'Manual & Exploratory', 'Security'],
            datasets: [{
                label: 'QA Proficiency',
                data: [90, 85, 88, 85, 80, 75],
                backgroundColor: 'rgba(96, 165, 250, 0.4)',
                borderColor: 'rgba(96, 165, 250, 1)',
                borderWidth: 2.5,
                pointBackgroundColor: 'rgba(96, 165, 250, 1)',
                pointBorderColor: '#0f172a',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(96, 165, 250, 1)',
                pointRadius: 5,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#cbd5e1',
                        font: { size: 14, weight: '500' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed.r !== null) { label += context.parsed.r + '%'; }
                            return label;
                        }
                    },
                    backgroundColor: '#1e293b',
                    titleColor: '#e2e8f0',
                    bodyColor: '#e2e8f0',
                    padding: 12,
                    cornerRadius: 6,
                    borderColor: 'rgba(96, 165, 250, 0.7)',
                    borderWidth: 1,
                    titleFont: { size: 14, weight: 'bold'},
                    bodyFont: { size: 13}
                }
            },
            scales: {
                r: {
                    angleLines: { color: 'rgba(51, 65, 85, 0.8)' },
                    grid: { color: 'rgba(51, 65, 85, 0.8)' },
                    pointLabels: {
                        font: { size: 14, weight: '600' },
                        color: '#e2e8f0'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        backdropColor: 'rgba(0,0,0,0)',
                        stepSize: 20,
                        color: '#94a3b8',
                        font: { size: 11 }
                    }
                }
            }
        }
    });

    // Initialize Education & Certifications
    const educationItems = [
        {
            degree: 'Bachelor Degree, Information Technology (GPA: 3.6/4.0)',
            institution: 'University of Al Azhar Indonesia',        },
        {
            degree: 'Associate Degree, Information Technology (GPA: 3.7/4.0)', 
            institution: 'CCIT Faculty of Engineering, University of Indonesia',
        }
    ];

    const certItems = [
        {
            title: 'Certificate of Completion for SMTP 2024',
            issuer: 'Korea Information Security Industry Association (KISIA)',
            date: 'Sep 2024',
            details: 'Focused on information security management principles and practices.'
        },
        {
            title: 'Software Quality Assurance',
            issuer: 'Digital Talent Scholarship, KOMINFO',
            date: 'Oct 2023',
            details: 'Coursework: Basic Quality Assurance, Compiling Bug Reports, API Testing Automation.'
        },
        {
            title: 'Ethical Hacking for Cyber Security Specialists',
            issuer: 'Course-Net with IT-Box',
            date: 'Jul 2023',
            details: 'Coursework: SQL Injection, Penetration Testing, Threat Intelligence, Vulnerability Detection.'
        },
        {
            title: 'Product & Business Development Officer',
            issuer: 'Bank Muamalat (Virtual Internship)',
            date: 'Jul 2022',
            details: 'Coursework: Business Aspect & Goals, Research Assessment, Product & Market Fit, Data Analysis.'
        },
        {
            title: 'Digital Creative Economy',
            issuer: 'Skilvul Academy (KEMENPAREKRAF)',
            date: 'Dec 2021',
            details: 'Coursework: Web Development (HTML, CSS, PHP, Laravel), Digital Marketing (Google/Facebook Ads, SEO).'
        },
        {
            title: 'IoT & Machine Learning Certifications',
            issuer: 'Cisco & Dicoding',
            date: '2021',
            details: 'Completed multiple courses including: IoT Fundamentals (Big Data & Analytics, IoT Systems covering device security and communication protocols), Belajar Machine Learning Untuk Pemula, and Memulai Pemrograman Dengan Python.'
        }
    ];

    const educationContainer = document.querySelector('.education-list');
    educationItems.forEach(item => {
        const el = document.createElement('div');
        el.className = "card-item p-5 rounded-lg shadow-lg";
        el.innerHTML = `
            <h4 class="font-bold text-lg text-slate-100">${item.degree}</h4>
            <p class="text-slate-400">${item.institution}</p>
            <p class="text-sm text-slate-500">${item.period}</p>
        `;
        educationContainer.appendChild(el);
    });

    const certContainer = document.querySelector('.certifications-list');
    certItems.forEach(item => {
        const el = document.createElement('div');
        el.className = "card-item rounded-lg shadow-lg";
        el.innerHTML = `
            <button class="accordion-trigger-button w-full text-left p-4 hover:bg-slate-700/50 transition-colors group rounded-t-lg">
                <div class="flex justify-between items-center">
                    <div>
                        <h4 class="font-semibold text-md text-slate-200 group-hover:text-blue-300">${item.title}</h4>
                        <p class="text-sm text-slate-500">${item.issuer} - ${item.date}</p>
                    </div>
                    <svg class="w-5 h-5 text-blue-400 transform transition-transform duration-300 chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>
            <div class="accordion-content">
                <div class="px-4 pt-2 pb-4">
                    <p class="text-sm text-slate-400">${item.details}</p>
                </div>
            </div>
        `;
        certContainer.appendChild(el);
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        
        // Animate menu button
        const menuIcon = menuBtn.querySelector('svg');
        if (isMenuOpen) {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        } else {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            const menuIcon = menuBtn.querySelector('svg');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            const menuIcon = menuBtn.querySelector('svg');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('#mobile-menu a, header nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
                document.querySelectorAll('header nav a').forEach(navLink => navLink.classList.remove('active'));
                if (!mobileMenu.contains(link)) {
                    link.classList.add('active');
                }
            }
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Active Section Highlighting
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 80) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    // Fluid Background Animation
    const canvas = document.getElementById('fluid-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const properties = {
        bgColor: 'rgba(15, 23, 42, 1)',
        particleColor: 'rgba(96, 165, 250, 0.5)',
        particleRadius: 3,
        particleCount: 60,
        particleMaxVelocity: 0.5,
        lineLength: 150,
        particleLife: 6
    };

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }

        position() {
            this.x + this.velocityX > width && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
            this.y + this.velocityY > height && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        reDraw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }

        reCalculateLife() {
            if (this.life < 1) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.life = Math.random() * properties.particleLife * 60;
            }
            this.life--;
        }
    }

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, width, height);
    }

    function drawLines() {
        let x1, y1, x2, y2, length, opacity;
        for (let i in particles) {
            for (let j in particles) {
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    opacity = 1 - length / properties.lineLength;
                    ctx.lineWidth = 0.5;
                    ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawParticles() {
        for (let i in particles) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function loop() {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init() {
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle);
        }
        loop();
    }

    init();

    window.addEventListener('resize', function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Enhanced Cursor Effect
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorTrails = [];
    const trailCount = 10;

    // Create cursor trails
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        cursorTrails.push(trail);
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update cursor trails with delay
        cursorTrails.forEach((trail, index) => {
            setTimeout(() => {
                trail.style.left = `${mouseX}px`;
                trail.style.top = `${mouseY}px`;
                trail.style.opacity = '1';
                
                setTimeout(() => {
                    trail.style.opacity = '0';
                }, 100);
            }, index * 40);
        });
    });

    // Smooth cursor animation
    function updateCursor() {
        const deltaX = mouseX - cursorX;
        const deltaY = mouseY - cursorY;
        
        cursorX += deltaX * 0.1;
        cursorY += deltaY * 0.1;
        
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        
        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card-item, .timeline-item-trigger');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.border = '2px solid rgba(96, 165, 250, 0.6)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.border = '2px solid rgba(96, 165, 250, 0.8)';
        });
    });

    const contactData = {
        email: 'fajartriadyp@gmail.com',
        phone: '+6281290401324',
        linkedin: 'https://www.linkedin.com/in/fajartriadyp/',
        github: 'https://github.com/fajartriadyp'
    };

    function createContactSection() {
        const contactSection = document.createElement('section');
        contactSection.id = 'contact';
        contactSection.className = 'py-16 bg-gray-100';

        const container = document.createElement('div');
        container.className = 'container mx-auto px-4';

        const title = document.createElement('h2');
        title.className = 'text-3xl font-bold text-center mb-8';
        title.textContent = 'Contact Me';

        const contactGrid = document.createElement('div');
        contactGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

        // Email
        contactGrid.appendChild(createContactCard('Email', contactData.email, 'mailto:' + contactData.email));
        
        // Phone/WhatsApp
        contactGrid.appendChild(createContactCard('Phone/WhatsApp', contactData.phone, contactData.whatsapp));
        
        // LinkedIn
        contactGrid.appendChild(createContactCard('LinkedIn', 'fajartriadyp', contactData.linkedin));
        
        // GitHub
        contactGrid.appendChild(createContactCard('GitHub', 'fajartriadyp', contactData.github));

        container.appendChild(title);
        container.appendChild(contactGrid);
        contactSection.appendChild(container);

        return contactSection;
    }

    function createContactCard(title, value, link) {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'text-xl font-semibold mb-2';
        cardTitle.textContent = title;

        const cardLink = document.createElement('a');
        cardLink.href = link;
        cardLink.target = '_blank';
        cardLink.className = 'text-blue-600 hover:text-blue-800 transition-colors duration-300';
        cardLink.textContent = value;

        card.appendChild(cardTitle);
        card.appendChild(cardLink);

        return card;
    }

    function createExperienceCard(data) {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-lg p-6 mb-6';
        card.id = data.id;

        const header = document.createElement('div');
        header.className = 'flex items-center mb-4';

        const logoContainer = document.createElement('div');
        logoContainer.className = 'mr-4 flex-shrink-0 flex items-center justify-center';

        const logo = document.createElement('img');
        logo.src = data.logo;
        logo.alt = data.company + ' logo';
        logo.className = 'w-12 h-12 object-contain bg-transparent';

        const titleContainer = document.createElement('div');
        titleContainer.className = 'flex-grow';

        const role = document.createElement('h3');
        role.className = 'text-xl font-bold text-gray-900';
        role.textContent = data.role;

        const company = document.createElement('p');
        company.className = 'text-gray-600';
        company.textContent = data.company;

        const period = document.createElement('p');
        period.className = 'text-sm text-gray-500';
        period.textContent = data.period;

        logoContainer.appendChild(logo);
        titleContainer.appendChild(role);
        titleContainer.appendChild(company);
        titleContainer.appendChild(period);
        header.appendChild(logoContainer);
        header.appendChild(titleContainer);

        card.appendChild(header);

        return card;
    }
}); 