import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endpointUrl) {
    try {
        // definir url de la peticion, usando query params con limit y offset
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailByUrlApi(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw (error);
    }
}