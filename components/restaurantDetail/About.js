import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Kilimanjaro Foods",
  image:
    "https://d2lev5xroqke9e.cloudfront.net/ng/view/9f7b97dc24?width=360&height=200",
  price: "₦₦",
  reviews: "1500",
  rating: 4.5,
  categories: [{ name: "Thai" }, { name: "Comfort Food" }],
};

// const image =
//   "https://d2lev5xroqke9e.cloudfront.net/ng/view/9f7b97dc24?width=360&height=200";
// const name = "Kilimanjaro Foods";
// const description = "Thai  •  Comfort Food  •  $$  •  4⭐  (2913+)";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.name).join("  •  ");

  const description = `${formattedCategories} ${
    price ? "  •  " + price : ""
  }  •  ${rating} ⭐ (${reviews})`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 200 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 25,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 5,
      marginHorizontal: 15,
      fontWeight: "500",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
