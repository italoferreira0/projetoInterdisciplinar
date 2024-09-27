import React, { useState } from 'react';

import "../components/Perguntas.css"

import BarraProgresso from './BarraProgresso';

function Perguntas() {
    carregarJson()

    const [step, setStep] = useState(0);

    const [Tecnologo, setTecnologo] = useState(0);
    const [Bacharelado, setBacharelado] = useState(0);
    const [Indiferente, setIndiferente] = useState(0);

    const [Ads, setAds] = useState(0)
    const [Telematica, setTelematica] = useState(0)

    const nextStep = () => {
        setStep(step + 1);
    }

    const clickTecnologo = (e) => {
        setTecnologo(Tecnologo + 1)
        nextStep()

        let valueTecnologo = e.target.value
        switch (valueTecnologo) {
            case '2_anos':
                setAds(Ads + 1)
                break;
            case 'sim_prog':
                setAds(Ads + 1)
                break;
            case 'nao_redes':
                setAds(Ads + 1)
                break;
            case 'nao_telecom':
                setAds(Ads + 1)
                break;
            //--------------------------------
            case '3_anos':
                setTelematica(Telematica + 1)
                break;
            case 'nao_prog':
                setTelematica(Telematica + 1)
                break;
            case 'sim_redes':
                setTelematica(Telematica + 1)
                break;
            case 'sim_telecom':
                setTelematica(Telematica + 1)
                break;
        }
    }

    if (Tecnologo === 5) {
        if (Telematica > Ads) {
            var maior = "Telematica"
            var idCurso = 2
        } else if (Ads > Telematica) {
            var maior = "Ads"
            var idCurso = 1
        }
    }

    const clickBacharelado = () => {
        setBacharelado(Bacharelado + 1)
        nextStep()
    }
    const clickIndiferente = () => {
        setIndiferente(Indiferente + 1)
        nextStep()
    }

    const realizarTesteNovamente = () => {
        setStep(1);
        setTecnologo(0);
        setBacharelado(0);
        setIndiferente(0);
        setAds(0);
        setTelematica(0);
    }

    const [exibirCurso, setExibirCurso] = useState('')

    function carregarJson() {
        fetch("https://json-test-sigma.vercel.app/cursos") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);

                if (curso) {
                    setExibirCurso(curso)
                } else {
                    console.log("Curso não encontrado.");
                }
            })
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
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'2_anos'}>2 anos</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'3_anos'}>3 anos</button>

                    </div>
                )
                }

                {step === 3 && Tecnologo === 2 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Possui interesse em programação? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'sim_prog'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'nao_prog'}>Não</button>
                    </div>
                )
                }

                {step === 4 && Tecnologo === 3 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Possui interesse em redes de computadores? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'sim_redes'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'nao_redes'}>Não</button>
                    </div>
                )
                }

                {step === 5 && Tecnologo === 4 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você possui interesse em Telecomunicações? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'sim_telecom'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'nao_telecom'}>Não</button>
                    </div>
                )
                }

                {step === 6 && Tecnologo === 5 && maior === "Ads" && (
                    <div className='divPergunta'>
                        <div className='CardFinal'>
                            <h4 style={{ color: "#FFF" }}>{exibirCurso.nome}</h4>

                            <p style={{ color: "#FFF" }}>
                                <b>Instituição:</b> {exibirCurso.instituicao} <br />
                                <b>Polo:</b> {exibirCurso.polo} <br />
                                <b>Graduação:</b> {exibirCurso.graduacao} <br />
                                <b>Períodos:</b> {exibirCurso.periodos}<br />
                                <b>Descrição:</b> {exibirCurso.descricao}<br />
                            </p>

                            <p style={{ color: "#FFF", fontFamily: "bold", fontSize: "20px" }}>Matriz Académica:</p>

                            <a href="/Matriz_Ads.pdf" download className='download'
                            >Downalod <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a>
                        </div>
                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                    </div>
                )
                }
                {step === 6 && Tecnologo === 5 && maior === "Telematica" && (
                    <div className='divPergunta'>
                        <div className='CardFinal'>
                            <h4 style={{ color: "#FFF" }}>{exibirCurso.nome}</h4>

                            <p style={{ color: "#FFF" }}>
                                <b>Instituição:</b> {exibirCurso.instituicao} <br />
                                <b>Polo:</b> {exibirCurso.polo} <br />
                                <b>Graduação:</b> {exibirCurso.graduacao} <br />
                                <b>Períodos:</b> {exibirCurso.periodos}<br />
                                <b>Descrição:</b> {exibirCurso.descricao}<br />
                            </p>

                            <p style={{ color: "#FFF", fontFamily: "bold", fontSize: "20px" }}>Matriz Académica:</p>
                            <a href="/Matriz_Telematica.pdf" download className='download'
                            >Downalod <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a>
                        </div>
                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

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
