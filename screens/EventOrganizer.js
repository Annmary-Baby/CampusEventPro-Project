import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const EventOrganizer = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.eventOrganizerDashboad}>
      <View style={[styles.eventOrganizerDashboadChild, styles.image1Layout]} />
      <View style={styles.eventOrganizerDashboadItem} />
      <View style={[styles.image1, styles.image1Layout]} />
      <View style={[styles.image1, styles.image1Layout]} />
      <View style={[styles.eventOrganizerDashboadInner, styles.eventLayout]} />
      <Text style={[styles.addEvent, styles.addTypo]}>Add Event</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('AddEventModal')}}>
      <Image
        style={[styles.addNewIcon, styles.addIconLayout]}
        contentFit="cover"
        source={require("../assets/PLUS.png")}
      />
      </TouchableOpacity>
      
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={styles.eventProgress}>Event Progress</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('VenueTracking')}}>
         <View style={styles.eventOrganizerDashboadChild1} />
      <Text style={[styles.venueTracker, styles.addTaskTypo]}>
        Venue Tracker
      </Text>
      </TouchableOpacity>
     
      <Text style={[styles.eventName, styles.eventTypo]}>Event Name</Text>
      <Text style={[styles.currentEventLifecycle, styles.addTypo]}>
        Current Event LifeCycle
      </Text>
      <Text style={[styles.lastUpdatedat, styles.textTypo]}>
        Last UpdatedAt : 24/01/2024
      </Text>
      <Text style={[styles.text, styles.textTypo]}>60%</Text>
      <View
        style={[
          styles.eventOrganizerDashboadChild2,
          styles.rectangleViewBorder,
        ]}
      />
      <Text style={[styles.eventOrganizer, styles.eventTypo]}>
        Event Organizer
      </Text>
      <Image
        style={[styles.menuIcon, styles.menuIconLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('AddTaskModal')}}>
      <View
        style={[styles.eventOrganizerDashboadChild3, styles.eventChildLayout]}
      />
      <Text style={[styles.addTask, styles.addTaskTypo]}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('MonitorProgress')}}>
      <View
        style={[styles.eventOrganizerDashboadChild4, styles.eventChildLayout]}
      />
      <Text style={[styles.monitorProgress, styles.addTaskTypo]}>
        Monitor Progress
      </Text>
      </TouchableOpacity>
      
      <Image
        style={styles.fileAndFolder}
        contentFit="cover"
        source={require("../assets/FILE MAN.png")}
      />
      <View style={styles.lineView} />
      {/* <Image
        style={styles.progressBarIcon}
        contentFit="cover"
        source={require("../assets/progress-bar.png")}
      /> */}
      <View style={[styles.eventOrganizerDashboadChild5, styles.eventLayout]} />
      <Text style={[styles.addTeamMember, styles.addTypo]}>
        Add Team Member
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('AddTeamMember')}}>
      <Image
        style={[styles.addNewIcon1, styles.addIconLayout]}
        contentFit="cover"
        source={require("../assets/PLUS.png")}
      />
      </TouchableOpacity>
     
      <Image
        style={[styles.maleUserIcon, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={[styles.image1, styles.image1Layout]} />
      <View style={[styles.image1, styles.image1Layout]} />
      <View
        style={[
          styles.eventOrganizerDashboadChild2,
          styles.rectangleViewBorder,
        ]}
      />
      <Text style={[styles.eventOrganizer, styles.eventTypo]}>
        Event Organizer
      </Text>
      <Image
        style={[styles.menuIcon1, styles.menuIconLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={[styles.maleUserIcon1, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <Text style={[styles.gateWays, styles.eventTypo]}>Gate Ways</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Layout: {
    width: '100%',
    position: "absolute",
  },
  eventLayout: {
    height: 40,
    width: 210,
    left: 152,
    backgroundColor: Color.colorSkyblue_100,
    borderRadius: Border.br_6xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  addTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  addIconLayout: {
    height: 29,
    width: 35,
    left: 320,
    position: "absolute",
  },
  rectangleViewBorder: {
    backgroundColor: Color.colorSkyblue_100,
    borderRadius: Border.br_6xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  addTaskTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  eventTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
    width:'100%',
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  menuIconLayout: {
    height: 25,
    width: 27,
    position: "absolute",
  },
  eventChildLayout: {
    width: 285,
    left: 49,
    height: 32,
    backgroundColor: Color.colorAzure,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  maleIconLayout: {
    height: 50,
    width: 47,
    left: 330,
    position: "absolute",
  },
  eventOrganizerDashboadChild: {
    top: 76,
    left: 0,
    backgroundColor: "#a4c4d2",
    height: 57,
  },
  eventOrganizerDashboadItem: {
    top: 699,
    left: 39,
    backgroundColor: "#6ecddb",
    width: 301,
    height: 49,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image1: {
    top: -43,
    left: -11,
    height: 852,
  },
  eventOrganizerDashboadInner: {
    top: 154,
  },
  addEvent: {
    fontSize: FontSize.size_xl,
    left: 163,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    top: 159,
  },
  addNewIcon: {
    top: 159,
  },
  rectangleView: {
    top: 304,
    left: 34,
    width: 324,
    height: 312,
  },
  eventProgress: {
    top: 698,
    left: 48,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  eventOrganizerDashboadChild1: {
    top: 547,
    height: 32,
    width: 286,
    backgroundColor: Color.colorAzure,
    left: 48,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  venueTracker: {
    top: 555,
    left: 69,
  },
  eventName: {
    top: 331,
    left: 79,
  },
  currentEventLifecycle: {
    top: 360,
    left: 70,
    fontSize: 14,
  },
  lastUpdatedat: {
    top: 376,
    left: 69,
  },
  text: {
    top: 720,
    left: 302,
  },
  eventOrganizerDashboadChild2: {
    left: 10,
    width: 373,
    height: 48,
    top: 12,
  },
  eventOrganizer: {
    left: 114,
    top: 22,
  },
  menuIcon: {
    top: 24,
    left: 28,
  },
  eventOrganizerDashboadChild3: {
    top: 453,
  },
  addTask: {
    top: 458,
    left: 63,
  },
  eventOrganizerDashboadChild4: {
    top: 497,
  },
  monitorProgress: {
    top: 503,
    left: 69,
  },
  fileAndFolder: {
    top: 320,
    left: 237,
    width: 91,
    height: 71,
    position: "absolute",
  },
  lineView: {
    top: 606,
    borderTopWidth: 1,
    height: 1,
    left: 49,
    width: 286,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  progressBarIcon: {
    top: 731,
    left: 61,
    width: 241,
    height: 5,
    position: "absolute",
    overflow: "hidden",
  },
  eventOrganizerDashboadChild5: {
    top: 212,
  },
  addTeamMember: {
    top: 218,
    width: 222,
    fontSize: FontSize.size_xl,
    left: 163,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  addNewIcon1: {
    top: 217,
  },
  maleUserIcon: {
    top: 12,
  },
  menuIcon1: {
    left: 21,
    top: 22,
  },
  maleUserIcon1: {
    top: 11,
  },
  gateWays: {
    top: 89,
    left: 140,
    width: 120,
    height: 47,
  },
  eventOrganizerDashboad: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default EventOrganizer;
