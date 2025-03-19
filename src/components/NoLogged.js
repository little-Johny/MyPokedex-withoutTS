import { StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {
    const navigation = useNavigation();
    return (
        <View style={styles.content}>
            <Text style={styles.text}>
                To see this screen you must log in
            </Text>
            <Button title='Go to Login' onPress={() => navigation.navigate('Account')}/>   
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
    }
});