import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles } from '../theme/Apptheme';

export const CustomInicioScreen = ({ navigation }: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Petshop</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerButtonText}>Registrarte</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <Image
          source={require('../imagenes/5.jpg')} // Ruta relativa a la imagen en tu proyecto
          style={styles.image}
        />
      </View>

      <View style={styles.footerSection}>
        <Text style={styles.footerTitle}>Hola humano!</Text>
        <Text style={styles.footerText}>¿Quieres iniciar sesión o registrarte?</Text>
      </View>
    </View>
  );
};




