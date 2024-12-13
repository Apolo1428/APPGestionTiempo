// CustomCheckBox.js
import {useState, React, useRef } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DateDayHome from './DateDayHome'

const daysOfWeek = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'];
const DateScrollerHome = () => {

    const [currentWeek, setCurrentWeek] = useState(0); // Estado para la semana actual
    const scrollViewRef = useRef(null);
    const weekWidth = 355; // Ancho fijo de cada "Week"



    const handleScrollBegin = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x; // Posición actual del scroll
        const index = Math.round(offsetX / weekWidth); // Índice del elemento más cercano
        const newOffset = index * weekWidth + index *20 ; // Nueva posición al que se debe alinear

        scrollViewRef.current?.scrollTo({ x: newOffset, animated: true }); // Centrar en el elemento
        setCurrentWeek(index); // Actualizar el índice de la semana actual
        updateDates();
        scrollViewRef.current?.scrollTo({ x: 2 * weekWidth + 40, animated: false });
        
    };

    const updateDates = () => {
        const days = [];
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + (currentWeek * 7)); // Cambia la fecha según la semana actual

        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push({
                key: `${i}`,
                text: daysOfWeek[i],
                number: date.getDate().toString(),
            });
        }
        return days;
    };
    const Week = (props) => {
        const days = [];
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + props.date*7);
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push({
                key: `${i}`,
                text: daysOfWeek[i],
                number: date.getDate().toString(),
            });
        }
        return (
            <View style = {styles.week}>
                <DateDayHome text = {days[0].text} number = {days[0].number}></DateDayHome>
                <DateDayHome text = {days[1].text} number = {days[1].number}></DateDayHome>
                <DateDayHome text = {days[2].text} number = {days[2].number}></DateDayHome>
                <DateDayHome text = {days[3].text} number = {days[3].number}></DateDayHome>
                <DateDayHome text = {days[4].text} number = {days[4].number}></DateDayHome>
                <DateDayHome text = {days[5].text} number = {days[5].number}></DateDayHome>
                <DateDayHome text = {days[6].text} number = {days[6].number}></DateDayHome>
            </View>
        )
    }

    return (
        <View style = {styles.scroll_container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal = {true}
                alwaysBounceHorizontal = {true}
                decelerationRate = 'fast'
                contentContainerStyle = {styles.scroll}
                showsHorizontalScrollIndicator = {false}
                onMomentumScrollEnd={handleScrollBegin}
                contentOffset={{x: 2 * weekWidth + 40, y: 0 }}
            >
                <Week date = {-2}></Week>
                <Week date = {-1}></Week>
                <Week date = {0}></Week>
                <Week date = {1}></Week>
                <Week date = {2}></Week>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor:'red',
        minHeight: 90,
        height: 70,
        gap: 20,
        paddingHorizontal: 10,
    },
    scroll_container: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        width: 375,
        minHeight: 100
    },
    week: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 355,
        justifyContent: 'center',
    }
});

export default DateScrollerHome;