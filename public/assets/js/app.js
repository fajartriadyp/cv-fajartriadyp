console.log('App.js loaded');

// Initialize dark mode
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', darkMode);
    document.body.classList.toggle('dark', darkMode);
    updateThemeToggleButton(darkMode);
}

// Toggle dark mode
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
    updateThemeToggleButton(isDark);
    updateChartColors(isDark);
}

function updateThemeToggleButton(isDark) {
    const toggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    toggleBtns.forEach(btn => {
        const sunIcon = btn.querySelector('.sun-icon');
        const moonIcon = btn.querySelector('.moon-icon');
        if (sunIcon && moonIcon) {
            sunIcon.classList.toggle('hidden', isDark);
            moonIcon.classList.toggle('hidden', !isDark);
        }
    });
}

function updateChartColors(isDark) {
    const chart = Chart.getChart('skillsRadarChart');
    if (chart) {
        const newColors = {
            backgroundColor: isDark ? 'rgba(96, 165, 250, 0.4)' : 'rgba(37, 99, 235, 0.2)',
            borderColor: isDark ? 'rgba(96, 165, 250, 1)' : 'rgba(37, 99, 235, 0.8)',
            pointBackgroundColor: isDark ? 'rgba(96, 165, 250, 1)' : 'rgba(37, 99, 235, 0.8)',
            pointBorderColor: isDark ? '#0f172a' : '#ffffff',
            pointHoverBackgroundColor: isDark ? '#fff' : '#0f172a',
            pointHoverBorderColor: isDark ? 'rgba(96, 165, 250, 1)' : 'rgba(37, 99, 235, 0.8)'
        };

        chart.data.datasets[0].backgroundColor = newColors.backgroundColor;
        chart.data.datasets[0].borderColor = newColors.borderColor;
        chart.data.datasets[0].pointBackgroundColor = newColors.pointBackgroundColor;
        chart.data.datasets[0].pointBorderColor = newColors.pointBorderColor;
        chart.data.datasets[0].pointHoverBackgroundColor = newColors.pointHoverBackgroundColor;
        chart.data.datasets[0].pointHoverBorderColor = newColors.pointHoverBorderColor;

        chart.options.scales.r.grid.color = isDark ? 'rgba(51, 65, 85, 0.8)' : 'rgba(203, 213, 225, 0.8)';
        chart.options.scales.r.angleLines.color = isDark ? 'rgba(51, 65, 85, 0.8)' : 'rgba(203, 213, 225, 0.8)';
        chart.options.scales.r.pointLabels.color = isDark ? '#e2e8f0' : '#1e293b';
        
        chart.update();
    }
}

// Initialize mobile menu
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const expanded = menu.classList.contains('hidden') ? 'false' : 'true';
            menuBtn.setAttribute('aria-expanded', expanded);
        });
    }
}

// Initialize skills chart
function initSkillsChart() {
    const ctx = document.getElementById('skillsRadarChart');
    if (!ctx) return;

    const data = {
        labels: [
            'Testing Framework & Tools',
            'Programming & Scripting',
            'Database & Version Control',
            'IoT & Hardware Testing',
            'Cloud Services & DevOps',
            'Security Testing'
        ],
        datasets: [{
            data: [90, 85, 80, 85, 75, 80],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(59, 130, 246)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(59, 130, 246)'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    };

    return new Chart(ctx, config);
}

// Initialize education section
function initEducation() {
    const container = document.querySelector('.education-list');
    if (!container) return;

    const html = educationData.map(edu => `
        <div class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
                <img src="${edu.logo}" alt="${edu.institution}" class="w-12 h-12 object-contain mr-4">
                <div>
                    <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100">${edu.degree}</h4>
                    <p class="text-slate-600 dark:text-slate-400">${edu.institution}</p>
                </div>
            </div>
            <div class="space-y-2">
                <p class="text-slate-700 dark:text-slate-300"><span class="font-medium">Period:</span> ${edu.period}</p>
                <p class="text-slate-700 dark:text-slate-300"><span class="font-medium">GPA:</span> ${edu.gpa}</p>
                <p class="text-slate-600 dark:text-slate-400 text-sm">${edu.details}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Initialize certifications section
function initCertifications() {
    const container = document.querySelector('.certifications-list');
    if (!container) return;

    const html = certificationsData.map(cert => `
        <div class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100">${cert.title}</h4>
                <span class="text-sm text-slate-500 dark:text-slate-400">${cert.date}</span>
            </div>
            <p class="text-slate-700 dark:text-slate-300 mb-2">${cert.issuer}</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">${cert.details}</p>
            <span class="inline-block mt-3 text-xs font-medium px-2 py-1 rounded ${
                cert.type === 'technical' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
            }">
                ${cert.type.charAt(0).toUpperCase() + cert.type.slice(1)}
            </span>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize dark mode
        initDarkMode();
        document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
        document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleDarkMode);

        // Initialize components
        initMobileMenu();
        initSkillsChart();
        initEducation();
        initCertifications();

        console.log('Initialization complete');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}); 