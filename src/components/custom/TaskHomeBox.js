// CustomCheckBox.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskHomeBox = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.grey}>

      </View>
      <View>
        <Text style={styles.title}>Nombre de tarea</Text>
        <Text style={styles.label}>Descripcion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 342,
    height: 70,
    borderRadius: 12,
    padding: 10,

    elevation: 5,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',

    // background color must be set
  },
  grey: {
    width: 50,
    hegith: 50,
    borderRadius: 12,
    backgroundColor:'grey',
    marginRight:15,
  },

  title: {
    fontSize: 18,
  },

  label: {
    fontSize: 14,
  },
});

export default TaskHomeBox;