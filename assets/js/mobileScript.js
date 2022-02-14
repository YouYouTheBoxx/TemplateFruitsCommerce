// Code pour la création dynamique des 5 fruits les plus vendus
let fruits = {
    "fruits": {
        "names":[
            'Banane','Fraise','Kiwi','Orange','Framboise'
        ],
        "description":[
            '<span>Riche en antioxydants, la banane préviendrait l’apparition de nombreuses maladies. De plus, les sucres qu’elle contient contribueraient à maintenir une bonne santé gastro-intestinale. D’un point de vue culinaire, on distingue 2 types de bananes : les bananes à dessert, comme celles que nous mangeons au petit-déjeuner, et les bananes à cuire, comme le plantain.</span><span>' +
            'Caractéristique de la banane</span><span>' +
            '</span><span>' +
            ' Source de fibres douces ;</span><span>' +
            'Excellente source de potassium ;</span><span>' +
            'Favorise la satiété ;</span><span>' +
            'Régule le transit ;</span><span>' +
            'Riche en vitamines, minéraux et antioxydants.</span>','<span>A l\'arrivée du printemps, la fraise fait son apparition sur nos étals pour le bonheur des plus gourmands. Ce petit fruit rouge est riche en vitamines et minéraux et possède de nombreux bienfaits pour la santé. On la consomme généralement en dessert, crue avec du sucre ou de la chantilly, mais elle se marie également très bien avec des salades pour un mélange sucré/salé.</span><span>' +
            'Caractéristiques de la fraise</span>' +
            '<span>' +
            ' Peu calorique ;</span><span>' +
            'Riche en fibres ;</span><span>' +
            'Riche en vitamine C ;</span><span>' +
            'Source d\'antioxydants ;</span><span>' +
            'Stimule le système immunitaire.</span>','<span>Un seul kiwi renferme une quantité impressionnante de fibres. Grâce aux antioxydants qu’il contient, le consommer régulièrement préviendrait l’apparition de maladies cardiovasculaires et de certains cancers. Côté cuisine, le kiwi permet la réalisation de recettes à la fois saines, colorées et gourmandes.</span><span>' +
            'Caractéristiques du kiwi</span><span>' +
            '</span><span>' +
            ' Fort pouvoir antioxydant ;</span><span>' +
            'Peu calorique ;</span><span>' +
            'Très bonne source de fibres ;</span><span>' +
            'Favorise la santé cardiovasculaire ;</span><span>' +
            'Contribue à prévenir les pathologies chroniques.</span>','<span>L\'orange est l\'un des fruits les plus consommés en France dont on se régale en hiver puisqu\'on la trouve principalement de décembre à avril sur nos étals. Elle se consomme principalement crue en dessert mais elle ajoute également une touche sucrée aux salades.</span><span>' +
            'Caractéristiques de l\'orange</span><span>' +
            '</span><span>' +
            ' Riche en vitamine C ;</span><span>' +
            'Source de fibres ;</span><span>' +
            'Pauvre en calories ;</span><span>' +
            'Source de calcium et magnésium ;</span><span>' +
            'Stimule le système immunitaire.</span>','<span>Les framboises et les mûres sont deux petits fruits rouges stars de l’été. On les apprécie pour leur saveur sucrée et acidulée autant que pour leurs jolies couleurs vives. Côté cuisine, les fruits rouges se prêtent à toutes les associations et peuvent être dégustés aussi bien crus que cuits, seuls ou associés à d’autres ingrédients. Pour ne rien gâcher, la framboise et la mûre bénéficient d’un profil nutrition remarquable.</span><span>' +
            'Caractéristiques de la framboise et de la mûre</span><span>' +
            '</span><span>' +
            ' Pouvoir antioxydant ;</span><span>' +
            'Pauvres en sucre ;</span><span>' +
            'Favorisent la santé cardiovasculaire ;</span><span>' +
            'Peu caloriques ;</span><span>' +
            'Stimulent le transit intestinal.</span>'
        ]
    }
}

let parentModals = document.createElement('div');

for(let i=0; i < fruits["fruits"]["names"].length; i++) {
    let fruit = fruits["fruits"]["names"][i];

    let fruitSection = document.createElement('li');
    fruitSection.className = "nav-item";
    fruitSection.innerHTML = "<a id=\"btn" + i + "\" href=\"#\" class=\"nav-link\" aria-current=\"page\" title=\"\"\n" +
        "           data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" data-bs-original-title=\""+ fruit + "\">\n" +
        "            <img class=\"mobileSidebarImg\" alt=\"\" src=\"assets/img/fruits/" + fruit + ".png\">\n" +
        "        </a>";
    document.querySelector('.nav.nav-pills.flex-column.mb-auto').appendChild(fruitSection);

    strSt = "<div id=\"myModal" + i + "\" class=\"modal\">"
    + "<div class=\"modal-content-no-bootstrap\">"
    + "<span class=\"close\">&times;</span>"
    + "<div class=\"flexy\">"
    + "<h2>" + fruit + "</h2>"
    + "<p>" + fruits["fruits"]["description"][i] + "</p>"
    + "</div>"
    + "<img src=\"assets/img/fruits_background/" + fruit + ".png\" alt=\"\">"
    + "</div>";

    parentModals.innerHTML += strSt;
}

document.querySelector('body').appendChild(parentModals);

// Code pour la sidebar en version mobile --- Affichage de l'élément selectionné
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach( (element) => {
    element.addEventListener('click', (e) => {
        let currentActive = document.querySelector('.nav-link.active');
        if(currentActive !== null){
            currentActive.classList.remove('active');
        }

        let id = element.id.toString().substr(element.id.toString().length -1, 1);
        let modal = document.querySelector("#myModal" + id);

        let active = document.querySelector('.activeModal');
        if(active !== null){
            active.classList.remove('activeModal');
            active.style.display = "none";
        }

        if(modal.classList.contains('activeModal') === false){
            modal.classList.add('activeModal');
            modal.style.display = "block";
        }

        modal.style.display = "block";
        modal.querySelector('span').addEventListener('click', (e) => {
            modal.style.display = "none";

        });

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