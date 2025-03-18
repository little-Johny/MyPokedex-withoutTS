import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_STORAGE } from '../utils/constants';

export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

export async function getPokemonFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response ? JSON.parse(response) : []; // si es null returna un array vacio
    } catch (error) {
        throw error;
    }
}