
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adding offset to avoid nav bar overlap
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.btn-cta, .btn-project').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "all 0.3s ease";
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
});


const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = "translateY(-10px)";
        this.style.transition = "all 0.3s ease";
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = "translateY(0)";
    });
});


const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


const visibleStyles = `
    .visible {
        opacity: 1;
        transform: translateY(0);
        transition: all 1s ease-in-out;
    }
    
    section {
        opacity: 0;
        transform: translateY(30px);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = visibleStyles;
document.head.appendChild(styleSheet);



