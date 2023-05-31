var btnExpandir = document.querySelector('#botao-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

    //Gráfico - QUIZZES MAIS JOGADOS
    const labels = [
        `Quiz Pop`,
        `Quiz Rock`,
        `Quiz Post Punk`,
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de jogadas',
            backgroundColor: ['#F887C9', '#BF6BB6', '#85529F', '#4B3B83', '#002563', '#0000FF'],
            data: [7, 3, 2,]
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
                animation: { duration: 900 },
                hoverMode: 'index',
                stacked: false,
            }
    }; 

    const myChart = new Chart(
        document.getElementById('grafico1'),
        config);

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

    // GRÁFICO - NÃO SEI

    // const label3 = [
    //     `bla bla`,
    //     `kakaka`,
    //     `kkkkkk`,
    //     `hahaha`
    // ];

    // const data3 = {
    //     labels: label3,
    //     datasets: [{
    //         label: 'humor e risadas',
    //         backgroundColor: ['#F887C9', '#BF6BB6', '#85529F', '#4B3B83', '#002563', '#0000FF'],
    //         data: [7, 3, 3, 5,]
    //     }]
    // };

    // const config3 = {
    //     type: 'pie',
    //     data: data3,
    //     options: {
    //             animation: { duration: 900 },
    //             hoverMode: 'index',
    //             stacked: false,
    //         },
    //   }; 
      
    // const myChart3 = new Chart(
    //     document.getElementById('grafico3'),
    //     config3);