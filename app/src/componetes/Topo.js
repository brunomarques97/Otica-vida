import logo from "./imagens/logo.png";
import './Topo.css';
export default function Topo(){
    return(
        <header className='limitar'>
            <div>
                <img src={logo} alt="LOGO"/>
                <div className="links">
                <a>PRODUTOS</a>
                <a>SOBRE</a>
                <a>CONTATO</a>
                </div>
            </div>
        </header>
    )
}