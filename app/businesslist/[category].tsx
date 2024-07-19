import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import BusinessListCard from "@/components/BusinessList/BusinessListCard";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export type BusinessType = {
  id: string;
  name: string;
  category: string;
};

const BusinessListByCategory: React.FC = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const [categoryList, setCategoryList] = useState<BusinessType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategoryList = async () => {
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

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category as string,
    });
    getCategoryList();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={styles.loader}
        />
      ) : categoryList.length > 0 ? (
        <FlatList
          data={categoryList}
          onRefresh={getCategoryList}
          refreshing={loading}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BusinessListCard
              category={item}
              onPress={() => router.push("/businessdetail/" + item.id)}
            />
          )}
        />
      ) : (
        <Text style={styles.noBusinessText}>No Business Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noBusinessText: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    color: "gray",
    textAlign: "center",
    marginTop: "50%",
  },
});

export default BusinessListByCategory;
