import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React, { useCallback, useEffect, useMemo } from 'react'
import PokeCard from './PokeCard';



export default function PokemonList({ items, loadPokemons, isNext, isLoading }) {
    useEffect(() => {
        console.log('pokelist:', items);
    }, [items]);
    

    // Cuando se llega al final de la lista se ejecuta esta funcion

    const loadMore = useCallback(() => {
        if (!isLoading && isNext) {
            loadPokemons();
        }
    }, [isLoading, isNext, loadPokemons]);

    const footer = useMemo(() => {
        return isLoading && isNext ? (
            <ActivityIndicator size='large' style={style.spinner} color='#0000ff'/>
        ) : null;
    }, [isLoading, isNext]);
    
    return (
        <FlatList
            data={items}  
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id ? String(item.id) : index.toString()}
            renderItem={({item}) => <PokeCard pokeinfo={item}/>}
            contentContainerStyle= { style.flatListContentContainer }
            onEndReached ={!isLoading && isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={footer}
        />
    )
}

const style = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: 50,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    }
})