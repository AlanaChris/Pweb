function validar() {

    
    let nome = document.nomeform.elements["nome"].value;
    let email = document.nomeform.elements["email"].value;
    let comentario = document.nomeform.elements["comentario"].value;

  
    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    let pesquisa = document.getElementsByName("pesquisa");
    let resposta = "";

    for (let i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            resposta = pesquisa[i].value;
        }
    }

    if (resposta === "") {
        alert("Por favor, responda a pesquisa.");
        return false;
    }

    if (resposta === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}