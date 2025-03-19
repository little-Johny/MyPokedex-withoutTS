import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';

export default function Favorite({ id }) {
    const [ isFavorite, setIsFavorite ] = useState(null); 
    const [ realoadCheck, setRealoadCheck ] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                console.error(error);
                setIsFavorite(false);
            }
        })()
    }, [id, realoadCheck]);
    
    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(id);
            console.log(`Added to favorite ${id}`);
            setRealoadCheck((prev) =>  !prev);
        } catch (error) {
            console.error(error);
        }
    };

    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(id);
            console.log(`Removed from favorite ${id}`);
            setRealoadCheck(prev => !prev); // Forzar actualización
        } catch (error) {
            console.error("Error removing favorite:", error);
        }
    };

    return (
        <>
            <Icon 
                name='heart' 
                color={isFavorite ? 'red' : 'white'}
                size={20} 
                onPress={isFavorite ? removeFavorite : addFavorite} 
                style={{marginRight: 20}} 
                solid={isFavorite}
            />
        </>
    )
}