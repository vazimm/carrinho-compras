let total = 0

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.querySelector(".carrinho__total").innerHTML = `Total: <span class="texto-azul" id="valor-total">R$0</span>`
    total = 0
}

function valortotal() {
    document.querySelector(".carrinho__total").innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${total}</span>`
}
function adicionar(){
    let tipo_produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    if(quantidade == 0) {
        alert("Erro de operação, Insira quantidade!")
        return
    }

    if(tipo_produto === "Fone de ouvido - R$100"){
        const valor = 100 * quantidade
        total += valor
        document.querySelector("#lista-produtos").insertAdjacentHTML("afterbegin", `
           <section class="carrinho__produtos__produto">
             <span class="texto-azul">${quantidade}x</span> Fone de ouvido <span class="texto-azul">R$${valor}</span>
           </section>`);
        valortotal();
    } else if(tipo_produto === "Celular - R$1400"){
        const valor = 1400 * quantidade
        total += valor
        document.querySelector("#lista-produtos").insertAdjacentHTML("afterbegin", `
           <section class="carrinho__produtos__produto">
             <span class="texto-azul">${quantidade}x</span> Celular <span class="texto-azul">R$${valor}</span>
           </section>`);
        valortotal();
    } else if(tipo_produto === "Oculus VR - R$5000"){
        const valor = 5000 * quantidade
        total += valor
        document.querySelector("#lista-produtos").insertAdjacentHTML("afterbegin", `
           <section class="carrinho__produtos__produto">
             <span class="texto-azul">${quantidade}x</span> Oculus VR <span class="texto-azul">R$${valor}</span>
           </section>`);
        valortotal();
    }
    
    
}

  