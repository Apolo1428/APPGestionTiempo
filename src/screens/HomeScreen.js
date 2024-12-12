import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskHomeBox from '../components/custom/TaskHomeBox';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style = {styles.box_title}>

      </View>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F6ED',
  },
  box_title: {
    display: 'flex',
    marginTop: 0,
    height: 100,
    width: '100%',
    backgroundColor: '#94EAF3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    elevation: 5,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
