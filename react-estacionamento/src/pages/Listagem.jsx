import React, { useEffect, useState } from 'react';
import GridEstacionamento from '../components/EstacionamentoGrid';
import ListaReservas from '../components/ListagemReservas';

function Listagem() {
  const [reservas, setReservas] = useState([]);
  const [vagasLivres, setVagasLivres] = useState([]);
  
  useEffect(() => {
    const storedReservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    setReservas(storedReservas);

    const vagasOcupadas = storedReservas.map(r => parseInt(r.vaga));
    const vagasLivres = [...Array(20)].map((_, i) => i + 1).filter(vaga => !vagasOcupadas.includes(vaga));
    setVagasLivres(vagasLivres);
  }, []);

  const handleRemoverReserva = (index) => {
    const reservasAtualizadas = reservas.filter((_, i) => i !== index);
    localStorage.setItem('reservas', JSON.stringify(reservasAtualizadas));
    setReservas(reservasAtualizadas);
  };

  return (
    <div className="containerReserva">
      <h2>Lista de Reservas</h2>
      
      <div className='listagemContainer'>
        <div className='firstPartListagem'>
            <div>
                <h3>Vagas Ocupadas</h3>
                <ListaReservas reservas={reservas} onRemover={handleRemoverReserva} />
            </div>

            <div>
                <h3>Vagas Livres</h3>
                <ul>
                {vagasLivres.map((vaga, index) => (
                    <li key={index}>Vaga {vaga}</li>
                ))}
                </ul>
            </div>
        </div>


        <GridEstacionamento reservas={reservas} totalVagas={20} />
      </div>
    </div>
  );
}

export default Listagem;
