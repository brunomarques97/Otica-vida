import './App.css';
//componentes
import Topo from './componetes/Topo';
import Pagina from './componetes/conteudo/index';
import Secao from './componetes/conteudo/SecaoCapa/secaocapa';
import Produtos from './componetes/conteudo/Secaoprodutos/secaoprodutos';
import Sobre from './componetes/conteudo/SecaoSobre/SecaoSobre';
import Contatos from './componetes/conteudo/SecaoContatos/SecaoContatos';

function App() {
  
  return (
    <div>
      <Topo/>
      <Pagina/>
      <Secao/>
      <Produtos/>
      <Sobre/>
      <Contatos/>
    </div>
  );
}

export default App;
