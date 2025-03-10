import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';



export default function PokemonList({ items }) {
    console.log('pokelist:' + items);
    return (
        <FlatList
            data={items}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Text>{item.name}</Text>}
            contentContainerStyle= { style.flatListContentContainer }
        />
    )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})