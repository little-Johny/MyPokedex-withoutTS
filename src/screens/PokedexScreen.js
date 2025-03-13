import { Button, SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react';
import { getPokemonsApi, getPokemonDetailByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';


export default function PokedexScreen({ navigation }) {
    const [ pokemons, setPokemons ] = useState([]);
    const [ nextUrl, setNextUrl ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    console.log(pokemons);
    useEffect(() =>{
        loadPokemons();
    }, []);

    const loadPokemons = useCallback( async () => {
        if(loading) return; //Evitamos llamadas innecesarias  si ya esta cargando

        try {
            setLoading(true);
            const { results: pokemonResponse, next: nextPokemonListUrl } = await getPokemonsApi(nextUrl);
            /* console.log(pokemonResponse,`next:`, nextPokemonListUrl); */
            setNextUrl(nextPokemonListUrl);
            const pokemonArray = [];

            for await (const pokemon of pokemonResponse ) {
                /* console.log(pokemon); */
                const pokemonDetail = await getPokemonDetailByUrlApi(pokemon.url);
                /* console.log(pokemonDetail); */

                pokemonArray.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    type: pokemonDetail.types.map(typeInfo => typeInfo.type.name),
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other['official-artwork'].front_default,
                });
            }

            setPokemons(prevPokemons => [...prevPokemons, ...pokemonArray]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [nextUrl, loading]);

    const goToPokemon = () => navigation.navigate('Pokemon');

    return (
        <SafeAreaView>
            <Text>PokedexScreen</Text> 
            <PokemonList 
                items={pokemons} 
                loadPokemons={loadPokemons} 
                isNext={nextUrl}
                isLoading={loading}
            />
            <Button onPress={goToPokemon} title='Pokemon'/>
        </SafeAreaView>
    )
}