import { useState } from "react";
import '../components/DivExpansivel.css'

function ADS() {
    const [Expandir, setExpandir] = useState(false);
    const alterarTamanho = () => {
        setExpandir(!Expandir)
  
    }

    const recolherDiv = () => {
        setExpandir(false);
    }

    return(
        <div>
            <div className={Expandir ? 'DivMaximizada' : 'DivMinimizada'} onClick={alterarTamanho}
            onMouseLeave={recolherDiv}
            >
            <p>Análise e Desenvolvimento de Sistemas</p>
            {Expandir && (
                <div>
                    Sobre o curso ....
                </div>
            )
            }
        </div>

        </div>
        

    )

}

export default ADS;
