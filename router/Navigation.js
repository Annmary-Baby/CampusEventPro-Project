import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import EventOrganizerDashboad from '../screens/EventOrganizerDashboad';
import { NavigationContainer } from '@react-navigation/native';
import AttendeeRegister from '../screens/AttendeeRegister';
import OrganizerMemberScreen from '../screens/OrganizerMemberScreen';
import MemberFestscreen from '../screens/MemberFestscreen';
import EventOrganizer from '../screens/EventOrganizer';
import AddEventModal from '../screens/AddEventModal';
import AddTeamMember from '../screens/AddTeamMember';
import AddTaskModal from '../screens/AddTaskModal';
import MonitorProgress from '../screens/MonitorProgress';
import EventProgress from '../screens/EventProgress';
import VenueTracking from '../screens/VenueTracking';
import AtendeePage from '../screens/AtendeePage';
import AtendeeEventList from '../screens/AtendeeEventList';
import AttendeeAboutEvent from '../screens/AttendeeAboutEvent';
import AttendeeVenueList from '../screens/AttendeeVenueList';
import AttendeeLogin from '../screens/AttendeeLogin';
import OrganizerLogin from '../screens/OrganizerLogin';
import TeamMemberLogin from '../screens/TeamMemberLogin';

const Stack = createStackNavigator();


function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="EventOrganizerDashboad" component={EventOrganizerDashboad} />
            <Stack.Screen name="OrganizerMemberScreen" component={OrganizerMemberScreen} />
            <Stack.Screen name="AttendeeRegister" component={AttendeeRegister} />
            <Stack.Screen name="MemberFestscreen" component={MemberFestscreen} />
            <Stack.Screen name="EventOrganizer" component={EventOrganizer} />
            <Stack.Screen name="AddEventModal" component={AddEventModal} />
            <Stack.Screen name="AddTeamMember" component={AddTeamMember} />
            <Stack.Screen name="AddTaskModal" component={AddTaskModal} />
            <Stack.Screen name="MonitorProgress" component={MonitorProgress} />
            <Stack.Screen name="EventProgress" component={EventProgress} />
            <Stack.Screen name="VenueTracking" component={VenueTracking} />
            <Stack.Screen name="AtendeePage" component={AtendeePage} />
            <Stack.Screen name="AtendeeEventList" component={AtendeeEventList} />
            <Stack.Screen name="AttendeeAboutEvent" component={AttendeeAboutEvent} />
            <Stack.Screen name="AttendeeVenueList" component={AttendeeVenueList} />
            <Stack.Screen name="AttendeeLogin" component={AttendeeLogin} />
            <Stack.Screen name="OrganizerLogin" component={OrganizerLogin} />
            <Stack.Screen name="TeamMemberLogin" component={TeamMemberLogin} />
            </Stack.Navigator>
        </NavigationContainer>
       
        

    )
}

export default Navigation