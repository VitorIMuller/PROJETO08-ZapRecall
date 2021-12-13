import React from "react";
import Logo from "./assets/logo.png";
import Next from "./assets/next.png";
import TelaFlashcard from './TelaFlashcard';


export default function TelaInicio(){
  const [paginaAtual, setPaginaAtual] = React.useState('telaInicio');
    
    return(
      <>
        <div className={paginaAtual === 'telaInicio' ? 'telaInicio' : 'escondido' }>
          <img src={Logo}/>
          <button onClick={()=>setPaginaAtual('escondido')}>
            Praticar React
            <img src={Next}/>
          </button>
        </div>
        <TelaFlashcard/>

    </>
    )
}




