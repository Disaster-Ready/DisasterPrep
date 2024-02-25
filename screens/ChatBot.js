import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, {
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { useTheme } from "../Theme_Handling/ThemeProvider";
import { Feather } from "@expo/vector-icons";
import { GiftedChat, Bubble, Time } from "react-native-gifted-chat";
import uuid from "react-native-uuid";

const ChatBot = ({ navigation }) => {
  const [messages, setMessages] = useState();
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

  useEffect(() => {
    setMessages([
      {
        _id: uuid.v4(),
        text: "Hey there! I am DisasterPal! How May I Assist You Today?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "DisasterPal",
          avatar:
            "REDACTED",
        },
      },
    ]);
  }, []);

  async function getMessageFromServer(msg) {
    //  console.log(messages);
    const url = `REDACTED`;
    const response = await fetch(url);
    const data = await response.json();
    return data.response;
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  }

  const onSend = (msg) => {
    console.log(msg);
    const message = [
      {
        _id: uuid.v4(),
        text: msg[0].text,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ];
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, message)
    );
    //  console.log(message);
    getMessageFromServer(msg).then((response) => {
      console.log(response);
      const botMessage = [
        {
          _id: uuid.v4(),
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "assets/dpbot.png",
          },
        },
      ];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, botMessage)
      );
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary
      }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        scrollToBottom
        messagesContainerStyle={{
          backgroundColor: colors.primary
        }}
        user={{
          _id: 1,
          avatar:
            "REDACTED",
        }}
        renderTime={(props) => {
          return (
            <Time
              {...props}
              timeTextStyle={{
                left: {
                  color: "black",
                },
                right: {
                  color: "black",
                },
              }}
            />
          );
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  color: "white",
                },
                left: {
                  color: "black",
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: "#ffa3a3",
                },
                right: {
                  backgroundColor: "#FF5B5B",
                },
              }}
            />
          );
        }}
      />
      <View style={{ height: 50 }}/>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({});
