var btnExpandir = document.querySelector('#botao-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

function gerarPlaylist() {
    var playlist = selectPlaylist.value;

    res.innerHTML = ''

    if (playlist == "0") {
        swal("Ops", "Selecione uma playlist!", "warning")
    } else if(playlist == "1") {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (playlist == "2") {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (playlist == "3") {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (playlist == "4") {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    }  
    else if (playlist == "5") {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else if (playlist == "6") {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    } 
    else {
        res.innerHTML += `<iframe style="border-radius:25px" src="https://open.spotify.com/embed/playlist/3LQAId3dSC4h2PUgsvf887?utm_source=generator" 
        width="44%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    }
}