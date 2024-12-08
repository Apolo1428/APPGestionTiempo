// CustomCheckBox.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckBox = ({ value, onValueChange, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onValueChange(!value)}>
      <View style={[styles.checkbox, value && styles.checkboxChecked]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 4,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#007BFF',
  },
  label: {
    fontSize: 14,
  },
});

export default CheckBox;
