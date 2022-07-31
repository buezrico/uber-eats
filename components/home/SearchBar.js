import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function SearchBar({ cityHandler }) {
  const [city, setCity] = useState();

  const handleChangePicker = (e) => {
    cityHandler(city);
  };
  useEffect(() => {
    handleChangePicker();
  }, [city]);
  return (
    <TouchableOpacity
      style={{
        marginTop: 15,
        backgroundColor: "#eee",
        borderRadius: 20,
        paddingLeft: 30,
        position: "relative",
      }}
    >
      <Ionicons
        name="location-sharp"
        size={24}
        style={{ position: "absolute", top: 12, left: 10 }}
      />
      <Picker
        selectedValue={city}
        onValueChange={(itemValue, itemIndex) => {
          setCity(itemValue);
        }}
        onChange={handleChangePicker}
      >
        <Picker.Item label="Choose City" value="SanDiego" />
        <Picker.Item label="Chicago" value="Chicago" />
        <Picker.Item label="Hollywood" value="Hollywood" />
        <Picker.Item label="Los Angeles" value="LosAngeles" />
        <Picker.Item label="San Diego" value="SanDiego" />
        <Picker.Item label="Texas" value="Texas" />
      </Picker>
    </TouchableOpacity>
  );
}
