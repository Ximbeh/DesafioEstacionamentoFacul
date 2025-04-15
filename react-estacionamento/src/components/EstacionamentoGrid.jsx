import React from 'react';

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

function GridEstacionamento({ reservas, totalVagas }) {
  return (
    <div className="grid-estacionamento">
      {[...Array(totalVagas)].map((_, i) => {
        const vagaNum = i + 1;
        const ocupada = reservas.find(r => parseInt(r.vaga) === vagaNum);

        return (
          <div key={vagaNum} className="vaga" title={`Vaga ${vagaNum}`}>
            {ocupada ? (
              <div
                className="bolinha"
                style={{ backgroundColor: coresHex[ocupada.cor] || "#999" }}
              ></div>
            ) : (
              <div className="bolinha livre"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GridEstacionamento;
