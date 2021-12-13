import logoMini from "./assets/logo-mini.png";
import React from "react";



export default function TelaResposta({paginaAtual, setPaginaAtual, resposta, contador, setContador}){
    
    return (
        <>
        <div  className={paginaAtual=== 1 ?   "FlashCardResposta" : "escondido"}>
            <div class="logo-mini">
                 <img src={logoMini} />
            </div>
        <div class="FlashCardResposta">
                <p className="deckResposta">o que é Jsx?</p>
            <div data-identifier="counter" className='contador'>
                {contador}/8
            </div>
            <div class="Resposta">
                {resposta}
            </div>
            <div class="conclusao">
                <button onClick={()=>setPaginaAtual(3) } className="botoes aprendiagora">
                    Aprendi agora
                </button>
                <button  onClick={()=>setPaginaAtual(3)  } class="botoes naolembrei">
                    Não lembrei
                </button>
                <button  onClick={()=>setPaginaAtual(3)  } class="botoes lembreiesforço">
                    Lembrei com esforço
                </button>
                <button  onClick={()=>setPaginaAtual(3) } class="botoes zap">
                    Zap
                </button>
                <div/>
            </div>
            </div>
            </div>
        </>
        )};