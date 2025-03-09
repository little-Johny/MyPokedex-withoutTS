import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';


const Tab = createBottomTabNavigator();
const screensOptions = [
    {
        name: 'Favorite',
        component: FavoritesScreen,
        tabBarLabel : 'Favorite',
        tabBarIcon : ({ color, size }) => (<Ionicons name='heart' color={ color } size={ size }/> )
    },
    {
        name: 'Pokedex',
        component: PokedexScreen,
        tabBarLabel : '',
        tabBarIcon : () => renderPokeball()
    },
    {
        name: 'Account',
        component: AccountScreen,
        tabBarLabel: 'My Account',
        tabBarIcon: ({ color, size }) => (<Icon name='user'color={ color } size={ size }/>)
    }
];

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            { screensOptions.map((screen, index) => (
                <Tab.Screen
                    key={ index }
                    name={ screen.name }
                    component={ screen.component }
                    options={{
                        tabBarLabel: screen.tabBarLabel,
                        tabBarIcon: screen.tabBarIcon
                    }}
                />
            )) }
        </Tab.Navigator>
    )
}

//Funcion para renderizar imagen en tabnavigator
function renderPokeball() {
    return <Image
        source={require('./../assets/pokeball.png')}
        style={{ width: 55, height: 55, top: -15 }}
        />
    
}