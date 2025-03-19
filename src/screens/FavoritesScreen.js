import { View, Text, Button } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonFavoriteApi } from './../api/favorite';
import { getPokemonDetailsApi } from './../api/pokemon';
import useAuth from './../hooks/useAuth';
import PokemonList from './../components/PokemonList';

export default function FavoritesScreen() {
    const { user } = useAuth();
    const [ favorites, setFavorites ] = useState([]);

    const loadFavorites = async () => {
        try {
            console.log(`Getting favorites...`);
            const favs = ( await getPokemonFavoriteApi()) || []; // obtener pokemons favorites
            
            const pokemonArray = [];
            
            for (const id of favs ) {
                /* console.log(pokemon); */
                const pokemonDetail = await getPokemonDetailsApi(id);
                /* console.log(pokemonDetail); */

                pokemonArray.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    type: pokemonDetail.types.map(typeInfo => typeInfo.type.name),
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other['official-artwork'].front_default,
                });
            }
            
            console.log(favs);
            setFavorites(pokemonArray);
        } catch (error) {
            console.log(error);
        }
    };


    //Ejecucion al abrir pantalla
    useFocusEffect(
        useCallback(() => {
            if (user) {
                loadFavorites();
                return () => console.log(`leaving favorites`);
            }
        }, [user])
    );

    return user ? (
        <>
            <PokemonList 
                items={favorites} 
            />
            <View>
                <Button title='Get Favorites' onPress={loadFavorites} />
            </View>
        </>
    ) : (
        <Text>Usuario no registrado</Text>
    );

}