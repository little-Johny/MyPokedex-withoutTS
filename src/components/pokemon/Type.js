import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type({ types }) {
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    return (
        <View style={styles.content}>
            {types.map((type, index) => {
                return  <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(type)[0]}}>
                            <Text>{capitalize(type)}</Text>
                        </View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    }
});