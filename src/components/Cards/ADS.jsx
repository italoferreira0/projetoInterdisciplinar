import { useState } from "react";
import '../Cards/ADS.css'

function ADS() {
    
    const idCurso = 1 //ADS
        
    function carregar() {
        fetch("https://json-test-sigma.vercel.app/cursos") // buscar arquivo 
            .then(response => response.json())
            .then(cursos => {
                // Filtra o curso
                const curso = cursos.find(curso => curso.id === idCurso);
                
                if (curso) {
                    let CardADS = document.getElementById("CardADS")
                    CardADS.innerHTML=curso.nome

                    let paragrafo = document.querySelector("#ADSparagrafo");
                    
                    paragrafo.innerHTML = 
                    "<b>Instituição: </b>"+curso.instituicao
                    +"<br><b>Polo: </b>"+curso.polo
                    +"<br><b>Graduação: </b>"+curso.graduacao
                    +"<br><b>Períodos: </b>"+curso.periodos
                    +"<br><b>Descrição: </b>"+curso.descricao
                    
                    
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
                <p id="CardADS" style={{color:"#FFF", fontSize:"20px",fontFamily:"bold"}}></p>
                {Expandir && (
                    <div id="conteudo">
                        <p id="ADSparagrafo" style={{color:"#FFF"}}>Sobre o curso ....</p>
                        <p style={{color:"#FFF", fontFamily:"bold", fontSize:"20px"}}>Matriz Académica:</p>
                        
                        <a href="/ADS-Matriz.pdf" download style={{color:"#FFF", fontFamily:"bold", fontSize:"20px",
                        textDecoration:"none"}}>Downalod <img src="https://img.icons8.com/?size=100&id=43532&format=png&color=000000" 
                        style={{width:"23px"}}/></a>

                    </div>
                )}
            </div>
        </div>
    )
}

export default ADS;
