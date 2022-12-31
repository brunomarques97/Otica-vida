import local from './imagens/local.png';
import telefone from './imagens/telefone.png';
import email from './imagens/email.png';

import face from './imagens/fb.png';
import insta from './imagens/ig.png';
import twiter from './imagens/tt.png';

export default function Contatos(){
    return(
        <div id='Contatos'>
            <div>
                <div>
                    <h2>Fale conosco</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div>
                    <div>
                        <h3>Contato</h3>
                        <div>
                            <div>
                                <img src={local} alt="local " />
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div>
                                <img src={telefone} alt="telefone" />
                                <p>(21) 9999-9999</p>
                            </div>
                            <div> 
                                <img src={email} alt="email" />
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Nossas Redes Sociais</h3>
                       <div>
                            <div>
                                <img src={face} alt="facebook" />
                                <p>/OticaVida</p>
                            </div>
                            <div>
                                <img src={insta} alt="instagram" />
                                <p>@oticavidarj</p>
                            </div>
                            <div> 
                                <img src={twiter} alt="twiter" />
                                <p>@oticavidarj</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}