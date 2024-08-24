import { useState } from "react";
import '../Cards/ADS.css'
import cursosData from "../../../Dados.json";

function ADS() {
    
    const idCurso = 1 //ADS
        
    function carregar() {
        fetch("/Dados.json") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);
                
                if (curso) {
                    let CardADS = document.getElementById("CardADS")
                    CardADS.innerHTML=curso.nome

                    let paragrafo = document.querySelector("#ADSparagrafo");
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
            <div className={Expandir ? 'ADSMaximizada' : 'ADSMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p id="CardADS"></p>
                {Expandir && (
                    <div id="conteudo">
                        <p id="ADSparagrafo">Sobre o curso ....</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ADS;
