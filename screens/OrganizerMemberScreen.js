import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import {useNavigation } from "@react-navigation/native"
import MemberTaskContainer from "../components/MemberTaskContainer";
import MemberEventOptions from "../components/MemberEventOptions";

function OrganizerMemberScreen() {
    const navigation = useNavigation();
    return (
        
      <View style={styles.eventOrganizerDashboad}>
        <View style={styles.eventOrganizerDashboadChild} />
        <Text style={[styles.eventOrganizer, styles.wannaCreateATypo]}>
         Team Member
        </Text>
        <Image
          style={[styles.menuIcon, styles.menuIconPosition]}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
        <Image
          style={styles.maleUserIcon}
          resizeMode="cover"
          source={require("../assets/Male User.png")}
        />
        <View
          style={[styles.eventOrganizerDashboadItem, styles.eventShadowBox]}
        />
        <Text style={[styles.gateWays, styles.gateWaysTypo]}>Gate Ways</Text>
        <Text style={[styles.startDate20012024, styles.startTypo]}>
          Start Date: 20-01-2024
        </Text>
        <Image
          style={[styles.calendarIcon, styles.calendarIconLayout]}
          resizeMode="cover"
          source={require("../assets/cal.png")}
        />
        <TouchableOpacity onPress={()=>{navigation.navigate("MemberFestscreen")}}>
        <Image
          style={[styles.openedFolderIcon, styles.openedIconLayout]}
          resizeMode="cover"
          source={require("../assets/Opened Folder.png")}
          
        />
        </TouchableOpacity>
        
        <View
          style={[styles.eventOrganizerDashboadInner, styles.eventShadowBox]}
        />
        <Text style={[styles.interfaces, styles.gateWaysTypo]}>Interfaces</Text>
        <Text style={[styles.startDate10032024, styles.startTypo]}>
          Start Date: 10-03-2024
        </Text>
        <Image
          style={[styles.calendarIcon1, styles.calendarIconLayout]}
          resizeMode="cover"
          source={require("../assets/cal.png")}
        />
        <Image
          style={[styles.openedFolderIcon1, styles.openedIconLayout]}
          resizeMode="cover"
          source={require("../assets/Opened Folder.png")}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wannaCreateATypo: {
      textAlign: "left",
      fontFamily: FontFamily.itimRegular,
    },
    menuIconPosition: {
      left: 28,
      position: "absolute",
    },
    eventShadowBox: {
      height: 182,
      width: 325,
      left: 28,
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
      backgroundColor: Color.colorSkyblue,
      borderRadius: Border.br_6xl,
      position: "absolute",
    },
    gateWaysTypo: {
      height: 47,
      width: 120,
      left: 70,
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.itimRegular,
      fontSize: FontSize.size_5xl,
      position: "absolute",
    },
    startTypo: {
      height: 28,
      width: 146,
      fontSize: FontSize.size_sm,
      left: 71,
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.itimRegular,
      position: "absolute",
    },
    calendarIconLayout: {
      height: 130,
      width: 87,
      left: 231,
      position: "absolute",
    },
    openedIconLayout: {
      height: 34,
      width: 33,
      left: 297,
      position: "absolute",
    },
    eventOrganizerDashboadChild: {
      left: 10,
      width: 373,
      height: 48,
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
      backgroundColor: Color.colorSkyblue,
      borderRadius: Border.br_6xl,
      top: 12,
      position: "absolute",
    },
    eventOrganizer: {
      top: 22,
      left: 114,
      color: Color.colorBlack,
      fontSize: FontSize.size_5xl,
      textAlign: "left",
      fontFamily: FontFamily.itimRegular,
      position: "absolute",
    },
    menuIcon: {
      top: 24,
      width: 27,
      height: 25,
    },
    maleUserIcon: {
      left: 330,
      width: 47,
      height: 50,
      top: 12,
      position: "absolute",
    },
    eventOrganizerDashboadItem: {
      top: 107,
    },
    gateWays: {
      top: 167,
    },
    startDate20012024: {
      top: 211,
    },
    calendarIcon: {
      top: 135,
    },
    openedFolderIcon: {
      top: 248,
    },
    eventOrganizerDashboadInner: {
      top: 316,
    },
    interfaces: {
      top: 376,
    },
    startDate10032024: {
      top: 420,
    },
    calendarIcon1: {
      top: 344,
    },
    openedFolderIcon1: {
      top: 457,
    },
    wannaCreateA: {
      top: 567,
      fontSize: 20,
      color: "#676666",
      textAlign: "left",
      fontFamily: FontFamily.itimRegular,
      left: 28,
    },
    eventOrganizerDashboad: {
      backgroundColor: "#defafe",
      flex: 1,
      width: "100%",
      height: 852,
      overflow: "hidden",
    },
  });

export default OrganizerMemberScreen



