import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from './../screens/Pokemon';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

// Stack Navigator que envuelve el Tab Navigator
const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Main'
            component={TabNavigation}
            options={{ headerShown: false }} // Ocultar encabezado
        />
        <Stack.Screen name='Pokemon' component={PokemonScreen} />
    </Stack.Navigator>
);

export default AppStack;