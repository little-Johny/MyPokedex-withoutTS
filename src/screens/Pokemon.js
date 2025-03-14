import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/pokemon/Header';

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
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other['official-artwork'].front_default}
                types={pokemon.types.map(typeInfo => typeInfo.type.name)}
            />
        </ScrollView>
    )
}