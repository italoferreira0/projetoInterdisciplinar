import "../components/BarraProgresso.css"

import { useState, useEffect } from 'react';

function BarraProgresso({step}) {
    const [progresso, setProgresso] = useState(0); 
    useEffect(() => {
        const novoProgresso = ((step + 0) / 4) * 100;
        setProgresso(novoProgresso);
    }, [step]);

    return (
        <div className="Barra">
            <div className="Progresso" style={{ width: `${progresso}%`, height: '100%' }}>
            </div>
        </div>
    );
}

export default BarraProgresso;
