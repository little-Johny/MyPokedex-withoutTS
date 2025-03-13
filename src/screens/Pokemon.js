import { View, Text } from 'react-native'
import React from 'react'

export default function Pokemon({ route, navigation }) {
    console.log(route);
    console.log(route.params.id);
    return (
        <View>
            <Text>We stay looking a Pokemon</Text>
        </View>
    )
}