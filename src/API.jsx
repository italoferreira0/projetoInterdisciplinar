import { useEffect, useState } from "react"

function API() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/RodrigoSoaresNascimento/repos')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])

    return(
        <div>
         
        </div>
    )

}

export default API