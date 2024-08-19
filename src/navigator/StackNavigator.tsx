import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { PRIMARY_COLOR } from '../common/constans';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Registrerscree';
import { HomeScreen, Car } from '../screens/HomeScreen';
import { CustomInicioScreen } from '../screens/Inicio';
import { Prueba } from '../screens/homescreen/Prueba';
import { CardProduct } from '../screens/homescreen/CardProduct';

export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
    pathImage: string;
    stock:number;
}

//interface - arreglo objetos
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //arreglo con los usuarios para iniciar sesión
    const users: User[] = [
        { id: 1, email: '1', password: '1' ,firstName:'dany',lastName:'fernandez',age: 22},
        { id: 2, email: '2', password: '2' ,firstName:'sb',lastName:'vela',age: 19},
    ];

    //hookuseState: gestionar la lista de usuarios - inciar y registrar
    const [listUsers, setListUsers] = useState(users);

    //función actualizar la data del arreglo
    const handleAddUser = (user: User) => {
        //operador propagación... : sacar copia del contenido del arreglo
        //Agregar le nuevo usario que reciba como parámetro
        setListUsers([...listUsers, user]);
    }
    const car : Car[]=[
        {id: 1, name: 'Michu 85 Gr', price: 18, stock: 5, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/172206697_M.jpg' }
    ]

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
               <Stack.Screen name="Inicio" options={{ headerShown: false }} component={CustomInicioScreen} />
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                name="Register"
                options={{ headerShown: false }}
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} />
            <Stack.Screen
                name='Home'
                options={{ headerShown: false }}
                component={HomeScreen} />
                <Stack.Screen
                name='Prueba'
                options={{ headerShown: false }}
                children={() => <Prueba car={car}  />}/>
           
        </Stack.Navigator>
    );
}