import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PokemonScreen from '../screens/Pokemon'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 🔹 Definir opciones para el Tab Navigator
const screensOptions = [
    {
        name: 'Favorite',
        component: FavoritesScreen,
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
        ),
    },
    {
        name: 'Pokedex',
        component: PokedexScreen,
        tabBarLabel: '',
        tabBarIcon: () => renderPokeball(),
    },
    {
        name: 'Account',
        component: AccountScreen,
        tabBarLabel: 'My Account',
        tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
        ),
    },
];

// 🔹 Stack Navigator que envuelve el Tab Navigator
const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Main"
            component={TabNavigation}
            options={{ headerShown: false }} // Ocultar encabezado
        />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
);

// 🔹 Tab Navigation
function TabNavigation() {
    return (
        <Tab.Navigator>
            {screensOptions.map((screen, index) => (
                <Tab.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    options={{
                        tabBarLabel: screen.tabBarLabel,
                        tabBarIcon: screen.tabBarIcon,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}

// 🔹 Renderizar imagen de la Pokeball
function renderPokeball() {
    return (
        <Image
            source={require('./../assets/pokeball.png')}
            style={{ width: 55, height: 55, top: -15 }}
        />
    );
}

// 🔹 Exportar la navegación principal con `AppStack`
export default AppStack;
