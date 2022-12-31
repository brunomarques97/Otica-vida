import logo from "./imagens/logo.png";
import './Topo.css';
export default function Topo(){
    return(
        <header >
            <div>
                <img src={logo} alt="LOGO"/>
                <div className="links">
                <a href='#produtos'>PRODUTOS</a>
                <a href='#Sobre'>SOBRE</a>
                <a href='#Contatos'>CONTATO</a>
                </div>
            </div>
        </header>
    )
}