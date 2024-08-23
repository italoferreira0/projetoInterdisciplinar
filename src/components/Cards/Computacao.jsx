import { useState } from "react";
import '../Cards/Computacao.css'

function ADS() {
    
    const idCurso = 2 
        
    function carregar() {
        fetch("/Dados.json") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);
                
                if (curso) {
                    let CardTitle = document.getElementById("CardTitle")
                    CardTitle.innerHTML=curso.nome

                    let paragrafo = document.querySelector("#paragrafo");
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
            <div className={Expandir ? 'CCMaximizada' : 'CCMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p id="CardTitle"></p>
                {Expandir && (
                    <div id="conteudo">
                        <p id="paragrafo">Sobre o curso ....</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ADS;
