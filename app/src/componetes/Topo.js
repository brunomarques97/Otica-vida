import logo from "./imagens/logo.png";
export default function Topo(){
    return(
        <header>
            <img src={logo} alt="LOGO"/>
            <div className="links">
            <a>PRODUTOS</a>
            <a>SOBRE</a>
            <a>CONTATO</a>
            </div>
        </header>
    )
}