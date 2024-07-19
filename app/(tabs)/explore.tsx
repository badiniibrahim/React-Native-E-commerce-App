import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Category from "@/components/Home/Category";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import { BusinessType } from "../businesslist/[category]";
import ExploreBusinessList from "@/components/Explore/ExploreBusinessList";

export default function Explore() {
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryList, setCategoryList] = useState<BusinessType[]>([]);

  const getCategoryList = async (category: string) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "BusinessList"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      const categories: BusinessType[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as BusinessType[];
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching category list:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20, paddingTop: 50 }}>
      <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>Explore</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
          marginTop: 15,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.primary} />
        <TextInput
          placeholder="search..."
          style={{ fontFamily: "outfit", fontSize: 16 }}
        />
      </View>
      <Category
        explore={true}
        onCategorySelect={(item) => getCategoryList(item)}
      />
      <ExploreBusinessList categoryList={categoryList} />
    </View>
  );
}
