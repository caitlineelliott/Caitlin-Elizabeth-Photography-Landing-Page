// variables for main page & tablet / desktop nav
const pageSections = document.querySelectorAll('.nav-element');
const navContainer = document.querySelector('.nav-list');

// main objectives

/**
 * @description builds dynamic nav on page load
 * @param {event} event - page load event
 */

window.addEventListener('load', (event) => {
    for (let i = 0; i < pageSections.length; i++) {
        const newLi = document.createElement('li');
        const newLiText = document.createElement('a');
        newLiText.id = pageSections[i].id.slice(0, -8);
        newLiText.innerText = newLiText.id;
        newLi.classList.add('nav-links');
        newLi.classList.add('nav-links');
        newLiText.classList.add('nav-items');
        navContainer.append(newLi);
        newLi.append(newLiText);
    }
});

/**
 * @description styles nav and section active states
 */

window.addEventListener('scroll', () => {
    setTimeout(() => {
        for (let i = 1; i < pageSections.length; i++) {
            let activeSection = pageSections[i].getBoundingClientRect();
            if (activeSection.top <= 50 && activeSection.bottom >= 50) {
                navContainer.children[i].classList.add('nav-chevron');
                navContainer.children[i].firstChild.classList.add('active-nav');
                pageSections[i].firstElementChild.classList.add("section-title-active");
            } else {
                navContainer.children[i].classList.remove('nav-chevron');
                navContainer.children[i].firstChild.classList.remove('active-nav');
                pageSections[i].firstElementChild.classList.remove("section-title-active");
            }
        }
    }, 555);
});

/**
 * @description smooth scrolls to page sections on click
 * @param {HTMLElement} section - page section to scroll to
 */
const scrollTo = section => {
    const navHeight = 48;
    window.scroll({ top: section.offsetTop - navHeight, left: 0, behavior: 'smooth' });
};

navContainer.addEventListener('click', (e) => {
    let element = document.querySelector(`#${e.target.id}-section`);
    scrollTo(element);
});

/**
 * @description applies nav background on scroll
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('.nav').classList.add('nav-scrolled');
    } else if (window.scrollY === 0) {
        document.querySelector('.nav').classList.remove('nav-scrolled');
    }
});

// variables for mobile nav
const hamIcon = document.querySelector('.hamburger-icon');
const closeBtn = document.querySelector('.close-btn');

/**
 * @description toggles mobile nav active & resting states
 */

const restingNav = () => {
    hamIcon.classList.remove('hamburger-none');
    document.querySelector('nav').classList.add('nav');
    document.querySelector('nav').classList.remove('mobile-nav');
    closeBtn.classList.remove('close-btn-active');
};

const activeNav = () => {
    hamIcon.classList.add('hamburger-none');
    document.querySelector('nav').classList.add('mobile-nav');
    document.querySelector('nav').classList.remove('nav');
    closeBtn.classList.add('close-btn-active');
    closeBtn.addEventListener('click', restingNav);
    document.querySelector('.nav-list').addEventListener('click', restingNav);
};

hamIcon.addEventListener('click', activeNav);

/**
 * @description scrolls to top of landing page on back top button click
 */
document.querySelectorAll('.top-btn').forEach(button => {
    const homeSection = document.querySelector("#home-section");
    button.addEventListener('click', () => {
        scrollTo(homeSection);
    });
});

/**
 * @description scrolls to contact section via home section button click
 */
document.querySelector('.landing-btn').addEventListener('click', () => {
    const contactSection = document.querySelector("#contact-section");
    scrollTo(contactSection);
});