import { StyleSheet, View, Text, Button, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getPokemonFavoriteApi } from '../../api/favorite';
import { useFocusEffect } from '@react-navigation/native';

export default function UserData() {
    const [ total, setTotal ] = useState(0);
    const { user, logout } = useAuth();

    useFocusEffect(
        useCallback(() => {
            const fetchTotalFavorites = async () => {
                try {
                    const favorites = Array.isArray(await getPokemonFavoriteApi()) ? await getPokemonFavoriteApi() : [];
                    setTotal(favorites.length);
                } catch (error) {
                    console.error("Error getting favorites:", error);
                }
            };
            
            fetchTotalFavorites();
        }, [])
    );

    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={user.image} style={styles.image} />
            </View>

            <View style={styles.dataContent}>
                <ItemMenu title={"Full name"} text={`${user.firstName} ${user.lastName}`}/>
                <ItemMenu title={"Username"} text={`${user.username}`}/>
                <ItemMenu title={"Email"} text={`${user.email}`}/>
                <ItemMenu title={"Total favorites"} text={total}/>
            </View>
            <Button title='Logout' onPress={logout} style={styles.btnLogout}/>
        </View>
    )
}

const ItemMenu = ({title, text}) => {
    return(
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    titleBlock: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    imageContainer: {
        marginBottom: 20,
        borderRadius: 50,
        overflow: 'hidden', // Asegura que la imagen respete los bordes redondeados
        elevation: 5, // Sombra en Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    dataContent: {
        width: '100%',
        marginBottom: 20,
    },
    itemMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#CFCFCF',
    },
    itemMenuTitle: {
        fontWeight: 'bold',
        width: 120,
    },
    btnContainer: {
        width: '100%',
        marginTop: 20,
    },
});