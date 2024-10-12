// Contact 
function slider(anything){
    document.querySelector('.one').src = anything;
};

AOS.init({
    offset: 1
});



// Scroll UP
window.addEventListener("scroll", function() {
  let scrollUp = document.getElementById("scrollUp");

  if (window.scrollY > 90) {
      scrollUp.style.display = "block";
  } else {
      scrollUp.style.display = "none";
  }
});


// Menu mobile
let menu = document.querySelector('#menuIcon');
let navlist = document.querySelector('.navlist');

// Ouvrir / fermer le menu
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Change l'icône
    navlist.classList.toggle('open'); // Affiche / masque le menu
};

// Fonction de fermeture du menu
let closeMenuItems = document.querySelectorAll('.navlist a');

closeMenuItems.forEach(item => {
    item.onclick = () => {
        menu.classList.toggle('bx-x'); // Change l'icône
        navlist.classList.remove('open'); // Masque le menu
    };
});

