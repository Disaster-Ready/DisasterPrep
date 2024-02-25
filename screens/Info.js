import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text } from "@rneui/base";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import { Feather } from "@expo/vector-icons";

const Info = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
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
            onPress={() => navigation.openDrawer()}
            activeOpacity={0.5}
          >
            <Feather name="menu" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const { dark, colors, setScheme } = useTheme();

  return (
    <ScrollView
      style={{
        backgroundColor: colors.primary,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
          color: colors.text,
        }}
      >
        What is this App?
      </Text>
      <Text
        style={{
          fontSize: 19,
          textAlign: "left",
          paddingHorizontal: 30,
          alignItems: "center",
          marginTop: 20,
          color: colors.text,
        }}
      >
        We created an app for simulating natural disasters with the intention of
        raising awareness and preparedness among individuals and communities.
        Natural disasters, such as earthquakes, hurricanes, and floods, can have
        devastating impacts on lives and infrastructure. By providing a
        realistic and interactive experience through the app, users can better
        understand the potential dangers and learn how to respond effectively
        during such events. The app offers a safe environment to practice
        emergency procedures, test evacuation plans, and educate users about the
        importance of disaster preparedness. By fostering a sense of readiness
        and empowering individuals with knowledge, this app aims to contribute
        to building resilient communities and minimizing the loss of life and
        property during natural disasters.
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Our Purpose
      </Text>
      <Text></Text>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Our Goal for Community Impact
      </Text>
      <Text></Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        About the Developers
      </Text>
      <Text></Text>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({});
