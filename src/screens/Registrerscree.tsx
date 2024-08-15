import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../common/constans';
import { TitleComponent } from '../components/Components';
import { BodyComponent } from '../components/Bodycomponent';
import { styles } from '../theme/Apptheme';

import { ButtonComponent } from '../components/Buttoncomponent';
import { InputComponent } from '../components/Inputcomponent';

// interface - props
interface Props {
    users: User[];
    handleAddUser: (user: User) => void; 
}

// interface - objeto
interface FormRegister {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    password: string;
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {
    // hook useState: manipular el formulario de registro
    const [formRegister, setFormRegister] = useState<FormRegister>({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: ''
    });

    // hook useState: permitir que se haga visible/no visible el contenido del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    // hook useNavigation: navegar de una pantalla a otra
    const navigation = useNavigation();

    // función actualizar el estado del formulario registro
    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    }

    // función registrar nuevos usuarios
    const handleSignUp = () => {
        // Validar que todos los campos estén llenos
        if (!formRegister.firstName || !formRegister.lastName || !formRegister.age || !formRegister.email || !formRegister.password) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }

        // Validar que no se registre un usuario que ya se encuentre en el arreglo
        if (verifyUser() != null) {
            Alert.alert(
                'Error',
                'El usuario ya se encuentra registrado!'
            );
            return;
        }

        // Registrar nuevo usuario
        // Obtener el id de los usuarios
        const getIdUsers = users.map(user => user.id); //[1,2]
        // Obtener el nuevo id del nuevo usuario
        const getNewId = Math.max(...getIdUsers) + 1;
        // Generar la información del nuevo usuario - nuevo objeto
        const newUser: User = {
            id: getNewId,
            firstName: formRegister.firstName,
            lastName: formRegister.lastName,
            age: parseInt(formRegister.age),
            email: formRegister.email,
            password: formRegister.password
        }
        // Agregar el nuevo usuario al arreglo
        handleAddUser(newUser);
        Alert.alert(
            'Felicitaciones',
            'Registro exitoso!'
        );
        // Regreso a la anterior pantalla
        navigation.goBack();
    }

    // función verificar si el usuario está registrado
    const verifyUser = () => {
        const existUser = users.filter(user => user.email === formRegister.email)[0];
        return existUser;
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Regístrate' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleHeaderBody}>Estás muy cerca!</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Nombre'
                        handleSetValues={handleSetValues}
                        name='firstName' />
                    <InputComponent
                        placeholder='Apellido'
                        handleSetValues={handleSetValues}
                        name='lastName' />
                    <InputComponent
                        placeholder='Edad'
                        handleSetValues={handleSetValues}
                        name='age'
                      />
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
                <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirection}>Ya tienes una cuenta? Iniciar sesión ahora</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
