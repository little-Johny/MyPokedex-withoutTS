import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import PokeCard from './PokeCard';



export default function PokemonList({ items, loadPokemons, isNext, isLoading }) {
    console.log('pokelist:',items);

    // Cuando se llega al final de la lista se ejecuta esta funcion
    const loadMore = () => {
        loadPokemons();
    }
    return (
        <FlatList
            data={items} 
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <PokeCard pokeinfo={item}/>}
            contentContainerStyle= { style.flatListContentContainer }
            onEndReached ={!isLoading && isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isLoading && isNext && (
                    <ActivityIndicator
                        size='large'
                        style={StyleSheet.spinner}
                        color='#0000ff'
                    />
                )
            }
        />
    )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
})