import { useState } from "react";
// import '../Cards/DivExpansivel.css'
import '../Cards/ADS.css'

function ADS() {
    const [Expandir, setExpandir] = useState(false);

    const alterarTamanho = () => {
        setExpandir(!Expandir);
    }

    const recolherDiv = () => {
        setExpandir(false);
    }

    return (
        <div>
            <div className={Expandir ? 'DivMaximizada' : 'DivMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p>Análise e Desenvolvimento de Sistemas</p>
                {Expandir && (
                    <div>
                        <p>Sobre o curso ....</p>
                        {/* Conteúdo adicional pode ir aqui */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ADS;
