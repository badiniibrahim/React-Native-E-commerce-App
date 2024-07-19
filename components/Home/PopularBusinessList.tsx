import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

const PopularBusinessList = () => {
  const [topBusinessList, setTopBusinessList] = useState<any[]>([]);

  useEffect(() => {
    getTopBusiness();
  }, []);

  const getTopBusiness = async () => {
    try {
      const q = query(collection(db, "BusinessList"), limit(10));
      const querySnapshot = await getDocs(q);
      const topBusiness: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as any[];
      setTopBusinessList(topBusiness);
    } catch (error) {
      console.error("Error fetching business list:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top</Text>
      </View>
      <FlatList
        data={topBusinessList}
        horizontal={true}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PopularBusinessCard business={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
  viewAll: {
    fontFamily: "outfit-medium",
    color: Colors.primary,
  },
  list: {},
});

export default PopularBusinessList;
