import {
  StyleSheet,
  View,
  Switch,
  useColorScheme,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text } from "@rneui/base";
import { Divider } from "react-native-paper";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
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

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
      >
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: colors.text,
            marginHorizontal: 10,
          }}
        >
          Dark Mode
        </Text>
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Entypo
          name="light-up"
          size={24}
          color={colors.text}
          style={{ marginRight: 10, marginTop: 2 }}
        />
        <Text
          style={{
            color: colors.text,
            marginRight: 20,
            fontSize: 20,
            marginTop: 2,
          }}
        >
          Light
        </Text>
        <Switch
          value={dark}
          onValueChange={toggleTheme}
          trackColor={{ true: "#FF5B5B", false: "grey" }}
        />
        <Text
          style={{
            color: colors.text,
            marginLeft: 20,
            fontSize: 20,
            marginTop: 2,
          }}
        >
          Dark
        </Text>
        <Ionicons
          name="moon"
          size={24}
          color={colors.primary}
          style={{ marginLeft: 10, marginTop: 2 }}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
      >
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: colors.text,
            marginHorizontal: 10,
          }}
        >
          FPS
        </Text>
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
      >
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: colors.text,
            marginHorizontal: 10,
          }}
        >
          Simulation Volume
        </Text>
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
      >
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: colors.text,
            marginHorizontal: 10,
          }}
        >
          Simulation Resolution
        </Text>
        <View style={{ flex: 1, height: 2, backgroundColor: colors.text }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "light",
            color: colors.text,
            marginRight: -5
          }}
        >
          Our
        </Text>
        <Button
          title="Terms & Conditions"
          onPress={() => navigation.navigate("TAC")}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row",
    width: 40,
    height: 40,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 12,
    backgroundColor: "#039C00",
  },
  button: {
    flexDirection: "column",
    width: 60,
    height: 60,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 12,
    backgroundColor: "#ffe8e8",
  },
});
