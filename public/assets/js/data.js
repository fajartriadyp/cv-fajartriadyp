console.log('Data.js loaded');

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
    if (timelineContainer) {
        experienceData.forEach((job, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item relative';
            
            let detailsHtml = '';

            if (index === 0 && typeof job.details === 'object' && !Array.isArray(job.details)) { 
                for (const category in job.details) {
                    detailsHtml += `<h4 class="text-lg font-semibold text-blue-400 mt-4 mb-2">${category}</h4>`;
                    detailsHtml += '<ul class="list-disc list-inside space-y-2">';
                    job.details[category].forEach(detail => {
                        detailsHtml += `<li class="text-slate-300">${detail}</li>`;
                    });
                    detailsHtml += '</ul>';
                }
            } else if (Array.isArray(job.details)) { 
                detailsHtml = '<ul class="list-disc list-inside space-y-2">';
                job.details.forEach(detail => {
                    detailsHtml += `<li class="text-slate-300">${detail}</li>`;
                });
                detailsHtml += '</ul>';
            }

            item.innerHTML = `
                <div class="timeline-item-trigger card-item p-6 rounded-lg shadow-xl hover:shadow-2xl cursor-pointer border border-blue-500/20">
                    <div class="flex justify-between items-start">
                        <div class="flex items-start space-x-4">
                            <img src="${job.logo}" alt="${job.company} logo" class="w-12 h-12 object-contain bg-white rounded-lg p-1" onerror="this.onerror=null; this.src='https://placehold.co/48x48/334155/94a3b8?text=...'; this.alt='Company Logo';">
                            <div>
                                <p class="text-sm font-medium text-blue-400">${job.period}</p>
                                <h3 class="text-xl font-bold text-slate-100">${job.role}</h3>
                                <p class="text-md text-blue-400">${job.company}</p>
                            </div>
                        </div>
                        <span class="text-blue-400 text-2xl transform transition-transform duration-300 chevron pt-1">►</span>
                    </div>
                </div>
                <div class="timeline-item-content hidden">
                    ${detailsHtml}
                </div>
            `;

            // Add click event listener
            const trigger = item.querySelector('.timeline-item-trigger');
            const content = item.querySelector('.timeline-item-content');
            const chevron = item.querySelector('.chevron');
            
            trigger.addEventListener('click', () => {
                // Close all other open items
                const allContents = timelineContainer.querySelectorAll('.timeline-item-content');
                const allChevrons = timelineContainer.querySelectorAll('.chevron');
                
                allContents.forEach(c => {
                    if (c !== content && !c.classList.contains('hidden')) {
                        c.classList.add('hidden');
                        c.previousElementSibling.querySelector('.chevron').style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current item
                content.classList.toggle('hidden');
                chevron.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(90deg)';
                
                // Smooth scroll
                if (!content.classList.contains('hidden')) {
                    content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });

            timelineContainer.appendChild(item);
        });
    }

    // Education Data
    const educationItems = [
        {
            degree: "Bachelor Degree, Information Technology",
            institution: "University of Al Azhar Indonesia",
            period: "2023 - 2025",
            gpa: "GPA: 3.6/4.0",
            details: "Relevant Coursework: Data Analytics, Machine Learning, Internet of Things (IoT), Cybersecurity",
            logo: "assets/images/uai.png"
        },
        {
            degree: "Associate Degree, Information Technology",
            institution: "CCIT Faculty of Engineering, University of Indonesia",
            period: "2020 - 2022",
            gpa: "GPA: 3.7/4.0",
            details: "Relevant Coursework: Big Data Analytics, IoT Systems, System Administration, Network Security",
            logo: "assets/images/UI.png"
        }
    ];

    // Initialize Education Section
    const educationContainer = document.querySelector('.education-list');
    if (educationContainer) {
        educationItems.forEach(item => {
            const el = document.createElement('div');
            el.className = "card-item p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border border-blue-500/20";
            el.innerHTML = `
                <div class="flex items-center space-x-4 mb-4">
                    <img src="${item.logo}" alt="${item.institution} logo" class="w-16 h-16 object-contain bg-white rounded-lg p-2">
                    <div>
                        <h4 class="font-bold text-lg text-slate-800 dark:text-slate-100">${item.degree}</h4>
                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">${item.institution}</a>
                        <p class="text-sm text-slate-600 dark:text-slate-400">${item.period}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">${item.gpa}</p>
                    <p class="text-sm text-slate-600 dark:text-slate-400">${item.details}</p>
                </div>
            `;
            educationContainer.appendChild(el);
        });
    }

    // Technical Certifications Data
    const technicalCertifications = [
        {
            title: "Certificate of Completion for SMTP 2024",
            issuer: "Korea Information Security Industry Association (KISIA)",
            date: "Sep 2024",
            details: "Focused on information security management principles and practices, including cyber threat intelligence, incident response, and security operations center management."
        },
        {
            title: "Software Quality Assurance",
            issuer: "Digital Talent Scholarship, KOMINFO",
            date: "Oct 2023",
            details: "Comprehensive training in quality assurance fundamentals, test automation, and API testing. Covered topics include test planning, execution, and defect management."
        },
        {
            title: "Ethical Hacking for Cyber Security Specialists",
            issuer: "Course-Net with IT-Box",
            date: "Jul 2023",
            details: "Advanced training in penetration testing, vulnerability assessment, and security analysis. Practical experience with industry-standard tools and methodologies."
        },
        {
            title: "IoT Fundamentals: IoT Security",
            issuer: "Cisco Networking Academy",
            date: "Dec 2021",
            details: "Comprehensive course on IoT security principles, network protocols, and device security. Hands-on experience with security implementations for IoT systems."
        },
        {
            title: "IoT Fundamentals: Big Data & Analytics",
            issuer: "Cisco Networking Academy",
            date: "Dec 2021",
            details: "Advanced training in IoT data collection, analysis, and visualization. Focus on real-time data processing and analytics frameworks."
        },
        {
            title: "Network Ethical Hacking with Kali",
            issuer: "Udemy",
            date: "Aug 2021",
            details: "Practical training in network security assessment and ethical hacking using Kali Linux. Covered various attack vectors and defense strategies."
        }
    ];

    // Initialize Technical Certifications
    const technicalCertsContainer = document.querySelector('.technical-certs-list');
    if (technicalCertsContainer) {
        technicalCertifications.forEach(cert => {
            const el = document.createElement('div');
            el.className = "certification-card bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300";
            el.innerHTML = `
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h4 class="font-semibold text-slate-200 mb-1">${cert.title}</h4>
                        <p class="text-sm text-blue-400">${cert.issuer}</p>
                        <p class="text-sm text-slate-400">${cert.date}</p>
                    </div>
                    <button class="expand-btn ml-4 text-blue-400 hover:text-blue-300 transition-colors">
                        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                <div class="cert-details hidden mt-4 pt-4 border-t border-slate-700/50">
                    <p class="text-sm text-slate-400 leading-relaxed">${cert.details}</p>
                </div>
            `;

            // Add click event listener
            const expandBtn = el.querySelector('.expand-btn');
            const details = el.querySelector('.cert-details');
            const icon = expandBtn.querySelector('svg');

            expandBtn.addEventListener('click', () => {
                const isExpanded = !details.classList.contains('hidden');
                
                // Close all other open cards in the same category
                const parentList = el.closest('.technical-certs-list, .professional-certs-list');
                if (parentList) {
                    parentList.querySelectorAll('.cert-details').forEach(detail => {
                        if (detail !== details && !detail.classList.contains('hidden')) {
                            detail.classList.add('hidden');
                            detail.parentElement.querySelector('svg').classList.remove('rotate-180');
                        }
                    });
                }

                // Toggle current card
                details.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');

                // Smooth scroll if expanding
                if (!isExpanded) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });

            technicalCertsContainer.appendChild(el);
        });
    }

    // Professional Development Certifications
    const professionalCertifications = [
        {
            title: "Product & Business Development Officer",
            issuer: "Bank Muamalat (Virtual Internship)",
            date: "Jul 2022",
            details: "Virtual internship focused on product development lifecycle, market analysis, and business strategy. Developed skills in project management and stakeholder communication."
        },
        {
            title: "Digital Creative Economy",
            issuer: "Skilvul Academy (KEMENPAREKRAF)",
            date: "Dec 2021",
            details: "Intensive program covering web development fundamentals and digital marketing strategies. Practical projects in HTML, CSS, JavaScript, and digital advertising."
        },
        {
            title: "Machine Learning Fundamentals",
            issuer: "Dicoding",
            date: "Apr 2021",
            details: "Introduction to machine learning concepts, algorithms, and practical implementations using Python. Included projects in data preprocessing and model development."
        },
        {
            title: "Python Programming",
            issuer: "Dicoding",
            date: "Mar 2021",
            details: "Comprehensive Python programming course covering core concepts, data structures, and best practices. Included practical projects and problem-solving exercises."
        },
        {
            title: "Basic SQL & Database Management",
            issuer: "Dicoding",
            date: "Feb 2021",
            details: "Fundamentals of SQL and database management, including query optimization, database design, and data manipulation."
        },
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "AWS Training and Certification",
            date: "Jan 2021",
            details: "Overview of AWS Cloud concepts, services, security, architecture, pricing, and support. Practical experience with core AWS services and best practices."
        }
    ];

    // Initialize Professional Certifications
    const professionalCertsContainer = document.querySelector('.professional-certs-list');
    if (professionalCertsContainer) {
        professionalCertifications.forEach(cert => {
            const el = document.createElement('div');
            el.className = "certification-card bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300";
            el.innerHTML = `
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h4 class="font-semibold text-slate-200 mb-1">${cert.title}</h4>
                        <p class="text-sm text-blue-400">${cert.issuer}</p>
                        <p class="text-sm text-slate-400">${cert.date}</p>
                    </div>
                    <button class="expand-btn ml-4 text-blue-400 hover:text-blue-300 transition-colors">
                        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                <div class="cert-details hidden mt-4 pt-4 border-t border-slate-700/50">
                    <p class="text-sm text-slate-400 leading-relaxed">${cert.details}</p>
                </div>
            `;

            // Add click event listener
            const expandBtn = el.querySelector('.expand-btn');
            const details = el.querySelector('.cert-details');
            const icon = expandBtn.querySelector('svg');

            expandBtn.addEventListener('click', () => {
                const isExpanded = !details.classList.contains('hidden');
                
                // Close all other open cards in the same category
                const parentList = el.closest('.technical-certs-list, .professional-certs-list');
                if (parentList) {
                    parentList.querySelectorAll('.cert-details').forEach(detail => {
                        if (detail !== details && !detail.classList.contains('hidden')) {
                            detail.classList.add('hidden');
                            detail.parentElement.querySelector('svg').classList.remove('rotate-180');
                        }
                    });
                }

                // Toggle current card
                details.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');

                // Smooth scroll if expanding
                if (!isExpanded) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });

            professionalCertsContainer.appendChild(el);
        });
    }

    // Skills Data
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

    // Initialize Skills List
    const skillsListContainer = document.getElementById('skills-list');
    if (skillsListContainer) {
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
    }

    // Initialize Radar Chart
    const radarCtx = document.getElementById('skillsRadarChart');
    if (radarCtx) {
        Chart.defaults.color = '#94a3b8';
        new Chart(radarCtx.getContext('2d'), {
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
    }
}); 