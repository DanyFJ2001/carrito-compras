import React, { useState } from 'react';
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';
import { PRIMARY_COLOR } from '../common/constans';
import { BodyComponent } from '../components/Bodycomponent';
import { styles } from '../theme/Apptheme';
import { InputComponent } from '../components/Inputcomponent';
import { ButtonComponent } from '../components/Buttoncomponent';

//interface - props
interface Props {
    users: User[]
}

//interface - objeto
interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState: manipular el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });
    //hook useState: permitir que se haga visible/no visible el contenido del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation(): navega de una pantalla a otra
    const navigation = useNavigation();

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
        //Si inicio sesión sin problemas, vamos al Home Screen
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
        //console.log(formLogin);

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
                    <Text style={styles.titleHeaderBody}>Bienvenido!</Text>
                    <Text style={styles.textBody}>Realiza las compras de tu mascota de manera rápida y segura</Text>
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
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirection}>No tienes una cuenta? Regístrate ahora</Text>
                </TouchableOpacity>
                <View>
                    <Image
                        source={require('../imagenes/a.jpg')} // Ruta relativa a la imagen en tu proyecto
                        style={styles.logo2}
                    />
                </View>
            </BodyComponent>
        </View>
    )
}