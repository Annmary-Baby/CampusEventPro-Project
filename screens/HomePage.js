import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from '../components/Carousel';
import EventCard from '../components/EventCard';
import AttendeeRegister from './AttendeeRegister';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../GlobalStyles';
import { Picker } from '@react-native-picker/picker';

const HomePage = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Attendee Login');

  const handleDropdownChange = (itemValue) => {
    setSelectedOption(itemValue);
    
    // Add logic for handling other options as needed
  };

  const handleLoginPress = () => {
    // Perform navigation based on the selected option
    if (selectedOption === 'Attendee Login') {
      navigation.navigate('AttendeeLogin');
    } else if (selectedOption === 'Team Member Login') {
      navigation.navigate('TeamMemberLogin');
    } else if (selectedOption === 'Organizer Login') {
      navigation.navigate('OrganizerLogin');
    }
  };

  return (
    <>
      <View style={styles.homebody}>
        <Text style={styles.campusEventPro}>CampusEventPro</Text>
        <Carousel />
        <EventCard />

        {/* Dropdown Button */}
        <Picker
          selectedValue={selectedOption}
          style={styles.dropdownButton}
          onValueChange={(itemValue) => handleDropdownChange(itemValue)}
        >
          <Picker.Item label="Attendee Login" value="Attendee Login" />
          <Picker.Item label="Team Member Login" value="Team Member Login" />
          <Picker.Item label="Organizer Login" value="Organizer Login" />
          {/* Add other options as needed */}
        </Picker>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.7}
        onPress={handleLoginPress}>
          <Text style={styles.login}>{selectedOption}</Text>
        </TouchableOpacity>

        {/* Attendee Register Button */}
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('AttendeeRegister');
          }}
        >
          <Text style={styles.login}>Attendee Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    position: 'relative',
  },
  dropdownButton: {
    width: '100%',
    height: 48,
    marginVertical: 10,
    backgroundColor: Color.colorSblue,
    borderRadius: 30,
    fontSize: 24,
    color: '#000',
    fontFamily: 'Itim',
    textAlign: 'center',
  },
  button2: {
    top:25,
    width: '100%',
    height: 48,
    position: 'relative',
  },
  login: {
    backgroundColor:Color.colorSkyblue,
    borderRadius:30,
    padding:15,
    position: 'absolute',
    top: 10,
    left: 5,
    display: 'flex',
    width: 402,
    fontSize: 24,
    color: '#000',
    fontFamily: 'Itim',
    textAlign:"center"
  },

  homebody:{
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
 
  campusEventPro: {

    textAlign:'center',
    margin:10,
    fontSize: 40,
    fontFamily: 'JejuHallasan',
    color: '#895eb4',
    // ... other styles for campusEventPro
  },
});


export default HomePage;
// source={require("../assets/cal.png")}