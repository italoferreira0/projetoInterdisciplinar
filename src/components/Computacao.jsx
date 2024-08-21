import { useState } from "react";
import '../components/DivExpansivel.css'

function Computacao() {
    
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
            <p>Ciência da Computação</p>

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

export default Computacao