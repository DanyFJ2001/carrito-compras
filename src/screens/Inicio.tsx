import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ButtonComponent } from '../components/Buttoncomponent';
import { styles } from '../theme/Apptheme';

export const InicioScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../imagenes/pug2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Pet shop</Text>
        <ButtonComponent textButton="Iniciar" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default InicioScreen;

