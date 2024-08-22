import { useState } from "react";
import '../Cards/SistemasInformacao.css'

function SistemasInformacao() {
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
            <p>Sistemas de Informação</p>
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

export default SistemasInformacao;
