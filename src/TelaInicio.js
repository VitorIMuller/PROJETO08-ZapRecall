import Logo from "./assets/logo.png";
import Next from "./assets/next.png";


export default function TelaInicio(){
    function Tela(){
        
    }
    return(
        <div class="telaInicio">
        <img src={Logo}/>
        <button onClick={Tela()}>
          Praticar React
          <img src={Next}/>
        </button>
      </div>
    
    )
}




