import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VenueTracking = () => {
    return (
        <View style={styles.venueTrackingevntOrganizer}>
            <View
                style={[
                    styles.venueTrackingevntOrganizerChild,
                    styles.maleUserIconPosition,
                ]}
            />
            <Text style={[styles.eventOrganizer, styles.changeTypo]}>
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


            <Text style={[styles.venueTracking, styles.imageLayout]}>
                Venue Tracking
            </Text>


            <View
                style={[styles.venueTrackingevntOrganizerItem, styles.venueChildLayout]}
            >
                <Text style={[styles.event1, styles.venueTypo]}>Event 1</Text>
                <Text style={[styles.displayMessage, styles.displayTypo]}>Display Message</Text>
                <Text style={[styles.date, styles.dateTypo]}>Date</Text>
                <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
                <Text style={[styles.time, styles.dateTypo]}>Time</Text>
            </View>

            <View
                style={[styles.venueTrackingevntOrganizerItem2, styles.venueChildLayout]}
            >
                <Text style={[styles.event1, styles.venueTypo]}>Event 2</Text>
                <Text style={[styles.displayMessage, styles.displayTypo]}>Display Message</Text>
                <Text style={[styles.date, styles.dateTypo]}>Date</Text>
                <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
                <Text style={[styles.time, styles.dateTypo]}>Time</Text>
            </View>

            <View
                style={[styles.venueTrackingevntOrganizerItem3, styles.venueChildLayout]}
            >
                <Text style={[styles.event1, styles.venueTypo]}>Event 3</Text>
                <Text style={[styles.displayMessage, styles.displayTypo]}>Display Message</Text>
                <Text style={[styles.date, styles.dateTypo]}>Date</Text>
                <Text style={[styles.venue, styles.venueTypo]}>Venue</Text>
                <Text style={[styles.time, styles.dateTypo]}>Time</Text>
            </View>



            <View style={[styles.venueTrackingevntOrganizerItem1]}>
                <Text
                    style={[styles.change, styles.changeTypo]}
                >{`Change                 `}</Text>
                <Image
                    style={styles.dropDownIcon4}
                    contentFit="cover"
                    source={require("../assets/Drop Down.png")}
                />
            </View>


            <View
                style={[styles.venueTrackingevntOrganizerChild11, styles.imageLayout]}
            />
            <Text style={[styles.gateWays, styles.changeTypo]}>Gate Ways</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    maleUserIconPosition: {
        top: 11,
        position: "absolute",
    },
    changeTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        fontSize: FontSize.size_5xl,
        position: "absolute",
    },
    imageLayout: {
        width:'100%',
        position: "absolute",
    },
    venueChildLayout: {
        height: 67,
        width: 262,
        backgroundColor: Color.colorDarkturquoise,
        borderRadius: Border.br_6xs,
        position: "absolute",
    },
    venueTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        fontSize: FontSize.size_5xl,
        position: "absolute",
    },
    dateTypo: {
        height: 17,
        width: 110,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        position: "absolute",
    },

    dropIconPosition: {
        left: 162,
        height: 14,
        width: 30,
        position: "absolute",
    },

    venueTrackingevntOrganizerChild: {
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
        left: 10,
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
    
    venueTracking: {
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
        left: 15,
        width: 393,
    },
    venueTrackingevntOrganizerItem1:{
        backgroundColor: Color.colorDarkturquoise,
        borderRadius: Border.br_6xs,
        top: 638,
        left: 75,
        
        height: 67,
        width: 262,
    },

    venueTrackingevntOrganizerItem: {
        top: 232,
        left: 75,
        height: 67,
        width: 262,
        backgroundColor: Color.colorDarkturquoise,
        borderRadius: Border.br_6xs,
    },

    venueTrackingevntOrganizerItem2: {
        top: 332,
        left: 75,
        height: 67,
        width: 262,
        backgroundColor: Color.colorDarkturquoise,
        borderRadius: Border.br_6xs,
    },

    venueTrackingevntOrganizerItem3: {
        top: 432,
        left: 75,
        height: 67,
        width: 262,
        backgroundColor: Color.colorDarkturquoise,
        borderRadius: Border.br_6xs,
    },
    event1: {
        left: 9,
    },
    date: {
        left: 216,
        top: 27,
        height: 17,
        width: 110,
        fontSize: FontSize.size_sm,
    },
    venue: {
        left: 183,
    },
    time: {
        left: 216,
        top: 43,
        height: 17,
        width: 110,
        fontSize: FontSize.size_sm,
    },

    change: {
        top:15,
        left: 25,
        width: 222,
        height: 30,
    },
    dropDownIcon4: {
        top: 15,
        left: 200,
        width: 51,
        height: 35,
        position: "absolute",
    },
    displayMessage: {
        top: 35,
        left: 10,
    },

    venueTrackingevntOrganizerChild11: {
        top: 77,
        backgroundColor: "#a4c4d2",
        height: 57,
        left: 0,
        width: 393,
    },
    gateWays: {
        top: 90,
        left: 140,
        width: 120,
        height: 47,
    },
    venueTrackingevntOrganizer: {
        backgroundColor: "#defafe",
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 852,
    },
});

export default VenueTracking;
