import TelaInicio from "./TelaInicio";
import ReactDOM from 'react-dom';
import TelaFlashcard from "./TelaFlashcard";


function App(){

    return(
        <TelaInicio/>
    )
}

ReactDOM.render(<App/>, document.querySelector(".root"))