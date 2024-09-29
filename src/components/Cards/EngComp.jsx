import { useState } from "react";
import '../Cards/EngComp.css'

function EngComp() {
    
    const idCurso = 5
    const [exibirCurso, setExibirCurso] = useState("")
        
    function carregar() {
        fetch("https://json-bd.vercel.app/cursos") // buscar arquivo 
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
    carregar()

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
            <div className={Expandir ? 'EngCMaximizada' : 'EngCMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p style={{color:"#FFF", fontSize:"20px",fontFamily:"bold"}} >{exibirCurso.nome}</p>
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
                        <a href="/Matriz_EngCom.pdf" download className='download'
                        >IFPB <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000"
                            style={{ width: "23px" }} /></a>

                    </div>
                )}
            </div>
        </div>
    )
}

export default EngComp;
