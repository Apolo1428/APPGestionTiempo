// CustomCheckBox.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DateDayHome from './DateDayHome'

const DateScrollerHome = () => {
  return (
    <View style = {styles.scroll_container}>
        <ScrollView
            horizontal = {true}
            contentContainerStyle = {styles.scroll}
        >
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            <DateDayHome text = 'DO' number = '12'></DateDayHome>
            

        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        
        minHeight: 90,
        gap: 10,
        height: 70
    },
    scroll_container: {
        width: 355,
        height: 90,
    }
});

export default DateScrollerHome;