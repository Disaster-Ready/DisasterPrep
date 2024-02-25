import { StyleSheet, View, TouchableOpacity, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text } from "@rneui/base";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { dark, colors, setScheme } = useTheme();

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

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
            onPress={() => navigation.navigate("Info")}
            activeOpacity={0.5}
          >
            <AntDesign name="infocirlceo" size={25} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
      }}
    >
      <Text style={{ fontSize: 30, marginTop: 60, color: colors.text }}>
        Get Ready With
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.text }}>
        DisasterPrep!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "light",
          color: colors.text,
          marginTop: 60,
        }}
      >
        What do you want to learn today?
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 300,
          height: 60,
          marginTop: 40,
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 12,
          backgroundColor: colors.eqButtonBg,
        }}
        onPress={() => navigation.navigate("EarthquakeStart")}
      >
        <Ionicons name="earth" size={35} color={colors.eqButtonText} />

        <Text
          style={{
            color: colors.eqButtonText,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Earthquakes
        </Text>

        <AntDesign name="arrowright" size={35} color={colors.eqButtonText} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 300,
          height: 60,
          marginTop: 40,
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 12,
          backgroundColor: colors.wfButtonBg,
        }}
        onPress={() => navigation.navigate("WildfireStart")}
      >
        <MaterialCommunityIcons
          name="pine-tree-fire"
          size={35}
          color={colors.wfButtonText}
        />

        <Text
          style={{
            color: colors.wfButtonText,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Wildfires
        </Text>

        <AntDesign name="arrowright" size={35} color={colors.wfButtonText} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 300,
          height: 60,
          marginTop: 40,
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 12,
          backgroundColor: colors.rsButtonBG,
          marginBottom: 100,
        }}
        onPress={() => navigation.navigate("RainstormStart")}
      >
        <Ionicons name="rainy-sharp" size={35} color={colors.rsButtonText} style={{ marginTop: 5, marginRight: 5 }} />

        <Text
          style={{
            color: colors.rsButtonText,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Rainstorms
        </Text>

        <AntDesign name="arrowright" size={35} color={colors.rsButtonText} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.text,
          height: 50,
          width: 150,
          borderRadius: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={toggleTheme}
      >
        {!dark ? (
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: colors.primary,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Dark
            </Text>
            <Ionicons
              name="moon"
              size={24}
              color={colors.primary}
              style={{ marginLeft: 15 }}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Light
            </Text>
            <Entypo
              name="light-up"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
