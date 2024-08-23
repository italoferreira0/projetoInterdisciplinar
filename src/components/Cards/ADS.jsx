import { useState } from "react";
import '../Cards/ADS.css'

function ADS() {


    //-----------------------Expandir e Diminuir div ----------------------------------------------------
    const [Expandir, setExpandir] = useState(false);
    const alterarTamanho = () => {
        setExpandir(!Expandir);
    }
    const recolherDiv = () => {
        setExpandir(false);
    }
    //---------------------------------------------------------------------------------------------------

    return (
        <div>
            <div className={Expandir ? 'DivMaximizada' : 'DivMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p>Analise e Desenvolvimento de Sistema</p>
                {Expandir && (
                    <div id="conteudo">
                        <p>Sobre o curso ....</p>

                        <p className="TextParagrado"></p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ADS;
