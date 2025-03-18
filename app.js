let lista_de_amigos = [];

function botao_adicionar_amigo(){
    let nome_do_amigo = document.querySelector("input").value;
    let lista_exibicao = document.getElementById("html_lista_de_amigos");

    if (nome_do_amigo === "") {
        alert("Por favor, digite um nome para adicionar a sua lista de amigos.");
    } else {
        lista_de_amigos.push(nome_do_amigo);
        let nome_do_amigo_html = document.createElement("p")
        nome_do_amigo_html.textContent = nome_do_amigo;
        nome_do_amigo_html.style.color = "green";
        lista_exibicao.appendChild(nome_do_amigo_html); 
    }
    document.querySelector("input").value = ""
    resultado.innerHTML = "";
}

function botao_sortear(){
    if (lista_de_amigos.length === 0) {
        alert("Por favor, digite ao menos um nome para realizar o sorteio.");
    } else {
        sortear_amigo()
    }
}

function sortear_amigo() {
    if (lista_de_amigos.length === 0) {
        alert("Por favor, adicione ao menos um amigo para realizar o sorteio.");
    } else{
        let sorteado = lista_de_amigos[Math.floor(Math.random() * lista_de_amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ""
        resultado.textContent = "Seu amigo secreto é: " + sorteado;
        resultado.style.color = "green";
        resultado.style.color = "#39FF14";
        resultado.style.fontWeight = "bold";
        resetar_sorteio()
    }
}

function resetar_sorteio() {
    lista_de_amigos = [];
    let lista_exibicao = document.getElementById("html_lista_de_amigos");
    lista_exibicao.innerHTML = "";
}