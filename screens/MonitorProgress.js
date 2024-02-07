import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const MonitorProgress = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.monitorProgress}>
      <View style={styles.image1} />
      <View style={[styles.monitorProgressChild, styles.monitorShadowBox1]} />
      <View style={[styles.monitorProgressItem, styles.monitorShadowBox1]} />
      <View style={[styles.monitorProgressInner, styles.monitorShadowBox]} />
      <View style={[styles.rectangleView, styles.monitorShadowBox1]} />
      <Text style={styles.event3}>Event 3</Text>
      <Text style={[styles.event4, styles.eventTypo1]}>Event 4</Text>
      <Text style={[styles.event5, styles.eventTypo]}>Event 5</Text>
      <View style={[styles.monitorProgressChild1, styles.monitorShadowBox]} />
      <Text style={[styles.event2, styles.eventTypo1]}>Event 2</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('EventProgress')}}>
        <Text style={[styles.event1, styles.eventTypo]}>Event 1</Text>
      </TouchableOpacity>
      
      <View
        style={[styles.monitorProgressChild2, styles.maleUserIconPosition]}
      />
      <Text style={[styles.eventOrganizer, styles.gateWaysTypo]}>
        Event Organizer
      </Text>
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
      <Text style={[styles.monitorProgress1, styles.monitorPosition]}>
        Monitor Progress
      </Text>
      <View style={[styles.monitorProgressChild3, styles.monitorPosition]} />
      <Text style={[styles.gateWays, styles.gateWaysTypo]}>Gate Ways</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  monitorShadowBox1: {
    height: 100,
    width: 114,
    left: 50,
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
  monitorShadowBox: {
    left: 241,
    height: 100,
    width: 114,
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
  eventTypo1: {
    left: 268,
    height: 18,
    width: 87,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  eventTypo: {
    left: 77,
    height: 18,
    width: 87,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  maleUserIconPosition: {
    top: 11,
    position: "absolute",
  },
  gateWaysTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  monitorPosition: {
    width:'100%',
    position: "absolute",
  },
  image1: {
    top: 124,
    left: -76,
    width: 393,
    position: "absolute",
    height: 852,
  },
  monitorProgressChild: {
    top: 238,
  },
  monitorProgressItem: {
    top: 550,
  },
  monitorProgressInner: {
    top: 397,
  },
  rectangleView: {
    top: 397,
  },
  event3: {
    top: 441,
    left: 74,
    height: 18,
    width: 87,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  event4: {
    top: 435,
  },
  event5: {
    top: 588,
  },
  monitorProgressChild1: {
    top: 238,
  },
  event2: {
    top: 273,
  },
  event1: {
    top: 276,
  },
  monitorProgressChild2: {
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
    top: 11,
  },
  eventOrganizer: {
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
  monitorProgress1: {
    top: 176,
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
  monitorProgressChild3: {
    top: 75,
    backgroundColor: "#a4c4d2",
    height: 57,
  },
  gateWays: {
    top: 88,
    left: 140,
    width: 120,
    height: 47,
  },
  monitorProgress: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default MonitorProgress;
