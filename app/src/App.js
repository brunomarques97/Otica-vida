import './App.css';
//componentes
import Topo from './componetes/Topo';
import Pagina from './componetes/conteudo/index';
import Secao from './componetes/conteudo/SecaoCapa/secaocapa';
import Produtos from './componetes/conteudo/Secaoprodutos/secaoprodutos';
function App() {
  
  return (
    <div>
      <Topo/>
      <Pagina/>
      <Secao/>
      <Produtos/>
    </div>
  );
}

export default App;
