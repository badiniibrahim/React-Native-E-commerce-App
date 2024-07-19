import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CategoryItem from "./Categoryitem";
import { useRouter } from "expo-router";

export type CategoryType = {
  name: string;
  imageUrl: string;
  id: string;
  icon: string;
};

type Props = {
  explore: boolean;
  onCategorySelect?: (item: string) => void;
};

const Category: React.FC<Props> = ({ explore, onCategorySelect }) => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCategoryList();
  }, []);

  const onCategoryPressHandler = (item: CategoryType) => {
    if (!explore) {
      router.push("/businesslist/" + item.name);
    } else {
      onCategorySelect!(item.name);
    }
  };
  const getCategoryList = async () => {
    try {
      const q = query(collection(db, "Category"));
      const querySnapshot = await getDocs(q);
      const categories: CategoryType[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as CategoryType[];
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching category list:", error);
    }
  };

  return (
    <View style={styles.container}>
      {!explore && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Category</Text>
        </View>
      )}
      <FlatList
        data={categoryList}
        horizontal
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            onCategoryPress={() => onCategoryPressHandler(item)}
          />
        )}
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
  list: {
    marginLeft: 20,
  },
});

export default Category;
