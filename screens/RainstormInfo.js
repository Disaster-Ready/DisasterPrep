import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import React from "react";
import { useTheme } from "../Theme_Handling/ThemeProvider";

const RainstormInfo = () => {
  const { colors } = useTheme();

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
      <Image
        source={require("REDACTED")}
        style={{ width: 410, height: 250, marginTop: 20, borderRadius: 8 }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
          color: colors.text,
          padding: 10
        }}
      >
        What are rainstorms? How do they impact lives?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: 20,
          color: colors.text,
        }}
      >
        Wildfires are large uncontrolled fires that usually occur in rural
        areas. They can spread quickly and change direction, and even can even
        “jump” across large distances when wind carries carries embers and
        sparks. They are usually caused by a range of natural causes, such as
        lightning, or by human carelessness, such as a discarded cigarette. The
        spread of a wildfire depends on the arrangement of land, available fuel,
        which is usually vegetation or dead wood, and weather conditions, such
        as lots of wind and heat. They can start in just seconds and turn into
        massive infernos in a matter of minutes, being extremely dangerous for
        surrounding people. Wildfires are not only dangerous for peoples’ health
        as they can cause burns.
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        What did we learn from the simulation?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: 20,
          color: colors.text,
        }}
      >
        Research shows that changes in climate create warmer, drier conditions,
        leading to longer and more active fire seasons, resulting in a greater
        number and intensity of wildfires. A few important ways to prevent
        wildfires include never starting a fire on a windy day, ensuring that a
        fire is completely doused and no remnants of the fire are left, and
        overall, following protocols and guidelines set by officials to ensure
        you and your community remain safe.
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
          paddingHorizontal: 20,
        }}
      >
        How to take safety measures and precautions and ensure you, your
        family/relatives, and your community know how to prepare for the next
        rainstorm?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: 20,
          color: colors.text,
        }}
      >
        One of the most important things to do to prepare for wildfires is to
        speak to town officials to learn what the best evacuation route is for
        your area. Discuss this evacuation route with everyone in your family
        and your nearby community, such as neighbors. Ensure family members who
        live nearby know the route and have means of transportation. Also, stay
        informed by signing up for emergency text or alert messages from your
        town. Finally, don’t forget to create an emergency kit that includes
        emergency supplies.
      </Text>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default RainstormInfo;

const styles = StyleSheet.create({});
