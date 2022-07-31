import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Refuel Fried Rice Meal",
    description:
      "One piece of Soulfully Spiced Fried Chicken served with Fried Rice",
    price: "₦900.00",
    image: "https://pbs.twimg.com/media/ElZrJ5rXYAA2aIZ.png",
  },
  {
    title: "Soulfully Spiced Fried Chicken",
    description:
      "Soulfully Spiced Fried Chicken - Available in Traditional or Crunchy",
    price: "₦700.00",
    image:
      "https://chicken-republic.micmakin.com/wp-content/uploads/2020/07/chickenCAT.jpg",
  },
  {
    title: "New Citizens Spicy Yam Meal",
    description:
      "2 pieces of Soulfully Spiced Fried Chicken served with our New Spicy Yam, a FREE pepper sauce and a PET drink",
    price: "₦2000.00",
    image: "https://images.media-allrecipes.com/userphotos/617111.jpg",
  },

  {
    title: "Pot Lovers Meal",
    description:
      "Enjoy 8 pieces of Soulfully Spiced Fried Chicken with your choice of 4 x portions of Spaghetti, Fried Rice, Spicy Rice or Regular Chips plus 2 x portions of Moin Moin, Dodo or Coleslaw and 4 x PET drinks",
    price: "₦900.00",
    image: "https://pbs.twimg.com/media/E2fajGVWUAIN10N.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView
      style={{
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ height: "100%" }}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
