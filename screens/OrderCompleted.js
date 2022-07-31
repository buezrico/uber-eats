import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      //   {
      //     title: "New Citizens Spicy Yam Meal",
      //     description:
      //       "2 pieces of Soulfully Spiced Fried Chicken served with our New Spicy Yam, a FREE pepper sauce and a PET drink",
      //     price: "₦2000.00",
      //     image: "https://images.media-allrecipes.com/userphotos/617111.jpg",
      //   },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("₦", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalNaira = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        backgroundColor: "white",
        flex: 1,
        padding: 15,
      }}
    >
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        // speed={0.5}
        loop={false}
      />
      <Text
        style={{
          paddingHorizontal: 10,
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 10,
        }}
      >
        Your order at {restaurantName} has been placed for ₦{totalNaira}
      </Text>
      <MenuItems hideCheckbox={true} foods={lastOrder.items} />
      <LottieView
        style={{ height: 150, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        // speed={0.5}
      />
    </SafeAreaView>
  );
}
