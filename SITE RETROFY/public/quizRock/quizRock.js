
    //selecionando todos os elementos necessários
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    const option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");
    

    start_btn.onclick = ()=>{
        info_box.classList.add("activeInfo");
    }
    

    exit_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo");
        window.location.href = '../quiz.html';
    }
    
    continue_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo");
        quiz_box.classList.add("activeQuiz");
        showQuetions(0);
    }
    
    let contador_questao = 0;
    let numero_questao = 1;
    let pontuacao = 0;
    let categoria = 'Rock'
    let contador;
    let counterLine;
    let msg = "";
    let imageUrl="";

    
    const next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");
    
    // if Next Que button clicked
    next_btn.onclick = ()=>{
        if(contador_questao < questions.length - 1){  //se a contagem de perguntas for menor que o tamanho total das perguntas
            contador_questao++; //incrementar o valor contador_questao
            numero_questao++; //incrementar o valor numero_questao
            showQuetions(contador_questao); //chamando a funcao showQestions 
            clearInterval(contador); //limpar contador
            clearInterval(counterLine); //limpar counterLine
            timeText.textContent = "Time Left"; //alterar o timeText para Time Left
            next_btn.classList.remove("show"); //ocultar o próximo botão
        }else{
            clearInterval(contador); //limpar contador
            clearInterval(counterLine); //limpar counterLine
            mostrarResultado(); //chamando a funcao mostrarResultado
        }
    }
    
    // obtendo perguntas e opções do array
    function showQuetions(index){
        const que_text = document.querySelector(".que_text");
    
        //criando uma nova tag span e div para question e option e passando o valor usando array index
        let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
        que_text.innerHTML = que_tag; // adicionando nova tag span dentro de que_tag
        option_list.innerHTML = option_tag; //adicionando nova tag div dentro de option_tag
    
        const option = option_list.querySelectorAll(".option");
    
        // definir o atributo onclick para todas as opções disponíveis
        for(i=0; i < option.length; i++){
            option[i].setAttribute("onclick", "opcaoSelecionada(this)");
        }
    }
    // criando as novas tags div que para ícones
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
    
    //se o usuário clicou na opção
    function opcaoSelecionada(resposta){
        clearInterval(contador); //limpar contador
        clearInterval(counterLine); //limpar counterLine
        let userResposta = resposta.textContent; //obtendo a opção selecionada pelo usuário
        let respostaCorreta = questions[contador_questao].resposta; //obtendo a resposta correta do array
        const todasOpcoes = option_list.children.length; //obtendo todos os itens de opção
    
        if(userResposta == respostaCorreta){ //se a opção selecionada pelo usuário for igual à resposta correta do array
            pontuacao += 1; // atualizando o valor da pontuação com 1
            resposta.classList.add("correct"); // adicionando cor verde para corrigir a opção selecionada
            resposta.insertAdjacentHTML("beforeend", tickIconTag); //adicionando ícone de marca para corrigir a opção selecionada
            console.log("Correct resposta");
            console.log("Your correct respostas = " + pontuacao);
        }else{
            resposta.classList.add("incorrect"); // adicionando cor vermelha para corrigir a opção selecionada
            resposta.insertAdjacentHTML("beforeend", crossIconTag); //adicionando ícone de cruz para corrigir a opção selecionada
            console.log("Wrong resposta");
    
            for(i=0; i < todasOpcoes; i++){
                if(option_list.children[i].textContent == respostaCorreta){ //se houver uma opção que corresponda a uma resposta de matriz
                    option_list.children[i].setAttribute("class", "option correct"); //adicionando a cor verde à opção correspondente
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adicionando o ícone de marca para a opção correspondente
                    console.log("Auto selected correct resposta.");
                }
            }
        }
        for(i=0; i < todasOpcoes; i++){
            option_list.children[i].classList.add("disabled"); //uma vez que o usuário seleciona uma opção, desativa todas as opções
        }
        next_btn.classList.add("show"); // mostra o próximo botão se o usuário selecionou alguma opção
    }
    
    function mostrarResultado(){
        info_box.classList.remove("activeInfo"); //ocultando info box
        quiz_box.classList.remove("activeQuiz"); //ocultando quiz box
        const scoreText = result_box.querySelector(".score_text");
        if (pontuacao == 10){ 
            msg = `<span>Parabéns! 🎉 Você gabaritou! Acertou  ${pontuacao} de ${questions.length}</span>`;
            scoreText.innerHTML = msg;  //adicionando nova tag span dentro do score_Text
        }
        else if(pontuacao > 5){ 
            msg = `<span>Mandou bem, mas ainda da para melhorar! 😎 Você acertou ${pontuacao} de ${questions.length}</span>`;
            scoreText.innerHTML = msg;
        }
        else {
            msg = `<span>Poxa, não foi dessa vez, né? 😐 Você acertou ${pontuacao} de ${questions.length}</span>`;
            scoreText.innerHTML = msg;
        }  

        fetch("/usuarios/cadastrarPontuacao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.j
                pontuacaoServer: pontuacao,
                categoriaServer: categoria,
                usuarioServer: sessionStorage.ID_USUARIO
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                Swal.fire({
    
                    imageUrl: '',
                    imageWidth: 1000,
                    title: 'Parabéns! Quiz finalizado.',
                    background: '#fff',
                    confirmButtonText: 'Ver análise!',
                    color: '#5A008D',
                    html: msg,
                }).then((result) => {
                    setTimeout(function () {
                        window.location = "../dashboard.html";
                    }, 1000);
                })
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    
        return false;
    }
