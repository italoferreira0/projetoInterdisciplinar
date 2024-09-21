import React, { useState } from 'react';
import "../components/Perguntas.css"

import BarraProgresso from './BarraProgresso';

function Perguntas() {

    const [step, setStep] = useState(0);
    const [Tecnologo, setTecnologo] = useState(0);
    const [Bacharelado, setBacharelado] = useState(0);
    const [Indiferente, setIndiferente] = useState(0);
    
    const nextStep = () => {
        setStep(step + 1);
    }

    const clickTecnologo = () => {
        setTecnologo(Tecnologo + 1)
        nextStep()
    }
    const clickBacharelado = () => {
        setBacharelado(Bacharelado + 1)
        nextStep()
    }
    const clickIndiferente = () => {
        setIndiferente(Indiferente + 1)
        nextStep()
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
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Tecnólogo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickBacharelado}>Bacharelado</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente}>Indiferente</button>
                    </div>

                )}

                {/* Opção Selecionada: Tecnólogo */}
                {step === 2 && Tecnologo === 1 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Quanto tempo voce pretende passar na universidade? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>2 anos</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>3 anos</button>

                    </div>
                )
                }

                {step === 3 && Tecnologo === 2 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Possui interesse em programação? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Não</button>
                    </div>
                )
                }

                {step === 4 && Tecnologo === 3 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Possui interesse em redes de computadores? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Não</button>
                    </div>
                )
                }

                {step === 5 && Tecnologo === 4 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Possui interesse em redes de computadores? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Não</button>
                    </div>
                )
                }

                {step === 6 && Tecnologo === 5 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você possui interesse em Telecomunicações? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo}>Não</button>
                    </div>
                )
                }

                {step === 7 && Tecnologo === 6 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Fim do Teste</p></div>
                    </div>
                )
                }

                {/* Opção Selecionada: Bacharelado */}
                {step === 2 && Bacharelado === 1 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você prefere Hardware ou Software?  </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickBacharelado}>Hardware</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickBacharelado}>Software</button>
                    </div>
                )
                }

                {/* Opção Selecionada: Indiferente */}
                {step === 2 && Indiferente === 1 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você prefere Hardware ou Software?  </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente}>Hardware</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente}>Software</button>
                    </div>
                )
                }

            </div>
        </div>
    );
}

export default Perguntas;
