import { useState } from "react";
import '../Cards/ADS.css'

function ADS() {
    const elemento = document.getElementById("nome")
    const nome = elemento.textContent;
    
    function carregar() {
        fetch("/Dados.json") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.nome === nome);
                
                if (curso) {
                    let paragrafo = document.querySelector("#paragrafo")
                    paragrafo.innerHTML = `Curso: ${curso.nome} <br>
                    Duração: ${curso.duracao} <br> Períodos: ${curso.periodos} <br>
                    Graduação: ${curso.graducao} <br> Instituição: ${curso.Instituicao} `
                } else {
                    console.log("Curso não encontrado.");
                }
            })
            .catch(error => console.error("Erro ao carregar os dados:", error));
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
            <div className={Expandir ? 'DivMaximizada' : 'DivMinimizada'} onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p id="nome">Analise e Desenvolvimento de Sistemas</p>
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
