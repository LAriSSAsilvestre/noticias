 const botaoAbri = document.querySelector (".header-mobile > button")
const botaoFechar = document.querySelector (".header-mobile na button")

 const body = documente.querySelector("body")
 const nav = documente.querySelector(".header-mobile na")

botaoAbrir.addEvenListener( 'click', abrirMenu)

function abrirMenu () {
    body.classList.ads("escurecer")
    nav.classList.add("abrir")
}

function fechaMenu(){
    body.classList.remove("escurecer")
    body.classList.remove("abrir")
}