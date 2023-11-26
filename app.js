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
