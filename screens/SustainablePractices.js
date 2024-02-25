import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import { Feather } from "@expo/vector-icons";

const SustainablePractices = ({ navigation }) => {
    const { colors } = useTheme();

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
                Climate Change
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    color: colors.text,
                    padding: 10,
                    textAlign: "center"
                }}
            >
                Climate change is a significant driver of natural disasters, leading to increased frequency and intensity of events like hurricanes, floods, and wildfires. Understanding and addressing climate change is crucial for disaster risk reduction. Mitigation efforts, such as reducing greenhouse gas emissions, can help slow the pace of climate change, ultimately reducing the likelihood of extreme weather events.
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginTop: 50,
                    color: colors.text,
                }}
            >
                Renewable Energy
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: "center",
                    color: colors.text,
                }}
            >
                Transitioning to renewable energy sources, such as solar and wind power, is essential for reducing greenhouse gas emissions and combating climate change. Renewable energy can also enhance disaster resilience by providing a decentralized and reliable source of power. During disasters, renewable energy systems can continue to operate, providing critical electricity when traditional power sources are disrupted.
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
                Resource Management
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: "center",
                    color: colors.text,
                }}
            >
                Effective resource management is vital for disaster preparedness and response. By efficiently managing resources such as food, water, and medical supplies, communities can better withstand and recover from disasters. Sustainable resource management practices can also reduce the environmental impact of disasters, helping to preserve ecosystems and biodiversity.
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
                Waste Management
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: "center",
                    color: colors.text,
                }}
            >
                Proper waste management is essential for reducing the environmental impact of disasters. Inadequate waste disposal can lead to contamination of water sources and the spread of disease. Implementing sustainable waste management practices, such as recycling and composting, can help reduce waste generation and minimize the impact of disasters on the environment.
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
                Biodiversity Conservation
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: "center",
                    color: colors.text,
                }}
            >
                Biodiversity conservation is critical for maintaining ecosystem resilience and reducing the vulnerability of communities to disasters. Healthy ecosystems, such as forests and wetlands, can provide natural protection against hazards like floods and landslides. Conserving biodiversity also supports food security and ensures the sustainability of natural resources.
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
                Sustainable Agriculture
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: "center",
                    color: colors.text,
                }}
            >
                Sustainable agriculture practices can enhance food security and resilience to disasters. By promoting soil health, water conservation, and biodiversity on farms, sustainable agriculture can help mitigate the impacts of climate change and reduce the risk of crop failure during extreme weather events. Additionally, sustainable agriculture can contribute to the preservation of natural habitats and ecosystems.
            </Text>
            <Text
                style={{
                    fontSize: 21,
                    fontWeight: "bold",
                    marginTop: 50,
                    color: colors.text,
                }}
            >
                Cities (Green Building and Transportation)
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: "center",
                    color: colors.text,
                }}
            >
                Green building practices, such as using sustainable materials and designing structures to withstand natural disasters, can reduce the vulnerability of buildings to events like earthquakes, hurricanes, and floods. Sustainable transportation systems in cities can improve disaster response and recovery efforts. Well-planned public transportation networks can facilitate the evacuation of residents during emergencies, reducing congestion and improving overall safety. Additionally, infrastructure designed to withstand disasters, such as bridges and roads, can ensure that essential services remain operational during and after a disaster, aiding in the recovery process.
            </Text>
            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

export default SustainablePractices;

const styles = StyleSheet.create({});