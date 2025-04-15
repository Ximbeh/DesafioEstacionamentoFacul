import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </Router>
  );
}

export default App;
