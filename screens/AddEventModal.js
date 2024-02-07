import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Color } from '../GlobalStyles';

const AddEventModal = () => {
  return (
    <View style={styles.attendeeRegister}>
      <View style={styles.attendeeRegisterChild} />
      <View style={styles.rectangleDiv} />
      <View style={styles.uid1_1} />
      <Text style={styles.campusEventPro}>CampusEventPro</Text>
      <View style={styles.attendeeRegisterChild1} >
<View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" />
     
      <View style={styles.attendeeRegisterChild4}>
        <TextInput style={styles.input} placeholder="Start Date" />
      </View>
      <View style={styles.attendeeRegisterChild5}>
        <TextInput style={styles.input} placeholder="Location" />
      </View>
      <View style={styles.attendeeRegisterChild6}>
        <TextInput style={styles.input} placeholder=" Description" />
      </View>
      </View>
      <Text style={styles.registerbtn}>Add Event</Text>

        </View>
      
      
      <Text style={styles.register}>Add Event</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  attendeeRegisterChild: {
    position: 'absolute',
    top: 98,
    left: 34,
    borderRadius: 6,
    backgroundColor: '#e0f7fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    width: 325,
    height: 315,
    display: 'none',
  },
  inputContainer: {
    position: 'absolute',
    top: 97,
    left: 17,
    width: 320,
    height: 31,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    backgroundColor: '#e0f7fa',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
 
  campusEventPro: {
    position: 'absolute',
    top: 57,
    left:55,
    fontSize: 40,
    letterSpacing: 0.01,
    fontFamily: 'System',
    color: '#2366ca',
    textAlign: 'center',
    display: 'flex',
    height: 58,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 0,
  },
  attendeeRegisterChild1: {
    position: 'absolute',
    top: 184,
    left: 29,
    borderRadius: 6,
    backgroundColor: '#7bceda',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    width: 355,
    height: 392,
  },
  register: {
    position: 'absolute',
    top: 210,
    left: 142,
    fontSize: 30,
  },
  attendeeRegisterChild4: {
    position: 'absolute',
    top: 56,
    borderRadius: 6,
    backgroundColor: '#e0f7fa',
    borderWidth: 1,
    borderColor: '#000',
    width: 319,
    height: 30,
  },
  attendeeRegisterChild5: {
    position: 'absolute',
    top: 114,
    borderRadius: 6,
    backgroundColor: '#e0f7fa',
    borderWidth: 1,
    borderColor: '#000',
    width: 319,
    height: 30,
  },
  attendeeRegisterChild6: {
    position: 'absolute',
    top: 172,
    borderRadius: 6,
    backgroundColor: '#e0f7fa',
    borderWidth: 1,
    borderColor: '#000',
    width: 319,
    height: 30,
  },
  attendeeRegister: {
    width: '100%',
    position: 'relative',
    backgroundColor: '#e0f7fa',
    height: 852,
    overflow: 'hidden',
    textAlign: 'left',
    fontSize: 14,
    color: '#000',
    fontFamily: 'System',
  },
  registerbtn:{
    position: 'absolute',
    top: 330,
    paddingLeft:30,
    paddingTop:5,
    left: 120,
    borderRadius: 6,
    backgroundColor:  Color.colorSblue,
    borderWidth: 1,
    borderColor: '#000',
    width: 119,
    height: 30,
  }
});

export default AddEventModal;
