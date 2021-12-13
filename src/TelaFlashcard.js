import logoMini from "./assets/logo-mini.png";
import turn from "./assets/turn.png"
import React from "react";
import TelaResposta from "./TelaResposta";


export default function TelaFlashcard({paginaAtual, setPaginaAtual, pergunta, resposta, cardAtual, setCardAtual}){
        const[contador, setContador] = React.useState(1);
        const[vira, setVira] = React.useState(true)

        console.log(resposta)
        return( 
            <>
            {vira ? 
         <div data-identifier="flashcard" className={paginaAtual === 1 ? 'flashCard' : 'escondido' }>
         <div className="logo-mini">
             <img src={logoMini} />
         </div>
         <div class="FlashCard">
                 <div data-identifier="counter" className='contador'>
                  {contador}/8
                 </div>
                 <div class="pergunta">
                 {pergunta}
                 </div>
                 <button data-identifier="arrow" onClick={()=>setVira(false)} >
                     <img src={turn}/>
                 </button>
         </div>
     </div>    
             : <TelaResposta paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} resposta={resposta} contador={contador} setContador = {setContador} cardAtual={cardAtual} setCardAtual={setCardAtual}/>}
       
            </>
    
        )
}