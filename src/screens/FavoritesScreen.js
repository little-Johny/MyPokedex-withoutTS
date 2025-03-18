import { View, Text, Button } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonFavoriteApi, isPokemonFavoriteApi } from '../api/favorite';

export default function FavoritesScreen() {
    const [ favorites, setFavorites ] = useState();

    const loadFavorites = async () => {
        try {
            console.log(`Getting favorites...`);
            const favs = await getPokemonFavoriteApi(); // obtener pokemons favorites
            setFavorites(Array.isArray(favs) ? favs : []); //almacenar los favoritos en un estado y si es null le asignamos un array vaio
            console.log(favs);
        } catch (error) {
            console.log(error);
        }
    };


    //Ejecucion al abrir pantalla
    useFocusEffect(
        useCallback(() => {
            loadFavorites();
            return () => console.log(`leaving favorites`);
        }, [])
    );

    return (
        <View>
            <Text>FavoritesScreen</Text>
            <Button title='Get Favorites' onPress={loadFavorites} />
        </View>
    )
}