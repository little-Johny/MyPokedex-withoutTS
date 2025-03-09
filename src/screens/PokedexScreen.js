import { Button, SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function PokedexScreen(props) {
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