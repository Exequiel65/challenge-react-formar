import axios from "axios";

export const reqResApi = axios.create({
    baseURL : 'https://pokeapi.co/api/v2'
});

// ?offset=0&limit=20