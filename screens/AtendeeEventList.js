import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AtendeeEventList = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.venueTrackingevntOrganizer}>
      <View
        style={[
          styles.venueTrackingevntOrganizerChild,
          styles.maleUserIconPosition,
        ]}
      />
      <Text style={[styles.attendee, styles.attendeeTypo]}>Attendee</Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={[styles.maleUserIcon, styles.maleUserIconPosition]}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <Text style={[styles.events, styles.imagePosition]}>Events</Text>
      <View style={[styles.image2, styles.imagePosition]} />
      <View
        style={[styles.venueTrackingevntOrganizerItem, styles.venueChildLayout]}
      />
      <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
      <Text style={[styles.date, styles.dateTypo1]}>Date</Text>
      <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
      <Text style={[styles.time, styles.dateTypo1]}>Time</Text>
      <View style={[styles.image2, styles.imagePosition]} />
      <View
        style={[styles.venueTrackingevntOrganizerItem, styles.venueChildLayout]}
      />
      <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
      <Text style={[styles.date, styles.dateTypo1]}>Date</Text>
      <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
      <Text style={[styles.time, styles.dateTypo1]}>Time</Text>
      <View style={[styles.image2, styles.imagePosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
    
      <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
      <View style={[styles.image5, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild1,
          styles.venueChildPosition2,
        ]}
      />
      <Text style={[styles.event13, styles.venue2Typo]}>Event 1</Text>
      <Text style={[styles.date2, styles.dateTypo1]}>Date</Text>
      <Text style={[styles.venue2, styles.venue2Typo]}>Venue</Text>
      <Text style={[styles.time2, styles.dateTypo1]}>Time</Text>
      <View style={[styles.image5, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild1,
          styles.venueChildPosition2,
        ]}
      />
      <Text style={[styles.event13, styles.venue2Typo]}>Event 1</Text>
      <Text style={[styles.date2, styles.dateTypo1]}>Date</Text>
      <Text style={[styles.venue2, styles.venue2Typo]}>Venue</Text>
      <Text style={[styles.time2, styles.dateTypo1]}>Time</Text>
      <View style={[styles.image5, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild3,
          styles.venueChildPosition2,
        ]}
      />
      <Text style={[styles.event13, styles.venue2Typo]}>Event 2</Text>
      <View style={[styles.image5, styles.imagePosition]} />
      <View style={[styles.image5, styles.imagePosition]} />
      <View style={[styles.image5, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild4,
          styles.venueChildPosition1,
        ]}
      />
      <Text style={[styles.event15, styles.venue4Typo]}>Event 1</Text>
      <Text style={[styles.date4, styles.date4Typo]}>Date</Text>
      <Text style={[styles.venue4, styles.venue4Typo]}>Venue</Text>
      <Text style={[styles.time4, styles.date4Typo]}>Time</Text>
      <View style={[styles.image11, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild4,
          styles.venueChildPosition1,
        ]}
      />
      <Text style={[styles.event15, styles.venue4Typo]}>Event 1</Text>
      <Text style={[styles.date4, styles.date4Typo]}>Date</Text>
      <Text style={[styles.venue4, styles.venue4Typo]}>Venue</Text>
      <Text style={[styles.time4, styles.date4Typo]}>Time</Text>
      <View style={[styles.image11, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild6,
          styles.venueChildPosition1,
        ]}
      />
      <Text style={[styles.event15, styles.venue4Typo]}>Event 3</Text>
      <View style={[styles.image5, styles.imagePosition]} />
      <View style={[styles.image5, styles.imagePosition]} />
      <View style={[styles.image5, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View style={[styles.image11, styles.imagePosition]} />
      <View style={[styles.image23, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild7,
          styles.venueChildPosition,
        ]}
      />
      <Text style={[styles.event17, styles.venue6Typo]}>Event 1</Text>
      <Text style={[styles.date6, styles.date6Typo]}>Date</Text>
      <Text style={[styles.venue6, styles.venue6Typo]}>Venue</Text>
      <Text style={[styles.time6, styles.date6Typo]}>Time</Text>
      <View style={[styles.image23, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild7,
          styles.venueChildPosition,
        ]}
      />
      <Text style={[styles.event17, styles.venue6Typo]}>Event 1</Text>
      <Text style={[styles.date6, styles.date6Typo]}>Date</Text>
      <Text style={[styles.venue6, styles.venue6Typo]}>Venue</Text>
      <Text style={[styles.time6, styles.date6Typo]}>Time</Text>
      <View style={[styles.image23, styles.imagePosition]} />
      <View
        style={[
          styles.venueTrackingevntOrganizerChild9,
          styles.venueChildPosition,
        ]}
      />
      <Text style={[styles.event17, styles.venue6Typo]}>Event 4</Text>
      <Text style={[styles.eventDetailsAnd, styles.eventTypo]}>
        Event Details and Description
      </Text>
      <View
        style={[styles.venueTrackingevntOrganizerChild10, styles.imagePosition]}
      />
      <Text style={[styles.gateWays, styles.attendeeTypo]}>Gate Ways</Text>
      <Text style={[styles.dateOfThe, styles.dateTypo]}>Date of the event</Text>
      <Text style={[styles.eventDetailsAnd1, styles.eventTypo]}>
        Event Details and Description
      </Text>
      <Text style={[styles.dateOfThe1, styles.dateTypo]}>
        Date of the event
      </Text>
      <Text style={[styles.eventDetailsAnd2, styles.eventTypo]}>
        Event Details and Description
      </Text>
      <Text style={[styles.dateOfThe2, styles.dateTypo]}>
        Date of the event
      </Text>
      <Text style={[styles.eventDetailsAnd3, styles.eventTypo]}>
        Event Details and Description
      </Text>
      <Text style={[styles.dateOfThe3, styles.dateTypo]}>
        Date of the event
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("AttendeeAboutEvent")}}>
      <Image
        style={[styles.nextPageIcon, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/ARROW.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("AttendeeAboutEvent")}}>
        <Image
        style={[styles.nextPageIcon1, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/ARROW.png")}
      />
      </TouchableOpacity>
      
      <Image
        style={[styles.nextPageIcon2, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/ARROW.png")}
      />
      <Image
        style={[styles.nextPageIcon3, styles.nextIconPosition]}
        contentFit="cover"
        source={require("../assets/ARROW.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maleUserIconPosition: {
    top: 11,
    position: "absolute",
  },
  attendeeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  imagePosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  venueChildLayout: {
    height: 67,
    width: 262,
  },
  venueTypo: {
    top: 239,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  dateTypo1: {
    height: 17,
    width: 110,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  rectangleViewPosition: {
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xs,
    left: 51,
    top: 234,
    position: "absolute",
  },
  dropIconLayout: {
    height: 14,
    width: 30,
    position: "absolute",
  },
  dropIconPosition: {
    left: 152,
    height: 14,
    width: 30,
    position: "absolute",
  },
  venueChildPosition2: {
    top: 342,
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xs,
    left: 51,
    position: "absolute",
  },
  venue2Typo: {
    top: 347,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  venueChildPosition1: {
    top: 450,
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xs,
    left: 51,
    position: "absolute",
  },
  venue4Typo: {
    top: 455,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  date4Typo: {
    top: 491,
    height: 17,
    width: 110,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  venueChildPosition: {
    top: 558,
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xs,
    left: 51,
    position: "absolute",
  },
  venue6Typo: {
    top: 563,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  date6Typo: {
    top: 599,
    height: 17,
    width: 110,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  eventTypo: {
    height: 16,
    width: 184,
    left: 62,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  dateTypo: {
    width: 111,
    height: 16,
    left: 62,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  nextIconLayout: {
    height: 60,
    width: 55,
    left: 258,
    position: "absolute",
  },
  nextIconPosition: {
    left: 260,
    height: 60,
    width: 55,
    position: "absolute",
  },
  venueTrackingevntOrganizerChild: {
    left: 10,
    borderRadius: 25,
    backgroundColor: "#7bceda",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 373,
    height: 48,
  },
  attendee: {
    top: 21,
    left: 114,
  },
  menuIcon: {
    top: 23,
    left: 28,
    width: 27,
    height: 25,
    position: "absolute",
  },
  maleUserIcon: {
    left: 330,
    width: 47,
    height: 50,
  },
  events: {
    fontSize: 32,
    letterSpacing: 0.3,
    fontFamily: FontFamily.jejuHallasan,
    color: "#2366ca",
    textAlign: "center",
    height: 58,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: 165,
    width: 393,
    left: 0,
  },
  image2: {
    top: 57,
    height: 852,
  },
  venueTrackingevntOrganizerItem: {
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xs,
    left: 51,
    top: 234,
    position: "absolute",
  },
  event1: {
    left: 69,
  },
  date: {
    left: 72,
    top: 275,
    height: 17,
    width: 110,
    fontSize: FontSize.size_sm,
  },
  venue: {
    left: 213,
  },
  time: {
    left: 216,
    top: 275,
    height: 17,
    width: 110,
    fontSize: FontSize.size_sm,
  },
  rectangleView: {
    height: 94,
    width: 279,
  },
  dropDownIcon: {
    top: 377,
    left: 150,
  },
  dropDownIcon1: {
    top: 384,
  },
  dropDownIcon2: {
    top: 379,
  },
  dropDownIcon3: {
    top: 374,
    left: 157,
  },
  image5: {
    top: 165,
    width: 393,
    left: 0,
    height: 852,
  },
  venueTrackingevntOrganizerChild1: {
    height: 67,
    width: 262,
  },
  event13: {
    left: 69,
  },
  date2: {
    top: 383,
    left: 72,
  },
  venue2: {
    left: 213,
  },
  time2: {
    top: 383,
    left: 216,
  },
  venueTrackingevntOrganizerChild3: {
    height: 96,
    width: 279,
  },
  image11: {
    top: 273,
    height: 852,
  },
  venueTrackingevntOrganizerChild4: {
    height: 67,
    width: 262,
  },
  event15: {
    left: 69,
  },
  date4: {
    left: 72,
  },
  venue4: {
    left: 213,
  },
  time4: {
    left: 216,
  },
  venueTrackingevntOrganizerChild6: {
    height: 97,
    width: 279,
  },
  image23: {
    top: 381,
    height: 852,
  },
  venueTrackingevntOrganizerChild7: {
    height: 67,
    width: 262,
  },
  event17: {
    left: 69,
  },
  date6: {
    left: 72,
  },
  venue6: {
    left: 213,
  },
  time6: {
    left: 216,
  },
  venueTrackingevntOrganizerChild9: {
    height: 92,
    width: 279,
  },
  eventDetailsAnd: {
    top: 594,
  },
  venueTrackingevntOrganizerChild10: {
    top: 77,
    backgroundColor: "#a4c4d2",
    height: 57,
  },
  gateWays: {
    top: 90,
    left: 140,
    width: 120,
    height: 47,
  },
  dateOfThe: {
    top: 616,
  },
  eventDetailsAnd1: {
    top: 489,
  },
  dateOfThe1: {
    top: 511,
  },
  eventDetailsAnd2: {
    top: 383,
  },
  dateOfThe2: {
    top: 405,
  },
  eventDetailsAnd3: {
    top: 273,
  },
  dateOfThe3: {
    top: 295,
  },
  nextPageIcon: {
    top: 248,
  },
  nextPageIcon1: {
    top: 359,
  },
  nextPageIcon2: {
    top: 463,
  },
  nextPageIcon3: {
    top: 577,
  },
  venueTrackingevntOrganizer: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default AtendeeEventList;
