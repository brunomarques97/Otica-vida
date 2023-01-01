import './App.css';
//componentes
import Topo from './componetes/Topo';
//import Banner from './componetes/conteudo/banner/banner';
import Produtos from './componetes/conteudo/Secaoprodutos/secaoprodutos';
import Sobre from './componetes/conteudo/SecaoSobre/SecaoSobre';
import Contatos from './componetes/conteudo/SecaoContatos/SecaoContatos';
import Rodape from './componetes/conteudo/Rodape/Rodape';

function App() {
  
  return (
    <div className='App'>
      <div className='limitar'>
        <Topo/>
        <div  className='banner'>
          <div className='capa'>
            <p>Preços baixos e</p>  
            <h2>Óculos de grau e de sol</h2>
            <p>Você só encontra aqui</p>       
          </div>
       </div>
        <Produtos/>
        <Sobre/>
        <Contatos/>
        <Rodape/>      
      </div>
    </div>
  );
}

export default App;
