import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function PermissionsScreen({ navigation }) {
  const handleGrantPermissions = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permisos</Text>
      <Text style={styles.text}>
        Esta app necesita permisos para funcionar correctamente. Por favor, acepta los permisos necesarios.
      </Text>
      <Button title="Conceder permisos" onPress={handleGrantPermissions} />
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
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
