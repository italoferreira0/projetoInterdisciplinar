import { useState } from "react";
import '../Cards/ADS.css';

function ADS() {
    const [curso, setCurso] = useState(null); // Estado para armazenar os dados do curso
    const idCurso = 1; // ID do curso ADS

    function carregar() {
        fetch("/Dados.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar o arquivo JSON");
                }
                return response.json();
            })
            .then(cursos => {
                const cursoEncontrado = cursos.find(curso => curso.id === idCurso);
                if (cursoEncontrado) {
                    setCurso(cursoEncontrado);
                } else {
                    console.log("Curso não encontrado.");
                }
            })
            .catch(error => {
                console.error("Erro ao carregar os dados:", error);
            });
    }

    // Chama a função carregar imediatamente após a definição
    if (!curso) {
        carregar();
    }

    //-----------------------Expandir e Diminuir div ----------------------------------------------------
    const [Expandir, setExpandir] = useState(false);
    const alterarTamanho = () => {
        setExpandir(!Expandir);
    };
    const recolherDiv = () => {
        setExpandir(false);
    };
    //---------------------------------------------------------------------------------------------------

    return (
        <div>
            <div
                className={Expandir ? 'ADSMaximizada' : 'ADSMinimizada'}
                onClick={alterarTamanho}
                onMouseLeave={recolherDiv}
            >
                <p id="CardADS">{curso ? curso.nome : "Carregando..."}</p>
                {Expandir && curso && (
                    <div id="conteudo">
                        <p id="ADSparagrafo">
                            Instituição: {curso.Instituicao}<br />
                            Graduação: {curso.graduacao}<br />
                            Períodos: {curso.periodos}<br />
                            Duração: {curso.duracao}<br />
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ADS;
