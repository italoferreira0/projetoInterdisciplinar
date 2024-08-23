import React, { useState, useEffect } from 'react';

function Dados() {
    const [nomes, setNomes] = useState([]);
    const [idades, setIdades] = useState([]);


    function carregar() {
        fetch("Dados.json") // buscar arquivo 
            .then(response => response.json())
            .then(usuarios => {
                // Atualiza o estado com os nomes e idades
                setNomes(usuarios.map(usuario => usuario.nome));
                setIdades(usuarios.map(usuario => usuario.idade));
            })
            .catch(error => console.error("Erro ao carregar os dados:", error));
    }

    return (
        <div className="container" id="usuarios-container">
            
        </div>
    );
}

export default Dados;
