import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  Ionicons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import Home from "./screens/Home";
import Info from "./screens/Info";
import Settings from "./screens/Settings";
import DisasterPal from "./screens/ChatBot";
import Contact from "./screens/Contact";
import TAC from "./screens/TAC";
import GreenGuide from "./screens/GreenGuide";
import SustainablePractices from "./screens/SustainablePractices";
import EarthquakeInfo from "./screens/EarthquakeInfo";
import EarthquakeStart from "./screens/EarthquakeStart";
import WildfireInfo from "./screens/WildfireInfo";
import WildfireStart from "./screens/WildfireStart";
import RainstormInfo from "./screens/RainstormInfo";
import RainstormStart from "./screens/RainstormStart";
import EarthquakeSimulation from "./screens/EarthquakeSimulation";
import {ThemeProvider} from "./Theme_Handling/ThemeProvider";

const Drawer = createDrawerNavigator();

//Every screen will follow these styles for their headers
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#FF5B5B" },
  headerTitleStyle: { color: "black" },
  headerTintColor: "black",
  drawerLabelStyle: { marginLeft: -15 },
  drawerActiveBackgroundColor: "#ffe8e8",
  drawerActiveTintColor: "#FF5B5B",
};

//Titles in functions
function HeaderTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>DisasterPrep</Text>;
}

function InfoTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Info</Text>;
}

function DPTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>DisasterPal</Text>;
}

function ContactTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Contact</Text>;
}

function TACTitle({ navigation }) {
  return (
    <Text style={{ fontSize: 25, marginLeft: 10 }}>Terms & Conditions</Text>
  );
}

function SPTitle({ navigation }) {
  return (
    <Text style={{ fontSize: 25, marginLeft: 10 }}>Sustainable Practices</Text>
  );
}

function GGTitle({ navigation }) {
  return (
    <Text style={{ fontSize: 25, marginLeft: 10 }}>GreenGuide</Text>
  );
}

function EQInfoTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Earthquakes</Text>;
}

function EQStartTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Earthquakes</Text>;
}

function WFStartTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Wildfires</Text>;
}

function WFInfoTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Wildfires</Text>;
}

function RSStartTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Rainstorms</Text>;
}

function RSInfoTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Rainstorms</Text>;
}

function EarthquakeSimTitle({ navigation }) {
  return <Text style={{ fontSize: 25, color: "white" }}>Earthquake Simulation</Text>;
}

export default function App() {

  const CustDrawer = (props) => {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  };

  return (
    //Screens
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={globalScreenOptions}
          drawerContent={(props) => <CustDrawer {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => {
              return {
                headerTitle: () => <HeaderTitle navigation={navigation} />,
                drawerIcon: ({ color }) => (
                  <Ionicons name="ios-home" size={20} color={color} />
                ),
              };
            }}
          />
          <Drawer.Screen
            name="DisasterPal"
            component={DisasterPal}
            options={({ navigation }) => {
              return {
                headerTitle: () => <DPTitle navigation={navigation} />,
                drawerIcon: ({ color }) => (
                  <Entypo name="chat" size={20} color={color} />
                ),
              };
            }}
          />
          <Drawer.Screen
            name="GreenGuide"
            component={GreenGuide}
            options={({ navigation }) => {
              return {
                headerTitle: () => <GGTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#039C00" },
                drawerIcon: ({ color }) => (
                  <Ionicons name="chatbubbles" size={20} color={color} />
                ),
              };
            }}
          />
          <Drawer.Screen
            name="Sustainable Practices"
            component={SustainablePractices}
            options={({ navigation }) => {
              return {
                headerTitle: () => <SPTitle navigation={navigation} />,
                drawerIcon: ({ color }) => (
                  <Entypo name="tree" size={20} color={color} />
                ),
              };
            }}
          />
          <Drawer.Screen
            name="Info"
            component={Info}
            options={({ navigation }) => {
              return {
                headerTitle: () => <InfoTitle navigation={navigation} />,
                drawerIcon: ({ color }) => (
                  <AntDesign name="infocirlce" size={20} color={color} />
                ),
              };
            }}
          />
          <Drawer.Screen
            name="Contact"
            component={Contact}
            options={({ navigation }) => {
              return {
                headerTitle: () => <ContactTitle navigation={navigation} />,
                drawerIcon: ({ color }) => (
                  <AntDesign name="questioncircleo" size={20} color={color} />
                ),
              };
            }}
          />
          <Drawer.Screen
            name="EarthquakeInfo"
            component={EarthquakeInfo}
            options={({ navigation }) => {
              return {
                headerTitle: () => <EQInfoTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#039C00" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("EarthquakeStart")}
                      activeOpacity={0.5}
                    >
                      <AntDesign name="arrowleft" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                headerRight: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      width: 80,
                      marginRight: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
          <Drawer.Screen
            name="EarthquakeStart"
            component={EarthquakeStart}
            options={({ navigation }) => {
              return {
                headerTitle: () => <EQStartTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#039C00" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
          <Drawer.Screen
            name="WildfireInfo"
            component={WildfireInfo}
            options={({ navigation }) => {
              return {
                headerTitle: () => <WFInfoTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#FF5621" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("WildfireStart")}
                      activeOpacity={0.5}
                    >
                      <AntDesign name="arrowleft" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                headerRight: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      width: 80,
                      marginRight: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
          <Drawer.Screen
            name="WildfireStart"
            component={WildfireStart}
            options={({ navigation }) => {
              return {
                headerTitle: () => <WFStartTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#FF5621" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
          <Drawer.Screen
            name="RainstormInfo"
            component={RainstormInfo}
            options={({ navigation }) => {
              return {
                headerTitle: () => <RSInfoTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#4d4d4d" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("RainstormStart")}
                      activeOpacity={0.5}
                    >
                      <AntDesign name="arrowleft" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                headerRight: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      width: 80,
                      marginRight: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
          <Drawer.Screen
            name="RainstormStart"
            component={RainstormStart}
            options={({ navigation }) => {
              return {
                headerTitle: () => <RSStartTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#4d4d4d" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
          <Drawer.Screen
            name="EarthquakeSimulation"
            component={EarthquakeSimulation}
            options={({ navigation }) => {
              return {
                headerTitle: () => <EarthquakeSimTitle navigation={navigation} />,
                headerStyle: { backgroundColor: "#039C00" },
                headerLeft: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: 80,
                      marginLeft: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                      activeOpacity={0.5}
                    >
                      <Ionicons name="ios-home" size={26} color="white" />
                    </TouchableOpacity>
                  </View>
                ),
                drawerItemStyle: { height: 0 },
              };
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
