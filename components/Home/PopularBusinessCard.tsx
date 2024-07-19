import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type Props = {
  business: any;
};

const PopularBusinessCard: FC<Props> = ({ business }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/businessdetail/" + business.id)}
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: 200, height: 130, borderRadius: 15 }}
      />
      <View style={{ marginTop: 7 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
          {business.name}
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 13, color: "gray" }}>
          {business.address}
        </Text>

        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Image
            source={require("../../assets/images/etoile.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: "outfit" }}>4.5</Text>
        </View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 12,
            padding: 3,
            color: Colors.primary,
          }}
        >
          {business.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularBusinessCard;
