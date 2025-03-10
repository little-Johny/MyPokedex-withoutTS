import { Button, SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { getPokemonsApi, getPokemonDetailByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';


export default function PokedexScreen(props) {
    const [ pokemons, setPokemons ] = useState([]);
    console.log(pokemons);
    useEffect(() =>{
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi();
            const pokemonArray = [];

            for await (const pokemon of response.results ) {
                /* console.log(pokemon); */
                const pokemonDetail = await getPokemonDetailByUrlApi(pokemon.url);
                /* console.log(pokemonDetail); */

                pokemonArray.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    type: pokemonDetail.types[0].type.name,
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other['official-artwork'].front_default,
                });
            }

            setPokemons([...pokemons, ...pokemonArray]);
        } catch (error) {
            console.error(error);
        }
    }

    const { navigation } = props;
    const goToPokemon = ()=> (
        navigation.navigate('Pokemon')
    );
    return (
        <SafeAreaView>
            <Text>PokedexScreen</Text> 
            <PokemonList items={pokemons}/>
            <Button onPress={goToPokemon} title='Pokemon'/>
        </SafeAreaView>
    )
}