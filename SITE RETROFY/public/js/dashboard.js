var btnExpandir = document.querySelector('#botao-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})  

    // Gráfico - ACERTOS E ERROS
    
    const labels2 = [
        `Acertos`,
        `Erros`
    ];

    const data2 = {
        labels: labels2,
        datasets: [{
            label: 'Quantidade',
            backgroundColor: ['#F887C9', '#BF6BB6', '#85529F', '#4B3B83', '#002563', '#0000FF'],
            data: [7, 3]
        }]
    };

    const config2 = {
        type: 'doughnut',
        data: data2,
        options: {
                animation: { duration: 900 },
                hoverMode: 'index',
                stacked: false,
            },
      }; 
      
    const myChart2 = new Chart(
        document.getElementById('grafico2'),
        config2);

        