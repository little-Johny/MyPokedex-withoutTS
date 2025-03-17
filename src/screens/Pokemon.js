import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';
import Favorite from '../components/pokemon/Favorite';
import useAuth from './../hooks/useAuth';

export default function Pokemon({ route, navigation }) {
    const [pokemon, setPokemon] = useState(null);
    const { params } = route;
    const { user } = useAuth();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => user ? <Favorite id={pokemon?.id}/> : null,
            headerLeft: () => (
                <Icon 
                    name='arrow-left' 
                    color='#fff' 
                    size={20} 
                    style={{ marginLeft: 20 }}
                    onPress={navigation.goBack}
                />
            ),
        });
    }, [navigation, params, pokemon]);

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
            <Type types={pokemon.types.map(typeInfo => typeInfo.type.name)}/>
            <Stats stats={pokemon.stats}/>
        </ScrollView>
    )
}