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