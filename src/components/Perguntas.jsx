import React, { useState } from 'react';
import BarraProgresso from './BarraProgresso';

function Perguntas() {

    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    }

    return (
        <div>
            <BarraProgresso step={step}/>
            {step === 0 && (
                <div>
                    <p style={{ color: "white" }}>Vamos Iniciar o teste.</p>
                    <button type="button" onClick={nextStep}>Iniciar</button>
                </div>
            )}
            {step === 1 && (
                <div>
                    <p style={{ color: "white" }}>O que você prefere?</p>
                    <button type="button" onClick={nextStep}>Hardware</button>
                    <button type="button" onClick={nextStep}>Software</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <p style={{ color: "white" }}>Você se considera?</p>
                    <button type="button" onClick={nextStep}>Introvertido</button>
                    <button type="button" onClick={nextStep}>Extrovertido</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <p style={{ color: "white" }}>Você se considera bom em resolver problemas?</p>
                    <button type="button" onClick={nextStep}>Sim</button>
                    <button type="button" onClick={nextStep}>Não</button>
                </div>
            )}
            {step === 4 && (
                <div>
                    <p style={{ color: "white" }}>Fim do Teste</p>
                </div>
            )}
        </div>
    );
}

export default Perguntas;
