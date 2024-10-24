import React, { useState, useEffect } from 'react';

import "../components/Perguntas.css"

import BarraProgresso from './BarraProgresso';

function Perguntas() {

    const [step, setStep] = useState(0);
    const [maxBarra, setMaxBarra] = useState(0)

    const [Tecnologo, setTecnologo] = useState(0);
    const [Bacharelado, setBacharelado] = useState(0);
    const [Indiferente, setIndiferente] = useState(0);

    const [Ads, setAds] = useState(0);
    const [Telematica, setTelematica] = useState(0);
    const [EngCom, setEngCom] = useState(0);
    const [SisInf, setSisInf] = useState(0);
    const [CieCom, setCieCom] = useState(0);

    const [maior, setMaior] = useState("")
    const [ponto, setPonto] = useState(0)

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
        } else if (valueTecnologo === "ads") {
            setAds(Ads + 1)
        }
    }

    useEffect(() => {
        if (Telematica >= 1) {
            setMaxBarra(12)
        }
        if (Tecnologo === 11) {
            if (Telematica > Ads) {
                setMaior("Telematica");
                setIdCurso(2);
            } else if (Ads > Telematica) {
                setMaior("Ads");
                setIdCurso(1);
            } else {
                setMaior("Iguais_Tecnologo");
            }
        }
    }, [Tecnologo, Ads, Telematica]);

    const clickBacharelado = (e) => {
        setBacharelado(Bacharelado + 1)
        nextStep()

        let valueBacharelado = e.target.value
        if (valueBacharelado === 'EngCom') {
            setEngCom(EngCom + 1)
        } else if (valueBacharelado === 'SisInf') {
            setSisInf(SisInf + 1)
        } else if (valueBacharelado === 'CieCom') {
            setCieCom(CieCom + 1)
        } else if (valueBacharelado === 'EngCom_SisInf') {
            setEngCom(EngCom + 1)
            setSisInf(SisInf + 1)
        } else if (valueBacharelado === 'CieCom_SisInf') {
            setCieCom(CieCom + 1)
            setSisInf(SisInf + 1)
        } else if (valueBacharelado === 'CieCom_EngCom') {
            setCieCom(CieCom + 1)
            setEngCom(EngCom + 1)
        }
    }

    useEffect(() => {
        if (Bacharelado >= 1) {
            setMaxBarra(17)
        }

        if (Bacharelado === 16) {
            if (EngCom > CieCom && EngCom > SisInf) {
                setMaior('EngCom')
                setIdCurso(5)
            } else if (CieCom > EngCom && CieCom > SisInf) {
                setMaior('CieCom')
                setIdCurso(3)
            } else if (SisInf > EngCom && SisInf > CieCom) {
                setMaior('SisInf')
                setIdCurso(4)
            } else {
                if (EngCom === 10 && CieCom === 10 && SisInf === 10) {
                    setMaior('Melhor voce escolher outra área.')
                } else {
                    setMaior("CieCom")
                    setIdCurso(3)
                }
            }
        }
    }, [EngCom, CieCom, SisInf, Bacharelado]);

    const clickIndiferente = (e) => {
        setIndiferente(Indiferente + 1)
        nextStep()
        if (Indiferente >= 1) {
            setMaxBarra(17)
        }

        let concordancia = e.target.getAttribute('data-value1')
        let nomeCurso = e.target.getAttribute('data-value2')

        switch (concordancia) {
            case 'C_Totalmente':
                setPonto(4);
                break;
            case 'Concordo':
                setPonto(3);
                break;
            case 'Discordo':
                setPonto(2);
                break;
            case 'D_Totalmente':
                setPonto(1);
                break;
            default:
                break;
        }

        if (nomeCurso === 'Ads') {
            setAds(Ads + ponto);
        } else if (nomeCurso === 'Telematica') {
            setTelematica(Telematica + ponto);
        } else if (nomeCurso === 'EngCom') {
            setEngCom(EngCom + ponto);
        } else if (nomeCurso === 'SisInf') {
            setSisInf(SisInf + ponto);
        } else if (nomeCurso === 'CieCom') {
            setCieCom(CieCom + ponto);
        }

    }
    
    useEffect(() => {

        if (Indiferente === 16) {
            if (Ads > Telematica && Ads > EngCom && Ads > CieCom && Ads > SisInf) {
                setMaior('Ads');
                setIdCurso(1);
            } else if (Telematica > Ads && Telematica > EngCom && Telematica > CieCom && Telematica > SisInf) {
                setMaior('Telematica');
                setIdCurso(2);
            } else if (EngCom > Ads && EngCom > Telematica && EngCom > CieCom && EngCom > SisInf) {
                setMaior('EngCom');
                setIdCurso(5);
            } else if (CieCom > Ads && CieCom > Telematica && CieCom > EngCom && CieCom > SisInf) {
                setMaior('CieCom');
                setIdCurso(3);
            } else if (SisInf > Ads && SisInf > Telematica && SisInf > EngCom && SisInf > CieCom) {
                setMaior('SisInf');
                setIdCurso(4);
            } else {
                setMaior('CieCom');
                setIdCurso(3);
            }
        }
    }, [EngCom, CieCom, SisInf, Bacharelado,Indiferente]);

    const realizarTesteNovamente = () => {
        setStep(1);
        setTecnologo(0);
        setBacharelado(0);
        setIndiferente(0);
        setAds(0)
        setTelematica(0)
        setCieCom(0)
        setEngCom(0)
        setSisInf(0)
        setMaior('')
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

                if (maior === 'Iguais_Tecnologo') {

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
            <BarraProgresso step={step} maxBarra={maxBarra} />
            <div className='divPergunta'>
                <div>
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
                    {step === 12 && Tecnologo === 11 && maior === 'Iguais_Tecnologo' && (
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
                </div>
                {/* Opção Selecionada: Bacharelado */}
                <div>
                    {step === 2 && Bacharelado === 1 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Gosta de trabalhar com lógica? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 3 && Bacharelado === 2 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Você tem interesse em desenvolver inovaçãos em softwares de robótica?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom'}>sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 4 && Bacharelado === 3 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Você tem interesse em desenvolver interfaces visuais atraentes para sites e aplicativos?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'SisInf'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_EngCom'}>Não</button>
                        </div>
                    )
                    }
                    {step === 5 && Bacharelado === 4 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Prezo pela segurança e integridade dos dados em sistemas? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 6 && Bacharelado === 5 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'> Deseja trabalhar em projetos que envolvam inovações em hardware? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 7 && Bacharelado === 6 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Tem interesse em gerenciar equipes e projetos de TI?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'SisInf'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_EngCom'}>Não</button>
                        </div>
                    )
                    }
                    {step === 8 && Bacharelado === 7 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Tem interesse em explorar e desenvolver soluções para big data?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 9 && Bacharelado === 8 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar com sistemas embarcados?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 10 && Bacharelado === 9 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar com design de experiência do usuário?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'SisInf'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_EngCom'}>Não</button>
                        </div>
                    )
                    }
                    {step === 11 && Bacharelado === 10 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Você tem interesse em desenvolver jogos digitais? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 12 && Bacharelado === 11 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Gostaria de melhorar o desempenho de sistemas? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 13 && Bacharelado === 12 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Você tem interesse em planejar um sistema?</p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'SisInf'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_EngCom'}>Não</button>
                        </div>
                    )
                    }
                    {step === 14 && Bacharelado === 13 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'> Gostaria de desenvolver e implementar algoritmos de IA? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 15 && Bacharelado === 14 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Você tem interesse em saber como funcionam as redes de computadores? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'EngCom'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_SisInf'}>Não</button>
                        </div>
                    )
                    }
                    {step === 16 && Bacharelado === 15 && (
                        <div className='divPergunta'>
                            <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar com o gerenciamento de projetos? </p></div>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'SisInf'}>Sim</button>
                            <button type="button" className="btn btn-light botoes" onClick={clickBacharelado} value={'CieCom_EngCom'}>Não</button>
                        </div>
                    )
                    }

                    {step === 17 && Bacharelado === 16 && maior === 'CieCom' && (
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
                                <p className='pFinal'><a href="/Matriz_CC.pdf" download className='download'
                                >UFCG <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                    style={{ width: "23px" }} /></a></p>
                            </div>

                            <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                        </div>
                    )
                    }
                    {step === 17 && Bacharelado === 16 && maior === 'EngCom' && (
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
                                <p className='pFinal'><a href="/Matriz_EngCom.pdf" download className='download'
                                >IFPB <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                    style={{ width: "23px" }} /></a></p>
                            </div>

                            <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                        </div>
                    )
                    }
                    {step === 17 && Bacharelado === 16 && maior === 'SisInf' && (
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
                                <p className='pFinal'><a href="/Matriz_SS.pdf" download className='download'
                                >Unifacisa <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                    style={{ width: "23px" }} /></a></p>
                            </div>

                            <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                        </div>
                    )
                    }

                </div>

                {/* Opção Selecionada: Indiferente */}
                {step === 2 && Indiferente === 1 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Meu foco está em criar e testar aplicativos móveis.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='Ads'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='Ads'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='Ads'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='Ads'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 2 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Me atrai a ideia de criar interfaces visuais atraentes para sites e aplicativos</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='Ads'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='Ads'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='Ads'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='Ads'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 3 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar com design de experiência do usuário.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='Ads'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='Ads'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='Ads'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='Ads'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 4 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Desejo trabalhar com redes.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='Telematica'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='Telematica'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='Telematica'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='Telematica'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 5 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Tenho interesse em Telecomunicações.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='Telematica'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='Telematica'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='Telematica'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='Telematica'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 6 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Você preza pela segurança e integridade dos dados em sistemas.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='Telematica'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='Telematica'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='Telematica'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='Telematica'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 7 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Me interesso por desenvolvimento e inovação em softwares de robótica</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='EngCom'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='EngCom'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='EngCom'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='EngCom'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 8 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Prefiro trabalhar em projetos que envolvam inovações em hardware.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='EngCom'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='EngCom'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='EngCom'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='EngCom'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 9 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar com sistemas embarcados.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='EngCom'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='EngCom'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='EngCom'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='EngCom'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 10 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'> Estou interessado em explorar e desenvolver soluções para big data.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='CieCom'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='CieCom'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='CieCom'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='CieCom'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 11 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>  Me interesso por desenvolvimento e implementação de algoritmos de IA</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='CieCom'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='CieCom'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='CieCom'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='CieCom'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 12 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Desenvolver jogos digitais é a minha paixão</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='CieCom'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='CieCom'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='CieCom'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='CieCom'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 13 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Tenho interesse em gerenciar equipes e projetos de TI</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='SisInf'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='SisInf'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='SisInf'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='SisInf'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 14 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Gostaria de trabalhar com gerenciamento de projetos</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='SisInf'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='SisInf'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='SisInf'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='SisInf'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 15 && (
                    <div className='divPergunta'>
                        <div className='Balao'><p className='textPergunta'>Gostaria de planejar um sistema.</p></div><br />
                        <div className=''><p className='textFrase'>Você concorda com a frase acima?</p></div>

                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='C_Totalmente' data-value2='SisInf'>Concordo Totalmento</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Concordo' data-value2='SisInf'>Concordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='Discordo' data-value2='SisInf'>Discordo</button>
                        <button type="button" className="btn btn-light botoes" onClick={clickIndiferente} data-value1='D_Totalmente' data-value2='SisInf'>Discordo Totalmente</button>

                    </div>
                )
                }
                {Indiferente === 16 && maior === 'Ads' && (
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
                {Indiferente === 16 && maior === 'Telematica' && (
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
                {Indiferente === 16 && maior === 'EngCom' && (
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
                            <p className='pFinal'><a href="/Matriz_EngCom.pdf" download className='download'
                            >IFPB <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>
                        </div>

                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                    </div>

                )
                }
                {Indiferente === 16 && maior === 'CieCom' && (
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
                            <p className='pFinal'><a href="/Matriz_CC.pdf" download className='download'
                            >UFCG <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>
                        </div>

                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                    </div>
                )
                }
                {Indiferente === 16 && maior === 'SisInf' && (
                    <div className='divPergunta'>
                        <div className='CardSisInf'>
                            <h4>{exibirCurso.nome}</h4>
                            <p className='pFinal'>
                                <b>Instituição:</b> {exibirCurso.instituicao} <br />
                                <b>Polo:</b> {exibirCurso.polo} <br />
                                <b>Graduação:</b> {exibirCurso.graduacao} <br />
                                <b>Períodos:</b> {exibirCurso.periodos}<br />
                                <b>Descrição:</b> {exibirCurso.descricao}<br />
                            </p>
                            <h4>Matriz Académica:</h4>
                            <p className='pFinal'><a href="/Matriz_SS.pdf" download className='download'
                            >Unifacisa <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                                style={{ width: "23px" }} /></a></p>
                        </div>

                        <button type="button" className="btn btn-light botaoFinal" onClick={realizarTesteNovamente}>Realizar teste Novamente</button>

                    </div>
                )
                }

                {/* <div className='textFrase'>
                    Telematica: {Telematica} <br />
                    Ads: {Ads} <br />
                    CieCom: {CieCom} <br />
                    EngCom: {EngCom} <br />
                    SisInf: {SisInf} <br />
                    <br /><br />
                    Maior: {maior}
                </div> */}

            </div>
        </div>
    );
}

export default Perguntas;
