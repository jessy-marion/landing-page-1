const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
 

function toggleMenu() {
    if (menu.classList.contains('showMenu') && window.innerWidth <= 768 ) {
        menu.classList.remove('showMenu');
        menu.classList.add('invisible');
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else if (window.innerWidth <= 768) {
        menu.classList.add('showMenu');
        menu.classList.remove('invisible');
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
   menuIcon.style.display = "block";
   menu.classList.remove("navBar");
    menu.classList.add("invisible");
   menu.classList.add("menu");
   
}

// Fonction pour afficher la navbar sur les versions desktop
function showNavbar() {
     menuIcon.style.display = "none";
     closeIcon.style.display = "none";
     menu.classList.remove("invisible");
     menu.classList.remove("menu");
     menu.classList.add("navBar");

    // header.style.removeProperty('position');

   
}

// Vérifier la largeur de l'écran pour décider d'afficher le menu hamburger ou la navbar
function checkScreenWidth() {
    if (window.innerWidth <= 768) {
        showHamburgerMenu();
        console.log("hamburger");
    } else {
        showNavbar();
        console.log("navbar");
    }
}

// 
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
