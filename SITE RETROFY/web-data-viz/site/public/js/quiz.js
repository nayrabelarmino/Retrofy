function quizPop() {
    window.parent.location.href = "/web-data-viz/site/public/quizzes/quizPop/quiz_pop.html"
}

function quizRock() {
    window.parent.location.href = "/web-data-viz/site/public/quizzes/quizRock/quizRock.html"
}

function quizPostPunk() {
    window.parent.location.href = "/web-data-viz/site/public/quizzes/quizPostPunk/quizPost.html"
}

var btnExpandir = document.querySelector('#botao-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})