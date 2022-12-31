import oculos01 from './imagens/oculos01.png';
import oculos02 from './imagens/oculos02.png';
import oculos03 from './imagens/oculos03.png';
import oculos04 from './imagens/oculos04.png';
export default function produtos(){
    return(
        <div>
            <div id='produtos'>
               <h2>Nossos produtos</h2>
               <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
               <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div> 
            <div>
                <div>
                    <h4>Óculos de grau</h4>
                    <img src={oculos01}alt="Óculos de grau" />
                    <p>R$ 500,00</p>
                </div>
                <div>
                    <h4>Óculos transition</h4>
                    <img src={oculos02} alt="Óculos transition" />
                    <p>R$ 750,00</p>
                </div>
                <div>
                    <h4>Óculos de sol</h4>
                    <img src={oculos03} alt="Óculos de sol" />
                    <p>R$ 700,00</p>
                </div>
                <div>
                    <h4>Óculos infantil</h4>
                    <img src={oculos04} alt="Óculos infantil" />
                    <p>R$ 500,00</p>
                </div>
            </div>
            <div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
    )
}