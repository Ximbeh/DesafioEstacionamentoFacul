function exibirMensagem(mensagem) {
    alert(mensagem);
  }
  
  function exibirReservasNaTela(lista) {
    const ul = document.getElementById("listaReservas");
    ul.innerHTML = "";
  
    lista.forEach((reserva, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${reserva.placa} - Vaga ${reserva.vaga} - ${reserva.proprietario}
        <button onclick="removerReserva(${index})">Remover</button>
      `;
      ul.appendChild(li);
    });
  }
  