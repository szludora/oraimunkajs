window.addEventListener("load", init);
function init() {
    const LISTA =["edzés", "olvasás", "túrázás", "társasjáték", "biciklizés", "teniszezés"]
    const felsorolas= document.getElementById("felsorolas");
    let htmlSzoveg = htmlValtozo=listabaKiir(LISTA);
    kiir(htmlSzoveg, felsorolas);
    const felsorolasMasik = document.getElementsByClassName("maskepp")
    let htmlSzovegMasik = divKiir(LISTA);
    kiir(htmlSzovegMasik, felsorolasMasik[0])

    const gombElemek = document.querySelectorAll(".maskepp button")


    for (let index = 0; index < gombElemek.length; index++){
        gombElemek[index].addEventListener("click", divHatter)
    }

}

function listabaKiir(LISTA) {
    let htmlValtozo = "<ul>";
    for (let index = 0; index < LISTA.length; index++) {
        htmlValtozo += `<li> ${LISTA[index]} </li>`;
    }
    htmlValtozo+="</ul>";
    console.log(htmlValtozo)
    return htmlValtozo;

}

function kiir(mit, hova) {
    hova.innerHTML += mit;
}

function klikk(event) {
    tartalom = event.target.innerHTML;
    console.log(tartalom)
}

function divKiir(LISTA) {
    let htmlValtozo = "";
    for (let index = 0; index < LISTA.length; index++) {
        htmlValtozo += `<div><p> ${LISTA[index]}</p><button>ok</button></div>`;
    }
    htmlValtozo += "";
    console.log(htmlValtozo);
    return htmlValtozo;
}

function divHatter(event){
    const ELEM = event.target.parentNode
    ELEM.classList.add("hatter")
    console.log(event.target.parentNode)

}