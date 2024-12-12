import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import TaskHomeBox from '../components/custom/TaskHomeBox';
import HeaderHome from '../components/custom/HeaderHome';
import DateScrollerHome from '../components/custom/DateScrollerHome';

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle = {styles.container}
      stickyHeaderIndices={[0]}
      >
      
      <HeaderHome></HeaderHome>
      <DateScrollerHome></DateScrollerHome>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      <TaskHomeBox></TaskHomeBox>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F6ED',
    alignItems: 'center',
    minHeight: '100%'
  },
  box_title: {
    flexDirection: 'row',
    marginTop: 0,
    height: 100,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#94EAF3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowColor: 'black',
  },
  button_title: {
    color: 'black',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
