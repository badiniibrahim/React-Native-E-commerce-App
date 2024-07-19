import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type Props = {
  category: any;
  onPress: () => void;
};
const BusinessListCard: FC<Props> = ({ category, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "white",
          borderRadius: 15,
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Image
          source={{ uri: category.imageUrl }}
          style={{ width: 120, height: 120, borderRadius: 15 }}
        />
        <View style={{ flex: 1, gap: 7 }}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
            {category.name}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 14, color: "gray" }}>
            {category.address}
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Image
              source={require("../../assets/images/etoile.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "outfit" }}>{category.rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListCard;
