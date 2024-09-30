import { useState, useEffect } from 'react';
import "../components/BarraProgresso.css"

function BarraProgresso({ step, maxBarra }) {
    const [progresso, setProgresso] = useState(0); 

    useEffect(() => {
        const novoProgresso = ((step / maxBarra) * 100); // Cálculo correto com maxBarra
        setProgresso(novoProgresso);
    }, [step, maxBarra]);

    return (
        <div className="Barra">
            <div className="Progresso" style={{ width: `${progresso}%`, height: '100%' }}>
            </div>
        </div>
    );
}

export default BarraProgresso;
