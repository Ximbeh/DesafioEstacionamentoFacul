import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Sistema de Controle de Estacionamento</h1>
      <div className="menu">
        <Link to="/cadastro" className="btn">Cadastrar Reserva</Link>
        <Link to="/listagem" className="btn">Listar Vagas</Link>
      </div>
    </div>
  );
}

export default Home;
