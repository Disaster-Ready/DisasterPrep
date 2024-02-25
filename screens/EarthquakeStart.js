import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const EarthquakeStart = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: colors.primary,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 40,
          color: colors.text,
        }}
      >
        Are You Ready?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          padding: 30,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Let's start by giving you a first person experience in an earthquake.
        Based on this simulation, you will be able to figure out what you know,
        and what you don't know. Remember, it's a learning process. By the end
        of this activity, you should be fully prepared when disaster strikes.
        Click below to start!
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 300,
          height: 60,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 12,
          backgroundColor: colors.eqButtonBg,
        }}
        onPress={() => {
          Linking.openURL("REDACTED");
        }}
      >
        <Ionicons name="earth" size={35} color={colors.eqButtonText} />

        <Text
          style={{
            color: colors.eqButtonText,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Simulation
        </Text>

        <AntDesign name="arrowright" size={35} color={colors.eqButtonText} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          marginTop: 40,
          padding: 30,
          color: colors.text,
          textAlign: "center",
        }}
      >
        When you're finished with the simulation, click 'Next' below to learn
        more information about earthquakes!
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 150,
          height: 50,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          backgroundColor: colors.eqButtonBg,
        }}
        onPress={() => navigation.navigate("EarthquakeInfo")}
      >
        <Text
          style={{
            color: colors.eqButtonText,
            fontSize: 20,
            fontWeight: "bold",
            marginRight: 20,
          }}
        >
          Next
        </Text>

        <AntDesign name="arrowright" size={25} color={colors.eqButtonText} />
      </TouchableOpacity>
    </View>
  );
};

export default EarthquakeStart;

const styles = StyleSheet.create({
  eqButton: {
    flexDirection: "row",
    width: 300,
    height: 60,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 12,
    backgroundColor: "#d4ffd4",
  },
  nextButton: {
    flexDirection: "row",
    width: 150,
    height: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#d4ffd4",
  },
});
