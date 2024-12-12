// CustomCheckBox.js
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const HeaderHome  = () => {
  return (
    <View style = {styles.box_title}>
        <View>
        <Text style = {{
            marginTop: 10,
            marginLeft: 18,
            fontSize: 15,
            color: '#565656'
        }}>Bienvenido</Text>
        <Text style = {{
            fontSize: 22,
            marginLeft: 18,
            color: 'black',
            fontWeight: 900
        }}>Usuarios</Text>
        </View>
        <View style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            marginRight: 20,
            gap: 10,
            marginLeft: 'auto'
            }}>
            <TouchableHighlight
            style = {styles.button_title}
            onPress = {() => alert('prueba1')}
            >
            <FontAwesome6 name="calendar" size={20} color="black" style = {{
                textAlign: 'center',
            }}/>
            </TouchableHighlight>
            <TouchableHighlight
            style = {styles.button_title}
            onPress = {() => alert('prueba2')}
            >
            <FontAwesome6 name="gear" size={20} color="black" style = {{
                textAlign: 'center',
            }}/>
            </TouchableHighlight>
            <TouchableHighlight
            style = {styles.button_title}
            onPress = {() => alert('prueba3')}
            >
            <FontAwesome6 name="bell" size={20} color="black" style = {{
                textAlign: 'center',
            }}/>
            </TouchableHighlight>
            <TouchableHighlight
            style = {{
                backgroundColor: 'grey',
                width: 50,
                height: 50,
                borderRadius: 25
            }}
            onPress = {() => alert('holi')}
            >
            <View>
            </View>
            </TouchableHighlight>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
        borderRadius: 15,
        justifyContent: 'center',
        padding: 5
    },
});

export default HeaderHome;