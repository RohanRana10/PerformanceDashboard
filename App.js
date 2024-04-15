import { StyleSheet, View } from 'react-native';
import Setup from './components/Setup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupScreen from './screens/SetupScreen';
import DashboardScreen from './screens/DashboardScreen';
import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Setup' component={SetupScreen} />
          <Stack.Screen name='Dashboard' component={DashboardScreen} />
          <Stack.Screen name='Splash' component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151618',
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20
    // justifyContent: 'center',
  },
});
