import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../common/constans';
import { styles } from '../theme/Apptheme';
import { InputComponent } from '../components/Inputcomponent';
import { TitleComponent } from '../components/Components';
import { BodyComponent } from '../components/Bodycomponent';
import { ButtonComponent } from '../components/Buttoncomponent';

//interface - objeto
interface FormLogin {
    email: string;
    password: string;
}

//interface - arreglo objetos
interface User {
    id: number;
    email: string;
    password: string;
}

export const LoginScreen = ({ navigation }: any) => {

    //arreglo con los usuarios para iniciar sesión
    const users: User[] = [
        { id: 1, email: 'danyjoel@gmail.com', password: '123456' },
        { id: 2, email: 'sabvela@gmail.com', password: '1234567' }
    ];

    //hook useState: manipular el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });
    //hook useState: permitir que se haga visible/no visible el contenido del password
    const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);

    //función para actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        //Cambiar el estado del formLogin
        //... operador de propagación | spread: crear una copia del objeto
        setFormLogin({ ...formLogin, [name]: value });
    }

    //función para iniciar sesión
    const handleSignIn = () => {
        //Validando que los campos estén llenos
        if (!formLogin.email || !formLogin.password) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }
        //Validando que el usuario exista
        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }
        console.log(formLogin);
    }

    //función verificar si existe el correo y contraseña (usuario)
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser;
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleHeaderBody}>Bienvenido</Text>
                    <Text style={styles.textBody}>Realiza tus compras de tu mascota de manera rápida y segura</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPaswword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)} />
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity onPress={() => navigation.navigate('Register', { data: 'someData' })}>
                    <Text style={styles.textRedirection}>No tienes una cuenta? Regístrate ahora</Text>
                    
                </TouchableOpacity>
               
            </BodyComponent>
        </View>
    )
}