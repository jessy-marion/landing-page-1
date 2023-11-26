const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
 

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);


menuItems.forEach( function(menuItem) {
    menuItem.addEventListener('click', toggleMenu);
} )



// Fonction pour afficher le menu hamburger sur les versions mobiles et tablettes
function showHamburgerMenu() {
    // Code pour afficher le menu hamburger
    
}

// Fonction pour afficher la navbar sur les versions desktop
function showNavbar() {
    // Code pour afficher la navbar
}

// Vérifier la largeur de l'écran pour décider d'afficher le menu hamburger ou la navbar
function checkScreenWidth() {
    if (window.innerWidth <= 768) {
        showHamburgerMenu();
    } else {
        showNavbar();
    }
}

// Appeler la fonction checkScreenWidth au chargement de la page et lors du redimensionnement de la fenêtre
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
