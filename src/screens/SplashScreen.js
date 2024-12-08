import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Auth');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        <Image
          source={require('../assets/icons/logo.jpg')} // Asegúrate de ajustar la ruta
          style={styles.image}
          resizeMode="contain" // O "cover" según lo que necesites
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 0,
    overflow: 'hidden',
    // Usa un gradiente simulando con un color sólido para el efecto
    background: 'linear-gradient(to top, #FFFFFF 0%, #000000 100%)',
  },
  image: {
    width: 240,
    height: 240,
  },
});
