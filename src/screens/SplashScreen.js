import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Auth');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);
  const [loaded, error] = useFonts({
    'NicoMoji-Regular': require('../assets/fonts/NicoMoji-Regular.ttf'),
    'Nunito-VariableFont_wght': require('../assets/fonts/Nunito-VariableFont_wght.ttf'),
  });
  return (
    <View style={styles.container}>
      <LinearGradient
        colors = {['white', '#00FFFE', '#00A4A4']}
        style = {styles.gradientBackground}
        start = {{x: 0, y: 0}}
        end = {{x: 1, y: 1}}
        locations={[0.5, 0.5,0.9]}
      />
      <Text style = {{
        fontSize: 40, 
        fontFamily: 'NicoMoji-Regular',
        position: 'absolute',
        top:100
        }}>TM</Text>
      <Text style = {{
        fontSize: 16, 
        fontFamily: 'Nunito-VariableFont_wght',
        fontWeight: 900,
        position: 'absolute',
        top:160
        }}>Optimiza tu tiempo y bloquea apps</Text>
      <Image
        source={require('../assets/icons/logoApp.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style = {{
        fontSize: 24, 
        fontFamily: 'NicoMoji-Regular',
        position: 'absolute',
        top:630,
        textAlign: 'center'
        }}>Mancos{"\n"}Production</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  image: {
    width: 240,
    height: 240,
  },
});
