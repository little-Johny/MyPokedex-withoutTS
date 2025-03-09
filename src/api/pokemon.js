import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
    try {
        // definir url de la peticion, usando query params con limit y offset
        const url = `${API_HOST}/pokemon?limit=20?offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}