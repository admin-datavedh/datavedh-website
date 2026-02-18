document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const courseLinks = document.querySelectorAll('.course-link');
    
    // Reference to the "Back to Courses" button
    const backToCoursesBtn = document.getElementById('back-to-courses-btn');

    // Section elements to be managed
    const allSections = document.querySelectorAll('main section');
    const homeSection = document.getElementById('home');
    const coursesSection = document.getElementById('programs');
    const courseDetailSection = document.getElementById('course-detail');
    const programHighlightsSection = document.getElementById('program-highlights');
    const successStoriesSection = document.getElementById('success-stories');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const discussSection = document.getElementById('discuss');
    const mandatoryCourseSection = document.getElementById('mandatory-course');

    // Data for course details (can be fetched from an API in a real application)
    const courseData = {
        'data-science': {
            title: 'Professional Certificate Program In Data Science & AI',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Hands-on Projects', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' },
                { text: 'Dedicated Job Portal', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { text: 'EMI Option', icon: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6a2 2 0 100-4 2 2 0 000 4z' }
            ]
        },
        'ai': {
            title: 'Foundations in Artificial Intelligence',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Capstone Project', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' },
                { text: 'Certificate of Completion', icon: 'M5 13l4 4L19 7' },
                { text: 'Online Classes', icon: 'M9.75 17.25h4.5v-4.5h-4.5v4.5z' }
            ]
        },
        'tableau': {
            title: 'Tableau for Data Visualization',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Interactive Dashboards', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Industry-Recognized', icon: 'M5 13l4 4L19 7' },
                { text: 'Flexible Schedule', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' }
            ]
        },
        'power-bi': {
            title: 'Microsoft Power BI Essentials',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Business Analytics', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Case Studies', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Official Certification', icon: 'M5 13l4 4L19 7' }
            ]
        },
        'sql': {
            title: 'SQL Fundamentals for Databases',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Database Management', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Query Optimization', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' },
                { text: 'Hands-on Labs', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' }
            ]
        },
        'python': {
            title: 'Mastering Python for Developers',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Web Development', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' },
                { text: 'Automation Skills', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Project Portfolio', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' }
            ]
        },
        'java': {
            title: 'Advanced Java Development',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Enterprise Applications', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' },
                { text: 'API Integration', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Career Mentorship', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
            ]
        },
        'qa-automation': {
            title: 'QA Automation & Testing',
            features: [
                { text: '2 Months', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Selenium & Cypress', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' },
                { text: 'Test Frameworks', icon: 'M12 8a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z' },
                { text: 'Real-time Projects', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0z' }
            ]
        }
    };

    // Function to hide all main sections
    const hideAllSections = () => {
        allSections.forEach(section => {
            section.classList.add('hidden');
        });
    };

    // Function to show a specific section
    const showSection = (section) => {
        section.classList.remove('hidden');
    };

    // Function to handle URL hash changes and show/hide sections
    const handleHashChange = () => {
        const hash = window.location.hash;
        console.log("Current hash:", hash); // Log the hash for debugging

        hideAllSections();

        // Check for course detail hashes first, and handle the ?null case
        if (hash.startsWith('#course-detail')) {
            const courseId = hash.split('?')[1];
            if (courseId && courseData[courseId]) {
                populateCourseDetails(courseId);
                showSection(courseDetailSection);
                showSection(programHighlightsSection);
            } else {
                // If the course ID is invalid, redirect to the programs page
                window.location.hash = '#programs';
            }
            return; // Exit the function to prevent the default case from running
        }

        switch (hash) {
            case '#programs':
                showSection(coursesSection);
                break;
            case '#success-stories':
                showSection(successStoriesSection);
                break;
            case '#about':
                showSection(aboutSection);
                break;
            case '#mandatory-course':
                if (mandatoryCourseSection) { 
                    showSection(mandatoryCourseSection);
                } else {
                    console.error("Mandatory course section element not found.");
                    showSection(homeSection); 
                }
                break;
            case '#contact':
                // Show both the contact section and the new discuss section
                showSection(contactSection);
                showSection(discussSection);
                break;
            case '#discuss':
                showSection(discussSection);
                break;
            default:
                // If no valid hash, show the home section by default
                showSection(homeSection);
                break;
        }
    };

    // Function to populate course details dynamically
    const populateCourseDetails = (courseId) => {
        const data = courseData[courseId];
        if (!data) return;

        // Set the title
        document.getElementById('course-title').textContent = data.title;

        // Populate features
        const featuresContainer = document.getElementById('course-features');
        featuresContainer.innerHTML = '';
        data.features.forEach(feature => {
            const featureElement = document.createElement('div');
            featureElement.className = 'flex items-center space-x-2';
            featureElement.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="${feature.icon}" />
                </svg>
                <p class="text-gray-600 font-medium">${feature.text}</p>
            `;
            featuresContainer.appendChild(featureElement);
        });
        
    };

    // Handle mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Handle navigation clicks for smooth scrolling and section display
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            window.location.hash = targetId;
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                     e.preventDefault(); // Stop default hash jump if smooth scroll is preferred
                     targetElement.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                     });
                }
            }
            mobileMenu.classList.add('hidden');
        });
    });

    // Handle course link clicks
    courseLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = link.getAttribute('data-course-id');
            window.location.hash = `#course-detail?${courseId}`;
        });
    });
    
    // New: Handle the "Back to Courses" button click
    if (backToCoursesBtn) {
        backToCoursesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#programs';
        });
    }

    // Listen for hash changes to navigate sections and show content
    window.addEventListener('hashchange', handleHashChange);

    // Initial page load, handle the current hash or show home
    handleHashChange();
    
});
