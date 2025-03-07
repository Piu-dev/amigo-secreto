//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/* let amigos =[], contador=[] */

/* let i = prompt('Informe a quantidade de participantes'); */
let nomeAmigos =[], i=0;
function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    //console.log('Nome digitado é:', nome);
    console.log("Nome digitado:", nome); // Verificação do nomedigitado 
    if(nome == ""){
        alert('Por favor, insira um nome.');
        } else if(nomeAmigos.includes(nome)){
        /* alert('Nome já adicionado a lista'); */
        console.log('Nome já adicionado a lista');
    }
    else{
        nomeAmigos.push(nome);
        i++;
        console.log('Nome adicionado a lista com sucesso', nomeAmigos[i]);
        document.querySelector('input').value = "";
        atualizarExibicao();
        }


function atualizarExibicao(){
    console.log("Atualizando tela"); // Verificação;
    let listaNomes = document.querySelector('#listaAmigos');
    listaNomes.innerHTML = "";
    nomeAmigos.forEach(nome => {
    let li = document.createElement('li');
    li.innerText = nome;
    listaNomes.appendChild(li);
});
    console.log("Lista de nomes atualizada:", listaNomes.innerHTML); // Verificação da lista de nomes atualizada
    console.log("Total de nomes atualizado:", nomeAmigos.length); // Verificação do total de nomes atualizado
}
}

function sortearAmigo(){
    if(nomeAmigos.length == 0){
        alert('Lista Vazia');
    /*     console.log('vazia'); */
    }
    else{
        alert(`Tamanho: ${nomeAmigos.length}`);
        gerarNomeAleatorio();
    }
    

}

function gerarNomeAleatorio(){
    let aleatorio = Math.floor(Math.random() * nomeAmigos.length );
    console.log(`Aleatorio: ${aleatorio}`);
    console.log(`O nome aleatorio gerado foi: ${nomeAmigos[aleatorio]}.`);
    document.getElementById("resultado").innerText = `Nome sorteado:${nomeAmigos[aleatorio]}`;
}





