import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon';

export default function Pokemon({ route, navigation }) {
    const [pokemon, setPokemon] = useState(null);
    const { params } = route;

    //ejecutar peticion
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await getPokemonDetailsApi(params.id);
                setPokemon(response);
            } catch (error) {
                navigation.goBack();
            }
        }

        fetchPokemon();
    }, [params]);

    console.log(route);
    console.log(params.id);

    if (!pokemon) return null;

    return (
        <View>
            <Text>We stay looking a Pokemon</Text>
            <Text>{pokemon.name}</Text>
        </View>
    )
}