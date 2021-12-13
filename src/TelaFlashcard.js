import logoMini from "./assets/logo-mini.png";
import React from "react";

export default function TelaFlashcard(props){
    const [paginaFlashCard, setPaginaFlashCArd] = React.useState('escondido');
    console.log("oi")
    
        return(

            <div className={props.paginaAtual ===  'escondido' ? '' : 'Tela3FlashCard' }>
                <div className="logo-mini">
                    <img src={logoMini} />
                 </div>
            <div class="FlashCardResposta">
                <p class="deckResposta">o que é Jsx?</p>
                <div class="Resposta">
                Uma extensão de linguagem do JavaScript
                </div>
                <div class="conclusao">
                    <button class="botoes">
                    Aprendi agora
                    </button>
                    <button class="botoes">
                    Aprendi agora
                    </button>
                    <button class="botoes">
                    Aprendi agora
                    </button>
                    <button class="botoes">
                    Aprendi agora
                    </button>
                <div/>
              </div>
             </div>
      
            </div>
        
        )
    
}