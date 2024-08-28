import { useState } from "react";
import '../Cards/SistemasInformacao.css'

function SistemasInformacao() {
const idCurso = 3
        
    function carregar() {
        fetch("https://json-test-sigma.vercel.app/cursos") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);
                
                if (curso) {
                    let CardSI = document.getElementById("CardSI")
                    CardSI.innerHTML=curso.nome

                    let paragrafo = document.querySelector("#SIparagrafo");
                    paragrafo.innerHTML = `
                    Instituição: ${curso.Instituicao}<br> 
                    Graduação: ${curso.graduacao} <br> 
                    Períodos: ${curso.periodos}<br> 
                    Duração: ${curso.duracao} <br> 
                     
                    `;
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
            <div className={Expandir ? 'SIMaximizada' : 'SIMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p id="CardSI" style={{color:"#FFF", fontSize:"20px"}}></p>
                {Expandir && (
                    <div id="conteudo">
                        <p id="SIparagrafo" style={{color:"#FFF"}}>Sobre o curso ....</p>
                    </div>
                )}
            </div>
        </div>
    )

}

export default SistemasInformacao;
