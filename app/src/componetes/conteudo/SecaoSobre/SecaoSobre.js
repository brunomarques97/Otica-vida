import loja from "./imagens/loja.png";
import atendimento from "./imagens/atendimento.png";
export default function Sobre(){
    return(
        <div id='Sobre'>
            <div>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div>
                <img src={loja} alt="loja" />
                <div>
                  <h3>Nossas Filiais</h3>
                  <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                    <h3>Atendimento flexível</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                <div>
                <img src={atendimento} alt="atendimento" />
                </div>
            </div>    
        </div>
    )
}