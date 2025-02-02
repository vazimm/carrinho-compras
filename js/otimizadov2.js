let totalGeral = 0; // Declare a variável totalGeral

function limpar() {
    totalGeral = 0; // Zere o totalGeral
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = 'R$0'; // Atualize o valor total
}

function adicionar() {
    let tipo_produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    if (quantidade == 0) {
        alert("Erro de operação, Insira quantidade!");
        return;
    }

    let valorUnitario;
    if (tipo_produto === "Fone de ouvido - R$100") {
        valorUnitario = 100;
    } else if (tipo_produto === "Celular - R$1400") {
        valorUnitario = 1400;
    } else if (tipo_produto === "Oculus VR - R$5000") {
        valorUnitario = 5000;
    }

    const valor = valorUnitario * quantidade;
    totalGeral += valor; // Atualize o totalGeral

    document.querySelector("#lista-produtos").insertAdjacentHTML("afterbegin", `
       <section class="carrinho__produtos__produto">
         <span class="texto-azul">${quantidade}x</span> ${tipo_produto.split(' - ')[0]} <span class="texto-azul">R$${valor}</span>
       </section>`);

    document.getElementById("valor-total").textContent = `R$ ${totalGeral}`; // Atualize o valor total
    document.getElementById("quantidade").value = 0; // Zere a quantidade
}