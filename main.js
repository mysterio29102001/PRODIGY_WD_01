document.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.hamburger');
    let navMenu = document.querySelector('nav');
    let header = document.querySelector('header');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        header.classList.toggle('active'); // Toggle active class on header
    });

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    const experienceList = document.querySelector('.experience-list');
    const skillsList = document.querySelector('.skills-list');

    const animateListItems = (list) => {
        const listItems = list.querySelectorAll('li');
        let delay = 0;
        for (const item of listItems) {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, delay);
            delay += 100; // Adjust delay between animations (in milliseconds)
        }
    };

    if (experienceList) animateListItems(experienceList);
    if (skillsList) animateListItems(skillsList);
});
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'show' class to elements in viewport
function showElementsInViewport() {
    const contactSection = document.querySelector('section#contact');
    if (isElementInViewport(contactSection)) {
        contactSection.classList.add('show');
    }
}

window.addEventListener('scroll', showElementsInViewport);
document.addEventListener('DOMContentLoaded', showElementsInViewport);