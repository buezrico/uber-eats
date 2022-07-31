import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const localRestaurants = [
  {
    name: "Chicken Republic - NTA Road, PHC",
    image_url:
      "https://d2lev5xroqke9e.cloudfront.net/ng/view/9f7b97dc24?width=360&height=200",
    reviews: 1500,
    rating: 4.5,
    categories: [{ name: "Thai" }, { name: "Comfort Food" }],
  },
  {
    name: "My Taste Buddy",
    image_url:
      "https://d2lev5xroqke9e.cloudfront.net/ng/view/f13588c770?width=360&height=200",
    reviews: 1500,
    rating: 4.5,
    categories: [{ name: "Thai" }, { name: "Comfort Food" }],
  },
  {
    name: "Nis Global Spot",
    image_url:
      "https://d2lev5xroqke9e.cloudfront.net/ng/view/ad504f64e1?width=360&height=200",
    price: "₦₦",
    reviews: 1500,
    rating: 4.5,
    categories: [{ name: "Thai" }, { name: "Comfort Food" }],
  },
  {
    name: "Nessa Bakes",
    image_url:
      "https://d2lev5xroqke9e.cloudfront.net/ng/view/eb1f442030?width=360&height=200",
    reviews: 1500,
    rating: "4.5",
    categories: [{ name: "Thai" }, { name: "Comfort Food" }],
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={{ marginBottom: 15 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantText name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantText = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30 - 45 &#8226; mins</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
