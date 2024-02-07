import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AttendeeAboutEvent = () => {
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
      <Text style={[styles.eventDetails, styles.eventDetailsPosition]}>
        Event Details
      </Text>
      <View
        style={[
          styles.venueTrackingevntOrganizerItem,
          styles.rectangleViewPosition,
        ]}
      />
      <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
      <Text style={[styles.time, styles.dateTypo]}>Time</Text>
      <View
        style={[
          styles.venueTrackingevntOrganizerItem,
          styles.rectangleViewPosition,
        ]}
      />
      <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
      <Text style={[styles.time, styles.dateTypo]}>Time</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
      <View
        style={[
          styles.venueTrackingevntOrganizerChild1,
          styles.eventDetailsPosition,
        ]}
      />
      <Text style={[styles.gateWays, styles.attendeeTypo]}>Gate Ways</Text>
      <Text
        style={[styles.eventDetailsAnd, styles.dateOfTheTypo]}
      >{`Event Details and Description
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

`}</Text>
      <Text style={[styles.dateOfThe, styles.dateOfTheTypo]}>
        Date of the event
      </Text>
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
  eventDetailsPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  rectangleViewPosition: {
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xs,
    left: 51,
    top: 234,
    position: "absolute",
  },
  venueTypo: {
    top: 239,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  dateTypo: {
    height: 17,
    width: 110,
    top: 275,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  dateOfTheTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
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
  eventDetails: {
    top: 165,
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
  },
  venueTrackingevntOrganizerItem: {
    width: 262,
    height: 67,
  },
  event1: {
    left: 69,
  },
  date: {
    left: 72,
  },
  venue: {
    left: 213,
  },
  time: {
    left: 216,
  },
  rectangleView: {
    width: 279,
    height: 516,
  },
  venueTrackingevntOrganizerChild1: {
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
  eventDetailsAnd: {
    top: 308,
    left: 71,
    width: 230,
    height: 379,
  },
  dateOfThe: {
    top: 268,
    width: 111,
    height: 16,
    left: 69,
  },
  venueTrackingevntOrganizer: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AttendeeAboutEvent;
