var btnExpandir = document.querySelector('#botao-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

function gerarPlaylist() {
    

    res.innerHTML = ''

    if (genero == "0" || decada == "0") {
        swal("Ops", "Selecione um gênero e uma década!", "warning")
    } else if(genero == "pop" && decada == 1960) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="500px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (genero == "pop" && decada == 1970) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (genero == "pop" && decada == 1980) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (genero == "rock" && decada == 1960) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    }  
    else if (genero == "rock" && decada == 1970) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (genero == "rock" && decada == 1980) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (genero == "postPunk" && decada == 1980) {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="45%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (genero == "postPunk" && decada == 1960 || genero == "postPunk" && decada == 1970) {
        swal("Ops", "O Post Punk só surgiu em 1980. Selecione '1980'", "warning")
    }
}