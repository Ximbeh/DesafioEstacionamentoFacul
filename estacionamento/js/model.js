const reservas = [];

function salvarReserva(reserva) {
  reservas.push(reserva);
}

function listarReservas() {
  return reservas;
}
