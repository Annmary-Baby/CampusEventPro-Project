import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EventProgress = () => {
  return (
    <View style={styles.eventProgress}>
      <View style={[styles.image1, styles.eventLayout1]} />
      <View style={[styles.eventProgressChild, styles.eventShadowBox]} />
      <Text style={[styles.eventOrganizer, styles.tasksTypo]}>
        Event Organizer
      </Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <Text style={[styles.eventProgress1, styles.eventLayout1]}>
        Event Progress
      </Text>
      <View style={[styles.eventProgressInner1, styles.eventLayout]} />
      <View style={[styles.eventProgressInner, styles.eventLayout]} />
      <View style={[styles.rectangleView, styles.eventLayout]} />
      <Text style={[styles.finishedTasks, styles.tasksTypo]}>
        Finished Tasks:
      </Text>
      <Text style={[styles.unfinishedTasks, styles.tasksTypo]}>
        Unfinished Tasks:
      </Text>
      <Text style={[styles.teamMember, styles.tasksTypo]}>Team member</Text>
      <View style={[styles.eventProgressChild1, styles.eventLayout1]} />
      <Text style={[styles.gateWays, styles.tasksTypo]}>Gate Ways</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventLayout1: {
    width:'100%',
    position: "absolute",
  },
  eventShadowBox: {
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
  },
  tasksTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  eventLayout: {
    height: 117,
    width: 288,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  image1: {
    top: 111,
    left: -71,
    height: 852,
  },
  eventProgressChild: {
    left: 10,
    width: 373,
    height: 48,
    borderRadius: Border.br_6xl,
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
    top: 11,
    position: "absolute",
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
    top: 11,
    position: "absolute",
  },
  eventProgress1: {
    top: 163,
    left: 5,
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

  eventProgressInner1: {
    top: 266,
    left: 119,
    width: 288,
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
  },

  eventProgressInner: {
    top: 650,
    left: 119,
    width: 288,
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
  },

  rectangleView: {
    top: 458,
    left: -3,
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
  },
  finishedTasks: {
    top: 310,
    left: 180,
  },
  unfinishedTasks: {
    top: 501,
    left: 34,
  },
  teamMember: {
    top: 690,
    left: 208,
    width: 180,
    height: 38,
  },
  eventProgressChild1: {
    top: 76,
    left: 0,
    backgroundColor: "#a4c4d2",
    height: 57,
  },
  gateWays: {
    top: 89,
    left: 140,
    width: 120,
    height: 47,
  },
  eventProgress: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default EventProgress;
