import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AtendeePage = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.atendeePage}>
      <View style={styles.image1} />
      <View
        style={[
          styles.eventOrganizerDashboadChild2,
          styles.rectangleViewBorder,
        ]}
      />
      <Text style={[styles.atendee, styles.atendeeTypo]}>Attendee</Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate("AtendeeEventList")}}>
        <View style={[styles.atendeePageItem, styles.atendeeShadowBox]} >
      <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      </View>
      </TouchableOpacity>
      
      <View style={[styles.atendeePageInner, styles.rectangleViewShadowBox]} >
         <Text style={[styles.downloadCertificate, styles.eventsTypo1]}>
        Download Certificate
      </Text>
      </View>
     
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} >
        <Text style={[styles.downloadIdCard, styles.atendeeTypo]}>
        Download ID Card
      </Text>
      </View>
      
      <View style={styles.atendeePageChild1} >
        <Text style={[styles.feedback, styles.atendeeTypo]}>Feedback</Text>
        <Image
        style={styles.qrCodeIcon}
        contentFit="cover"
        source={require("../assets/Qr Code.png")}
      />
      </View>
      
      <TouchableOpacity onPress={()=>{navigation.navigate("AttendeeVenueList")}}>
        <View style={[styles.atendeePageChild2, styles.atendeeShadowBox]} />
      <Text style={[styles.venueTracking, styles.atendeeTypo]}>
        Venue Tracking
      </Text>
      </TouchableOpacity>
      
      
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  atendeeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  eventOrganizerDashboadChild2: {
    left: 20,
    width: 373,
    height: 48,
    top: 23,
  },
  rectangleViewBorder: {
    backgroundColor: Color.colorSkyblue_100,
    borderRadius: Border.br_6xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  atendeeShadowBox: {
    height: 100,
    width: 114,
    top: 311,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSkyblue_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 63,
    width: 290,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  eventsTypo: {
    left: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  eventsTypo1: {
    left: 30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  image1: {
    top: 0,
    left: 0,
    width: 393,
    position: "absolute",
    height: 852,
  },
  atendeePageChild: {
    left: 10,
    width: 373,
    height: 48,
    borderRadius: Border.br_6xl,
    top: 22,
    position: "absolute",
  },
  atendee: {
    top: 28,
    left: 88,
    width: 102,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  menuIcon: {
    top: 32,
    left: 35,
    width: 27,
    height: 25,
    position: "absolute",
  },
  atendeePageItem: {
    left: 57,
  },
  atendeePageInner: {
    top: 476,
    backgroundColor: "#7ad8e5",
    left: 57,
  },
  downloadCertificate: {
    top: 14,
    left:10,
    width: 313,
    height: 53,
  },
  rectangleView: {
    top: 190,
    left: 60,
    backgroundColor: Color.colorSkyblue_100,
    width: 290,
  },
  downloadIdCard: {
    top: 14,
    left: 40,
    width: 214,
    height: 29,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  atendeePageChild1: {
    top: 600,
    left: 58,
    width: 281,
    height: 70,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSkyblue_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  feedback: {
    top: 8,
    left: 22,
    fontSize: 36,
  },
  atendeePageChild2: {
    left: 236,
  },
  venueTracking: {
    top: 332,
    left: 249,
    width: 131,
    height: 70,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  events: {
    top: 35,
    width: 98,
  },
  maleUserIcon: {
    left: 340,
    width: 47,
    height: 50,
    top: 22,
    position: "absolute",
  },
  qrCodeIcon: {
    top: 5,
    left: 200,
    width: 69,
    height: 58,
    position: "absolute",
  },
  atendeePage: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default AtendeePage;
