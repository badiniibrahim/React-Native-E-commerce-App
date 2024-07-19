import { View, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";
import PopularBusinessList from "@/components/Home/PopularBusinessList";

export default function Home() {
  return (
    <View>
      <Header />
      <ScrollView>
        <Slider />
        <Category explore={false} />
        <PopularBusinessList />
      </ScrollView>
    </View>
  );
}
