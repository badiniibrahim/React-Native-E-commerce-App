import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/constants/Colors";

type Category = {
  icon: string;
  name: string;
};

type Props = {
  category: Category;
  onCategoryPress: () => void;
};

const CategoryItem: FC<Props> = ({ category, onCategoryPress }) => {
  const { icon, name } = category;
  return (
    <TouchableOpacity onPress={onCategoryPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={{ uri: icon }} style={styles.icon} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  iconContainer: {
    padding: 10,
    marginRight: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 12,
    fontFamily: "outfit-medium",
    textAlign: "center",
    marginTop: 5,
  },
});

export default CategoryItem;
