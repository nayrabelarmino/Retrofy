function quizPop() {
    var qtdPop = 0

    for (var contador = 0; contador < quizPop.length; contador++) {
        qtdPop++;
        console.log (quizPop[qtdPop]);
    }
    window.parent.location.href = "../quizPop/quiz_pop.html"
}

function quizRock() {
    window.parent.location.href = "/public/quizzes/quizRock/quizRock.html"
}

function quizPostPunk() {
    window.parent.location.href = "/public/quizzes/quizPostPunk/quizPost.html"
}

var btnExpandir = document.querySelector('#botao-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})