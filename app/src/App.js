import './App.css';
//componentes
import Topo from './componetes/Topo';
import Pagina from './componetes/conteudo/index';
import Secao from './componetes/conteudo/SecaoCapa/secaocapa';
function App() {
  
  return (
    <div>
      <Topo/>
      <Pagina/>
      <Secao/>
    </div>
  );
}

export default App;
