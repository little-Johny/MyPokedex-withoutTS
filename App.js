import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}


