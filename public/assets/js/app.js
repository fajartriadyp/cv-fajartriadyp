console.log('App.js loaded');

// Function to populate education section
function populateEducation() {
    console.log('Populating education section...');
    const educationList = document.querySelector('.education-list');
    
    if (!educationList) {
        console.error('Education list container not found');
        return;
    }

    // Clear any existing content after the heading
    const heading = educationList.querySelector('h3');
    if (heading) {
        heading.insertAdjacentHTML('afterend', '<div id="education-items"></div>');
        const container = document.getElementById('education-items');
        
        educationData.forEach(item => {
            const educationCard = document.createElement('div');
            educationCard.className = 'card-item p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300';
            educationCard.innerHTML = `
                <div class="flex items-center space-x-4">
                    <img src="${item.logo}" alt="${item.institution} logo" 
                         class="w-12 h-12 object-contain rounded-lg bg-white p-1"
                         onerror="this.onerror=null; this.src='https://placehold.co/48x48/3b82f6/FFFFFF?text=EDU'">
                    <div class="flex-1">
                        <h4 class="font-semibold text-slate-200">${item.degree}</h4>
                        <p class="text-sm text-blue-400">${item.institution}</p>
                        <p class="text-sm text-slate-400">${item.period} | GPA: ${item.gpa}</p>
                        <p class="text-sm text-slate-500 mt-2">${item.details}</p>
                    </div>
                </div>
            `;
            container.appendChild(educationCard);
        });
    } else {
        console.error('Education heading not found');
    }
}

// Function to create certification card
function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'certification-card bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300 mb-4';
    card.innerHTML = `
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
    const expandBtn = card.querySelector('.expand-btn');
    const details = card.querySelector('.cert-details');
    const icon = expandBtn.querySelector('svg');

    expandBtn.addEventListener('click', () => {
        const isExpanded = !details.classList.contains('hidden');
        
        // Close all other open cards in the same category
        const parentList = card.closest('.certifications-list');
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
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    return card;
}

// Function to populate certifications section
function populateCertifications() {
    console.log('Populating certifications section...');
    const certsList = document.querySelector('.certifications-list');
    
    if (!certsList) {
        console.error('Certifications list container not found');
        return;
    }

    // Clear any existing content after the heading
    const heading = certsList.querySelector('h3');
    if (heading) {
        heading.insertAdjacentHTML('afterend', '<div id="certification-items"></div>');
        const container = document.getElementById('certification-items');
        
        // Sort certifications by date (newest first)
        const sortedCerts = certificationsData.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        // Create and append certification cards
        sortedCerts.forEach(cert => {
            container.appendChild(createCertificationCard(cert));
        });
    } else {
        console.error('Certifications heading not found');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing education and certifications...');
    try {
        populateEducation();
        populateCertifications();
        console.log('Education and certifications populated successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}); 