import { Button, SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { getPokemonsApi } from '../api/pokemon';


export default function PokedexScreen(props) {
    useEffect(() =>{
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi();
            console.log(response);
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
            <Button onPress={goToPokemon} title='Pokemon'/>
        </SafeAreaView>
    )
}