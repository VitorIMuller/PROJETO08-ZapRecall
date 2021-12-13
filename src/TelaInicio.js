import React from "react";
import Logo from "./assets/logo.png";
import Next from "./assets/next.png";
import TelaFlashcard from "./TelaFlashcard";


export default function TelaInicio(){
  const [paginaAtual, setPaginaAtual] = React.useState(0);
  const [cardAtual, setCardAtual] = React.useState(0);
 
  const deck =[
    {pergunta: 'O que é JSX?' , resposta: 'Uma extensão de linguagem do JavaScript'},
    {pergunta: 'O React é __ ' , resposta: 'uma biblioteca JavaScript para construção de interfaces'},
    {pergunta: 'Componentes devem iniciar com __ ' , resposta: 'letra maiúscula'},
    {pergunta: 'Podemos colocar __ dentro do JSX' , resposta: 'expressões'},
    {pergunta: ' O ReactDOM nos ajuda __ ' , resposta: 'interagindo com a DOM para colocar componentes React na mesma'},
    {pergunta: 'Usamos o npm para __ ' , resposta: 'gerenciar os pacotes necessários e suas dependências'},
    {pergunta: 'Usamos props para __ ' , resposta: 'passar diferentes informações para componentes'},
    {pergunta: 'Usamos estado (state) para __ ' , resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
];
    const jsx = deck.map(flashCard=>
    <TelaFlashcard
    paginaAtual={paginaAtual} 
    setPaginaAtual={setPaginaAtual}
    {...flashCard}
    />
    ) 

    console.log(jsx)
    return(
      <>
        <div className={paginaAtual === 0 ? 'telaInicio' : 'escondido' }>
          <img src={Logo}/>
          <button data-identifier="start-zap-recall" onClick={()=>setPaginaAtual(1)  }>
            Praticar React
            <img src={Next}/>
          </button>
        </div>
        <div>
          {jsx[cardAtual]}
        </div>
    </>
    )
}




