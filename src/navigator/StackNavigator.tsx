import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../common/constans';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Registrerscree';
import InicioScreen from '../screens/Inicio';



const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:PRIMARY_COLOR
                }
            }}>
               <Stack.Screen name="Inicio" options={{ headerShown: false }} component={InicioScreen} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
        </Stack.Navigator>
    );
}