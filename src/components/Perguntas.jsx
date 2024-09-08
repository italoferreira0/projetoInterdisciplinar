import React, { useState } from 'react';
import "../components/Perguntas.css"

import BarraProgresso from './BarraProgresso';

function Perguntas() {

    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    }

    return (
        <div >
            <BarraProgresso step={step} />
            <div className='divPergunta'>
                {step === 0 && (
                    <div className='divPergunta'>

                        <div className='Balao'><p className='textPergunta'>Vamos iniciar o teste.</p></div>
                        
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Iniciar</button>
                    </div>
                )}
                {step === 1 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>O que você prefere?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Hardware</button>
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Software</button>
                    </div>
                )}

                {step === 2 && (
                    <div className='divPergunta'>
                        <div className='Balao' ><p className='textPergunta'>Você se considera?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Introvertido</button>
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Extrovertido</button>
                    </div>
                )}

                {step === 3 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você se considera bom em resolver problemas?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={nextStep}>Não</button>
                    </div>
                )}
                {step === 4 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Fim do Teste</p></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Perguntas;
