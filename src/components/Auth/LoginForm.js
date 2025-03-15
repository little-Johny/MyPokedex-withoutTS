import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button, 
    Keyboard, 
} from 'react-native';
import React from 'react';

export default function LoginForm() {
    return (
        <View>
            <Text style={styles.title}>Sing  In</Text>
            <TextInput
                placeholder='Username'
                style={styles.input}
                autoCapitalize='none'
            />
            <TextInput
                placeholder='password'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}    
            />
            <Button title='Enter' onPress={() => console.log('Login')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
});