import axios from "axios";

export async function getData() {
    const response = await axios.get('https://api.github.com/users/RodrigoSoaresNascimento/repos')
    return response; 
}