import { useState } from "react";
import '../Cards/ADS.css'

function ADS() {

    const [exibirCurso, setExibirCurso] = useState('')

    async function carregarCard(idCurso) {
        try {
            const response = await fetch("https://json-bd.vercel.app/cursos", {
                cache: "force-cache",
            });
            const cursos = await response.json();
            const curso = cursos.find(curso => curso.id === idCurso);
            if (curso) {
                setExibirCurso(curso)
            }
        } catch (error) {
            console.error("Erro ao carregar JSON:", error);
        }
    }

    carregarCard(1)

    //-----------------------Expandir e Diminuir div ----------------------------------------------------
    const [Expandir, setExpandir] = useState(false);
    const alterarTamanho = () => {
        setExpandir(!Expandir);
    }
    const recolherDiv = () => {
        setExpandir(false);
    }
    //---------------------------------------------------------------------------------------------------

    return (
        <div>
            <div className={Expandir ? 'ADSMaximizada' : 'ADSMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p style={{ color: "#FFF", fontSize: "20px", fontFamily: "bold" }}>{exibirCurso.nome}</p>
                {Expandir && (
                    <div id="conteudo">

                        <p style={{ color: "#FFF" }}>
                            <b>Instituição:</b> {exibirCurso.instituicao} <br />
                            <b>Polo:</b> {exibirCurso.polo} <br />
                            <b>Graduação:</b> {exibirCurso.graduacao} <br />
                            <b>Períodos:</b> {exibirCurso.periodos}<br />
                            <b>Descrição:</b> {exibirCurso.descricao}<br />
                        </p>

                        <p style={{ color: "#FFF", fontFamily: "bold", fontSize: "20px" }}>Matriz Académica:</p>
                        <a href="/Matriz_Ads.pdf" download className='download'
                        >Uninassau <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                            style={{ width: "23px" }} /></a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ADS;
