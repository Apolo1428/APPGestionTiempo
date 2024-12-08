import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CheckBox from '../common/CheckBox';

export default function TermsConditionsScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      navigation.navigate('Permissions');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Términos y Condiciones</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.contentText}>
          Bienvenido a KinsaTech. Esta app está diseñada para mejorar tu productividad al ayudarte a concentrarte en tus metas y evitar distracciones.

          {'\n\n'}
          1. **Aceptación**: Al usar esta app, aceptas estos términos. Si no estás de acuerdo, no la utilices.

          {'\n\n'}
          2. **Uso**: La app es para uso personal y no comercial. Debes usarla de manera legal y sin causar daño.

          {'\n\n'}
          3. **Privacidad**: Tu información será tratada de acuerdo con nuestra Política de Privacidad. Al usar la app, aceptas nuestra política de datos.

          {'\n\n'}
          4. **Propiedad**: Todos los derechos de la app son de KinsaTech. No puedes reproducir ni distribuir el contenido sin permiso.

          {'\n\n'}
          5. **Responsabilidad**: KinsaTech no se hace responsable por daños derivados del uso de la app.

          {'\n\n'}
          6. **Cambios**: Podemos modificar estos términos en cualquier momento. Los cambios se publicarán aquí.

          {'\n\n'}
          7. **Terminación**: Podemos suspender tu acceso si violas estos términos.

          {'\n\n'}
          8. **Contacto**: Para preguntas, contáctanos en [tu dirección de contacto].

          {'\n\n'}
          Última actualización: [Fecha de actualización]
        </Text>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          label="Acepto los términos y condiciones"
        />
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
        onPress={handleAccept}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Aceptar términos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F6ED',
  },
  titleContainer: {
    marginTop: 40, // Ajusta el valor según el espaciado deseado
    marginBottom: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flexGrow: 1,
    marginBottom: 20,
    padding: 30,
  },
  contentText: {
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
