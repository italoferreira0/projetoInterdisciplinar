import "../components/BarraProgresso.css"

import { useState, useEffect } from 'react';

function BarraProgresso() {
    const [progresso, setProgresso] = useState(20); // Define a largura inicial como 20%
  
    useEffect(() => {
        // Aqui você pode manipular o estado para aumentar o progresso conforme necessário
        setProgresso(50); // Ajuste para o valor desejado
    }, []);

    return (
        <div className="Barra">
            <div className="Progresso" style={{ width: `${progresso}%`, height: '100%' }}>
            </div>
        </div>
    );
}

export default BarraProgresso;
