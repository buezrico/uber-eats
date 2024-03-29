import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import React from "react";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity activeOpacity={0.6}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center", color: "brown" }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
