import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "../Theme_Handling/ThemeProvider";

const EarthquakeInfo = () => {
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
        }}
      >
        What are earthquakes? How do they impact lives?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: 20,
          color: colors.text,
        }}
      >
        Earthquakes are one of the most substantial and life threatening natural
        disasters that occur due to the sudden release of energy of the Earth’s
        tectonic plates. Earthquakes happen frequently throughout one day with
        various types of magnitudes, which are numbers that measure the
        intensity of an earthquake. These can also happen any time and at any
        location. Earthquakes are not predictable; however, there are
        instruments and devices that can sense earthquakes before they start.
        When earthquakes happen, the ground starts shaking as objects sway left
        and right, causing buildings and objects to crash and crumble.
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 5,
          padding: 20,
          color: colors.text,
        }}
      >
        Earthquakes have diverse and profound impacts. They cause loss of life
        through collapsing buildings, landslides, and tsunamis. Survivors often
        face injuries, while infrastructure damage disrupts essential services.
        Economic setbacks arise from property destruction, leading to costly
        rebuilding efforts. The psychological toll includes fear and trauma,
        while displacement strains resources. Environmental effects ensue
        destruction, impacting communities and cities. Annually, 10,000 people
        die due to earthquakes, which is huge compared to how long earthquakes
        last(it typically takes a couple of seconds to around 10 minutes). Some
        of the largest earthquakes were the 1989 Loma Prieta Earthquake in San
        Francisco, the 2010 Haiti Earthquake, and the 1960 Valdivia Earthquake
        in Chile.
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        What have we learned from the simulation?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 5,
          padding: 20,
          color: colors.text,
        }}
      >
        This simulation serves as a powerful
        educational tool, offering individuals and communities a firsthand
        perspective on the seismic forces that shape our surroundings. By
        experiencing the intensity of ground shaking and witnessing the impact
        on various structures, participants gain crucial insights into the
        vulnerabilities of buildings and infrastructure during seismic events.
        This simulation not only underscores the importance of resilient
        construction practices but also highlights the necessity of emergency
        preparedness and evacuation planning. Furthermore, it fosters a deeper
        understanding of the geological factors influencing earthquakes,
        encouraging a proactive approach to risk assessment and public
        education. Ultimately, the simulation contributes to a collective
        awareness of the challenges posed by earthquakes, fostering a commitment
        to technological innovation, international collaboration, and community
        resilience in the face of seismic threats.
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
          paddingHorizontal: 20,
        }}
      >
        How to take safety measures and precautions and ensure you, your
        family/relatives, and your community know how to prepare for the next
        earthquake?
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: 20,
          color: colors.text,
        }}
      >
        There are some good tips you might know like duck-and-cover to protect
        your head and staying outside to protect yourself from earthquakes.
        Additionally, you can help prepare yourself for future ones. First,
        establish a clear plan for safety at home and work, identifying secure
        spaces. Make sure to conduct regular drills with family or coworkers,
        and assemble an emergency kit with essentials. Keep this kit in an
        easy-to-reach spot so it isn’t a hassle during an earthquake. Ensure
        heavy items are anchored to prevent tipping, and know how to shut off
        gas, water, and electricity if lines are damaged. Watch out for
        potential aftershocks, and be ready to seek shelter if needed. Make sure
        to spread this to your family, friends, and community so everybody will
        be prepared for the next earthquake.
      </Text>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default EarthquakeInfo;

const styles = StyleSheet.create({});
