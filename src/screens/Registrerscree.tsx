import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../common/constans';
import { styles } from '../theme/Apptheme';
import { InputComponent } from '../components/Inputcomponent';
import { TitleComponent } from '../components/Components';
import { BodyComponent } from '../components/Bodycomponent';
import { ButtonComponent } from '../components/Buttoncomponent';

interface FormRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterScreen = ({ navigation }: any) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState<boolean>(true);

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    }
     //hook useState: permitir que se haga visible/no visible el contenido del password
     const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);

    const handleRegister = () => {
        if (!formRegister.name || !formRegister.email || !formRegister.password || !formRegister.confirmPassword) {
            Alert.alert('Error', 'Por favor, ingrese valores en todos los campos!');
            return;
        }

        if (formRegister.password !== formRegister.confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden!');
            return;
        }

        Alert.alert('Registro exitoso', `Bienvenido, ${formRegister.name}!`);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Registro' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleHeaderBody}>Crear una Cuenta</Text>
                    <Text style={styles.textBody}>Regístrate para comenzar a comprar para tu mascota</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Nombre'
                        handleSetValues={handleSetValues}
                        name='name' />
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
                        setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)} />
                    <InputComponent
                        placeholder='Confirmar Contraseña'
                        handleSetValues={handleSetValues}
                        name='confirmPassword'
                        isPassword={hiddenConfirmPassword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)}/>
                </View>
                <ButtonComponent textButton='Registrarse' onPress={handleRegister} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textRedirection}>¿Ya tienes una cuenta? Inicia sesión</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
}

export default RegisterScreen;
