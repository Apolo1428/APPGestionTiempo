import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextSwitch({ selectedOption, setSelectedOption }) {
  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity
        style={[styles.switchOption, selectedOption === 'login' && styles.activeOption]}
        onPress={() => setSelectedOption('login')}
      >
        <Text style={[styles.switchText, selectedOption === 'login' && styles.activeText]}>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.switchOption, selectedOption === 'signup' && styles.activeOption]}
        onPress={() => setSelectedOption('signup')}
      >
        <Text style={[styles.switchText, selectedOption === 'signup' && styles.activeText]}>
          Registrarse
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  switchOption: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  activeOption: {
    backgroundColor: '#007BFF',
  },
  switchText: {
    fontSize: 16,
    color: '#000',
  },
  activeText: {
    color: '#FFF',
  },
});
