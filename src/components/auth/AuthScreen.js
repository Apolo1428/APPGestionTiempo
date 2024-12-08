import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TextSwitch from '../common/TextSwitch'; // Importa el componente con el nuevo nombre

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('login');

  const handleLogin = () => {
    // Lógica para iniciar sesión
    navigation.navigate('Main');
  };

  const handleSignUp = () => {
    // Lógica para registrarse
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/logo.jpg')} style={styles.logo} />

      <TextSwitch selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      {selectedOption === 'login' ? (
        <>
          <Text style={styles.title}>Iniciar sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Registrarse</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F6ED',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
