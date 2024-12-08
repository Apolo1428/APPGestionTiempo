import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>aqui las tareas</Text>
      {/* Aquí va el contenido de la pantalla principal */}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
