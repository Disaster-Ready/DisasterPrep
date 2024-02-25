import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Text, Input, Button } from "@rneui/base";
import { db } from "../firebase";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import { Feather } from "@expo/vector-icons";

const Contact = ({ navigation }) => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { dark, colors, setScheme } = useTheme();

  const sendMessage = async () => {
    await db
      .collection("contactmessages")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={[styles.container, {backgroundColor: colors.primary}]} >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary,
          }}
        >
          <View style={styles.modalView}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15,
                color: colors.text
              }}
            >
              Message Sent!
            </Text>
            <Text
              style={{
                marginBottom: 20,
                textAlign: "center",
                fontSize: 20,
                color: colors.text
              }}
            >
               We will try to get back to you within a week.
            </Text>
            <Pressable
              style={[
                { borderRadius: 20, padding: 10, elevation: 2, width: 150 },
                { backgroundColor: "#FF5B5B" },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  color: colors.text,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.text }}>Contact Us!</Text>
        <Text style={{ fontSize: 19, marginTop: 20, color: colors.text }}>
          Any issues with our app? Fill up the form here:
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Name"
            autoFocus
            multiline={true}
            type="text"
            keyboardAppearance = {dark ? 'dark' : 'light'}
            value={name}
            style={{ color: colors.text }}
            onChangeText={(text) => setName(text)}
            containerStyle={[styles.inputStyles, {borderColor: colors.text}]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <Input
            placeholder="Email"
            editable
            autoFocus
            keyboardAppearance = {dark ? 'dark' : 'light'}
            inputMode="text"
            style={{color: colors.text}}
            value={email}
            onChangeText={(text) => setEmail(text)}
            containerStyle={[styles.inputStyles, {borderColor: colors.text}]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            multiline
          />
          <Input
            placeholder="Message"
            autoFocus
            type="text"
            value={message}
            style={{color: colors.text}}
            onChangeText={(text) => setMessage(text)}
            containerStyle={[styles.messageContainer, {borderColor: colors.text}]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            multiline={true}
          />
        </View>
      </View>
      <Button
        disabled={!name || !email || !message}
        title="Send"
        style={styles.button}
        titleStyle={{
          color: colors.text,
          fontWeight: "bold",
        }}
        buttonStyle={{
          backgroundColor: "#FF5B5B",
          borderRadius: 8,
        }}
        onPress={sendMessage}
      />
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  inputContainer: {
    marginTop: 50,
    width: 350,
    paddingHorizontal: 10,
  },
  inputStyles: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 50,
  },
  messageContainer: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 200,
  },
  button: {
    width: 200,
    marginTop: 50,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
