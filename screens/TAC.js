import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text } from "@rneui/base";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../Theme_Handling/ThemeProvider";

const TAC = ({ navigation }) => {
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
    <View
      style={{
        height: "100%",
        backgroundColor: colors.primary,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 30, color: colors.text }}>Our Terms & Conditions</Text>
    </View>
  );
};

export default TAC;

const styles = StyleSheet.create({});

