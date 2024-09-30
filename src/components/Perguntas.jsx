import React, { useState, useEffect } from 'react';

import "../components/Perguntas.css"

import BarraProgresso from './BarraProgresso';

function Perguntas() {
    
    const [step, setStep] = useState(0);

    const [Tecnologo, setTecnologo] = useState(0);
    const [Bacharelado, setBacharelado] = useState(0);
    const [Indiferente, setIndiferente] = useState(0);

    const [Ads, setAds] = useState(0)
    const [Telematica, setTelematica] = useState(0)
    const [maior, setMaior] = useState("")
    const [idCurso, setIdCurso] = useState(null)

    const nextStep = () => {
        setStep(step + 1);
    }

    const clickTecnologo = (e) => {
        setTecnologo(Tecnologo + 1)
        nextStep()

        let valueTecnologo = e.target.value
        if (valueTecnologo === "telematica") {
            setTelematica(Telematica + 1)
        }else if(valueTecnologo === "ads"){
            setAds( Ads + 1)
        }
    }

    useEffect(() => {
        if (Tecnologo === 11) {
            if (Telematica > Ads) {
                setMaior("Telematica");
                setIdCurso(2);
            } else if (Ads > Telematica) {
                setMaior("Ads");
                setIdCurso(1);
            } else {
                setMaior("Iguais");
            }
        }
    }, [Tecnologo, Ads, Telematica]);

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
        fetch("https://json-bd.vercel.app/cursos") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);

                if (curso) {
                    setExibirCurso(curso)
                }

                if (maior === 'Iguais') {

                    setExibirCurso([cursos[0], cursos[1]])

                    var title0 = document.getElementById("title0") 
                    title0.innerHTML = `${exibirCurso[0].nome}`

                    var p0 = document.getElementById("p0")
                    p0.innerHTML = `
                    <b>Intituição:</b> ${exibirCurso[0].instituicao}<br/>
                    <b>Polo:</b> ${exibirCurso[0].polo}<br/>
                    <b>Graduação:</b> ${exibirCurso[0].graduacao}<br/>
                    <b>Períodos:</b> ${exibirCurso[0].periodos}<br/>
                    <b>Descrição:</b> ${exibirCurso[0].descricao}<br/>
                    `
                    var title1 = document.getElementById("title1")
                    title1.innerHTML = `${exibirCurso[1].nome}`

                    var p1 = document.getElementById("p1")
                    p1.innerHTML = `
                    <b>Intituição:</b> ${exibirCurso[1].instituicao}<br/>
                    <b>Polo:</b> ${exibirCurso[1].polo}<br/>
                    <b>Graduação:</b> ${exibirCurso[1].graduacao}<br/>
                    <b>Períodos:</b> ${exibirCurso[1].periodos}<br/>
                    <b>Descrição:</b> ${exibirCurso[1].descricao}<br/>
                    `
                    
                }
            })
    }
    carregarJson()

    return (
        <div >
            <BarraProgresso step={step} />
            <div className='divPergunta'>
                {step === 0 && (
                    <div className='divPergunta'>

                        <div className='Balao'><p className='textPergunta'>Vamos iniciar o teste.</p></div>

                        <span>
                            <button type="button" className="btn btn-light botoes" onClick={nextStep}>Iniciar</button>

                        </span>
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
                        <div className='Balao'><p className='textPergunta'>Deseja trabalhar com redes? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Não</button>

                    </div>
                )
                }

                {step === 3 && Tecnologo === 2 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Deseja planejar sistemas? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Não</button>
                    </div>
                )
                }

                {step === 4 && Tecnologo === 3 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você possui interesse em Telecomunicações? </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Não</button>
                    </div>
                )
                }

                {step === 5 && Tecnologo === 4 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você gosta de trabalhar com design de experiência do usuário?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Não</button>
                    </div>
                )
                }
                {step === 6 && Tecnologo === 5 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você preza pela segurança e integridade dos dados em sistemas?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Não</button>
                    </div>
                )
                }
                {step === 7 && Tecnologo === 6 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Possui interesso por desenvolvimento e implementação de algoritmos de IA?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Não</button>
                    </div>
                )
                }
                {step === 8 && Tecnologo === 7 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar em projetos que envolvam inovações em hardware?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Não</button>
                    </div>
                )
                }
                {step === 9 && Tecnologo === 8 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Seu foco está em criar e testar aplicativos móveis?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Não</button>
                    </div>
                )
                }
                {step === 10 && Tecnologo === 9 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você se interessa na criação e manutenção de redes corporativas?</p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Não</button>
                    </div>
                )
                }
                {step === 11 && Tecnologo === 10 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Deseja criar interfaces visuais atraentes para sites e aplicativos?
                        </p></div>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'ads'}>Sim</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickTecnologo} value={'telematica'}>Não</button>
                    </div>
                )
                }
                {step === 12 && Tecnologo === 11 && maior === "Ads" && (
                    <div className='divPergunta'>
                        <div className='CardFinal'>
                            <h4>{exibirCurso.nome}</h4>

                            <p className='pFinal'>
                                <b>Instituição:</b> {exibirCurso.instituicao} <br />
                                <b>Polo:</b> {exibirCurso.polo} <br />
                                <b>Graduação:</b> {exibirCurso.graduacao} <br />
                                <b>Períodos:</b> {exibirCurso.periodos}<br />
                                <b>Descrição:</b> {exibirCurso.descricao}<br />
                            </p>

                            <h4>Matriz Académica:</h4>

                            <p className='pFinal'><a href="/Matriz_Ads.pdf" download className='download'
                            >Uninassau <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>

                        </div>
                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                    </div>
                )
                }
                {step === 12 && Tecnologo === 11 && maior === "Telematica" && (
                    <div className='divPergunta'>
                        <div className='CardFinal'>
                            <h4>{exibirCurso.nome}</h4>

                            <p className='pFinal'>
                                <b>Instituição:</b> {exibirCurso.instituicao} <br />
                                <b>Polo:</b> {exibirCurso.polo} <br />
                                <b>Graduação:</b> {exibirCurso.graduacao} <br />
                                <b>Períodos:</b> {exibirCurso.periodos}<br />
                                <b>Descrição:</b> {exibirCurso.descricao}<br />
                            </p>

                            <h4>Matriz Académica:</h4>

                            <p className='pFinal'><a href="/Matriz_Telematica.pdf" download className='download'
                            >IFPB <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>
                        </div>
                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                    </div>

                )
                }
                {step === 12 && Tecnologo === 11 && maior === 'Iguais' && (
                    <div className='divPergunta'>
                        <div className='CardFinal'>
                            <h4 id='title0'></h4>
                            <p id='p0' className='pFinal'></p>   {/*Ads */}
                            <h4>Matriz Académica:</h4>

                            <p className='pFinal'><a href="/Matriz_Ads.pdf" download className='download'
                            >Uninassau <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>
                        </div>
                        <br />
                        <div className='CardFinal'>
                            <h4 id='title1'></h4>
                            <p id='p1' className='pFinal'></p> {/*Telemática */}
                            <h4>Matriz Académica:</h4>

                            <p className='pFinal'><a href="/Matriz_Telematica.pdf" download className='download'
                            >IFPB <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>
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
