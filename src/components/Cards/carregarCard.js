export async function carregarCard(idCurso) {
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