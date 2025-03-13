import { Text, StyleSheet, Image, Pressable } from 'react-native';
import {LinearGradient}  from 'expo-linear-gradient';
import React from 'react';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokeCard({ pokeinfo }) {
    const colors = getColorByPokemonType(pokeinfo.type)
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
    const goToPokemon = () => console.log(`We are going to pokemon # ${pokeinfo.name}`);

    return (
        <Pressable onPress={goToPokemon} style={styles.card}>
            <LinearGradient
                colors={colors}
                style={styles.bgStyles}
                start={{ x: 0, y: 0 }}  // Inicio del gradiente (izquierda)
                end={{ x: 1, y: 0 }}    // Fin del gradiente (derecha)
            >
                <Text style={styles.number}># {`${pokeinfo.order}`.padStart(3, '0')}</Text>
                <Text style={styles.name}>{capitalize(pokeinfo.name)}</Text>
                <Image source={{ uri: pokeinfo.image }} style={styles.image} />
            </LinearGradient>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        margin: 5,  // Añadir un poco de margen entre las tarjetas
        borderRadius: 10,  // Bordes redondeados
        overflow: 'hidden',  // Evita que los hijos se salgan del contenedor
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,  
        alignItems: 'center', // Centra los elementos horizontalmente
        justifyContent: 'center', // Centra verticalmente
        padding: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: 'contain', // Asegura que la imagen se ajuste correctamente
    }
});
