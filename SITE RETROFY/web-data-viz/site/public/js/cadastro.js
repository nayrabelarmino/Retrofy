function irParaLogin() {
    window.parent.location.href = "login.html"
}

function fazerCadastro() {
    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "") {
        //cardErro.style.display = "block"
        swal("Ops", "Preencha todos os campos.", "error")

    }
    else if (emailVar.indexOf("gmail") == -1 || emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.length < 12) {
        swal("Ops", "O e-mail cadastrado é inválido. Por favor, insira um e-mail válido", "warning")
    }
    else if (senhaVar.length < 10) {
        swal("Ops", "A senha inserida é muito curta. Por favor, insira uma senha com pelo menos 8 caracteres", "warning")
    } else {
            swal("Parábens", "Cadastro realizado com sucesso!", "success");
    }
}
    // else {
    //         setInterval('oi', 5000)
        

    //         // Enviando o valor da nova input
    //         fetch("/usuarios/cadastrar", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 // crie um atributo que recebe o valor recuperado aqui
    //                 // Agora vá para o arquivo routes/usuario.js
    //                 nomeServer: nomeVar,
    //                 emailServer: emailVar,
    //                 senhaServer: senhaVar,
    //                 personagemServer: personagemVar
    //             })
    //         }).then(function (resposta) {

    //             console.log("resposta: ", resposta);

    //             if (resposta.ok) {
    //                 //cardErro.style.display = "block";
    //                 swal("Parábens", "Cadastro realizado com sucesso redirecionando a tela de login 😄...!", "success");


    //                 setTimeout(() => {
    //                     window.location = "login.html";
    //                 }, 3000)

    //                 limparFormulario();
    //                 finalizarAguardar();
    //             } else {
    //                 swal("Ops", "Mais de um usuário com o mesmo login e senha 😭!")
    //             }
    //         }).catch(function (resposta) {
    //             console.log(`#ERRO: ${resposta}`);
    //             finalizarAguardar();
    //         });

    //         return false;
    //     }
    // }
    // }