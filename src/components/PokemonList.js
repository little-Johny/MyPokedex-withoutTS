import { Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import PokeCard from './PokeCard';



export default function PokemonList({ items }) {
    console.log('pokelist:',items);
    return (
        <FlatList
            data={items}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <PokeCard pokeinfo={item}/>}
            contentContainerStyle= { style.flatListContentContainer }
        />
    )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})