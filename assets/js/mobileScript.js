// Code pour la création dynamique des 5 fruits les plus vendus
let fruits = {
    "fruits": {
        "names":[
            'Banane','Fraise','Kiwi','Orange','Framboise', 'Mangue', 'Mandarine', 'Ananas'
        ]
    }
}

for(let i=0; i < 5; i++) {
    let fruit = fruits["fruits"]["names"][i];

    let fruitSection = document.createElement('li');
    fruitSection.className = "nav-item";
    fruitSection.innerHTML = "<a href=\"#\" class=\"nav-link\" aria-current=\"page\" title=\"\"\n" +
        "           data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" data-bs-original-title=\""+ fruit + "\">\n" +
        "            <img class=\"mobileSidebarImg\" alt=\"\" src=\"assets/img/fruits/" + fruit + ".png\">\n" +
        "        </a>";
    document.querySelector('.nav.nav-pills.flex-column.mb-auto').appendChild(fruitSection);
}

// Code pour la sidebar en version mobile --- Affichage de l'élément selectionné
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach( (element) => {
    element.addEventListener('click', (e) => {
        let currentActive = document.querySelector('.nav-link.active');
        if(currentActive !== null){
            currentActive.classList.remove('active');
        }

        element.classList.add('active');
    });
});

document.querySelector('#sideBar > #mobileBtn').addEventListener('click', (e) => {
    let innerSidebar = document.querySelector('#ul-sidebar');
    if(innerSidebar.style.transform === "translateX(0px)"){
        innerSidebar.style.transform = "translateX(-100%)";
    } else {
        innerSidebar.style.transform = "translateX(0px)";
    }
});