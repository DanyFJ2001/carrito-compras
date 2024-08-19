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

//Props usuarios (array de users)
interface Props {
    users: User[]
}
//Formulario 
interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });
    //hacer visible o no la constrasena
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const navigation = useNavigation();

    //Actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    }

    //Iniciar sesion
    const handleSignIn = () => {
        if (!formLogin.email || !formLogin.password) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }
        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }

        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));

    }
    //Verificacion de usuario existenten
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
                        source={require('../imagenes/a.jpg')}
                        style={styles.logo2}
                    />
                </View>
            </BodyComponent>
        </View>
    )
}