import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

export default function Favorite({ id }) {
    const [ isFavorite, setIsFavorite ] = useState(null); 

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false);
            }
        })()
    }, [id]);

    let color = null;
    
    const addFavorite = async () => {
        await addPokemonFavoriteApi(id);
        console.log(`Added to favorite ${id}`);
        color = isFavorite()
    };

    const removeFavorite = async () => {
        console.log(`Delete from favorite`);
    };

    return (
        <>
            <Icon name='heart' color='#fff' size={20} onPress={addFavorite} style={{marginRight: 20}} solid={color}/>
        </>
    )
}