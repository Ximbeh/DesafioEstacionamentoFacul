import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();
  const [reserva, setReserva] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vagasReservadas = JSON.parse(localStorage.getItem('reservas') || '[]');
    const vagaEscolhida = parseInt(reserva.vaga);

    if (vagaEscolhida > 20 || vagaEscolhida < 1) {
      alert(`Número de vaga inválido! O estacionamento possui vagas de 1 a 20.`);
      return;
    }

    const vagaOcupada = vagasReservadas.some(r => r.vaga === vagaEscolhida);
    if (vagaOcupada) {
      alert(`A vaga ${vagaEscolhida} já está ocupada! Escolha outra vaga.`);
      return;
    }

    vagasReservadas.push(reserva);
    console.log(reserva);
    
    localStorage.setItem('reservas', JSON.stringify(vagasReservadas));
    alert('Reserva cadastrada com sucesso!');
    navigate('/listagem');
  };

  return (
    <div className="container">
      <h2>Cadastro de Reserva</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Placa do Veículo"
          name="placa"
          value={reserva.placa}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Nome do Proprietário"
          name="proprietario"
          value={reserva.proprietario}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Número do Apartamento"
          name="apartamento"
          value={reserva.apartamento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Bloco do Apartamento"
          name="bloco"
          value={reserva.bloco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Modelo do Veículo"
          name="modelo"
          value={reserva.modelo}
          onChange={handleChange}
          required
        />
        <select
          name="cor"
          value={reserva.cor}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>Selecione a Cor</option>
          <option value="Branco">Branco</option>
          <option value="Preto">Preto</option>
          <option value="Cinza">Cinza</option>
          <option value="Prata">Prata</option>
          <option value="Vermelho">Vermelho</option>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
          <option value="Amarelo">Amarelo</option>
        </select>
        <input
          type="number"
          placeholder="Número da Vaga"
          name="vaga"
          value={reserva.vaga}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastro;
