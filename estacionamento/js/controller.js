function getReservas() {
    return JSON.parse(localStorage.getItem("reservas") || "[]");
  }

  function salvarReserva(reserva) {
    const reservas = getReservas();
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
  }
  
  
  const coresHex = {
    "Branco": "#FFFFFF",
    "Preto": "#000000",
    "Cinza": "#808080",
    "Prata": "#C0C0C0",
    "Vermelho": "#FF0000",
    "Azul": "#0000FF",
    "Verde": "#008000",
    "Amarelo": "#FFD700"
  };
  
  function exibirReservas() {
    const reservas = getReservas();
    const lista = document.getElementById("listaReservas");
    if (!lista) return;
  
    lista.innerHTML = "";
    reservas.forEach((res, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${res.modelo} - ${res.placa} (${res.cor}) - Vaga ${res.vaga}
        <button class="btn-remover" onclick="removerReserva(${index})">X</button>
      `;
      lista.appendChild(li);
    });
  }
  function removerReserva(index) {
    const reservas = getReservas();
    reservas.splice(index, 1);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    exibirReservas();
    gerarGridEstacionamento(20);
  }
  function gerarGridEstacionamento(qtd = 20) {
    const reservas = getReservas();
    const grid = document.getElementById("gridEstacionamento");
    if (!grid) return;
  
    grid.innerHTML = "";
    for (let i = 1; i <= qtd; i++) {
      const vaga = document.createElement("div");
      vaga.classList.add("vaga");
  
      const ocupada = reservas.find(r => parseInt(r.vaga) === i);
      if (ocupada) {
        const bolinha = document.createElement("div");
        bolinha.classList.add("bolinha");
        bolinha.style.backgroundColor = coresHex[ocupada.cor] || "#999";
        vaga.appendChild(bolinha);
      }
  
      vaga.title = `Vaga ${i}`;
      grid.appendChild(vaga);
    }
  }

  if (document.getElementById("listaReservas") || document.getElementById("gridEstacionamento")) {
    exibirReservas();
    gerarGridEstacionamento(20);
  }
  
  exibirReservas();
  gerarGridEstacionamento(20);
  