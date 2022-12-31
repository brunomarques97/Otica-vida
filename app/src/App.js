import './App.css';
//componentes
import Topo from './componetes/Topo';
import Banner from './componetes/conteudo/banner/banner';
import Produtos from './componetes/conteudo/Secaoprodutos/secaoprodutos';
import Sobre from './componetes/conteudo/SecaoSobre/SecaoSobre';
import Contatos from './componetes/conteudo/SecaoContatos/SecaoContatos';
import Rodape from './componetes/conteudo/Rodape/Rodape';

function App() {
  
  return (
    <div className='limitar'>
      <Topo/>
      <Banner/>
      <Produtos/>
      <Sobre/>
      <Contatos/>
      <Rodape/>      
    </div>
  );
}

export default App;
