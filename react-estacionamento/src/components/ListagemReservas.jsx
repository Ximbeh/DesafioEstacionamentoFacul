import React from "react";

function ListaReservas({ reservas, onRemover }) {
  return (
    <ul id="listaReservas">
      {reservas.map((reserva, index) => (
        <li key={index}>
          {reserva.modelo} - {reserva.placa} ({reserva.cor}) - Vaga {reserva.vaga}
          <button className="btn-remover" onClick={() => onRemover(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaReservas;
