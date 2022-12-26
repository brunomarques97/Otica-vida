import './App.css';
//imagens
import logo from './imagens/logo.png';
function App() {
  
  return (
    <div>
      <div className="cabecalho" >
        <img src={logo} alt="LOGO"/>
        <div className="links">
            <a>PRODUTOS</a>
            <a>SOBRE</a>
            <a>CONTATO</a>
        </div>
      </div>

    </div>
  );
}

export default App;
