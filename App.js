import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/StackNavigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStack/>
      </AuthProvider>
    </NavigationContainer>
  );
}


