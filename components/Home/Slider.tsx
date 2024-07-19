import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";

type SliderType = {
  name: string;
  imageUrl: string;
};

const Slider: React.FC = () => {
  const [sliderList, setSliderList] = useState<SliderType[]>([]);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    try {
      const q = query(collection(db, "Slider"));
      const querySnapshot = await getDocs(q);
      const sliders: SliderType[] = querySnapshot.docs.map(
        (doc) => doc.data() as SliderType
      );
      setSliderList(sliders);
    } catch (error) {
      console.error("Error fetching slider list:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Special for you</Text>
      <FlatList
        data={sliderList}
        horizontal
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    marginBottom: 5,
  },
  list: {
    // paddingLeft: 20,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
});

export default Slider;
