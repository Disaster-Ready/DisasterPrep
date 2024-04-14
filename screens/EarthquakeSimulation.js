import React, { useEffect, useState } from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { WebView } from "react-native-webview";
import Constants from 'expo-constants';
import { StyleSheet, View } from "react-native";

const EarthquakeSimulation = ({ navigation }) => {
const [isLandscape, setIsLandscape] = useState(false);
const screenWidth = useWindowDimensions().width;
const screenHeight = useWindowDimensions().height;
  

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'REDACTED' }}
        style={{ width: screenHeight, height: screenWidth, transform: [{ rotate: '90deg'}, {translateY: screenWidth*4/5}, {scaleY: 4/5}, {scaleX: 9/10}]}}
      />
    </View>
  );
};

export default EarthquakeSimulation;

const styles = StyleSheet.create({
  webViewPortrait: {
    flex: 1,
  },
  webViewLandscape: (screenWidth, screenHeight) => ({
    flex: 1,
    transform: [{ rotate: '90deg' }],
    width: screenHeight,
    height: screenWidth,
  }),
  container: {
    flex: 1,
  },
});
