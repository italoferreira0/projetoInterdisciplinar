import { useState } from "react";
import '../Cards/EngComp.css'

function EngComp() {
    
    const idCurso = 4 
        
    function carregar() {
        fetch("https://json-test-sigma.vercel.app/cursos") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);
                
                if (curso) {
                    let CardEngC = document.getElementById("CardEngC")
                    CardEngC.innerHTML=curso.nome

                    let paragrafo = document.querySelector("#EngCparagrafo");
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
            <div className={Expandir ? 'EngCMaximizada' : 'EngCMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p id="CardEngC" style={{color:"#FFF", fontSize:"20px",fontFamily:"bold"}} ></p>
                {Expandir && (
                    <div id="conteudo">
                        <p id="EngCparagrafo" style={{color:"#FFF"}}>Sobre o curso ....</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EngComp;
