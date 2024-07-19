import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { BusinessType } from "@/app/businesslist/[category]";

type Props = {
  item: any;
};
const ExploreListCard: FC<Props> = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 15,
      }}
    >
      <Image
        source={{ uri: item?.imageUrl }}
        style={{
          height: 150,
          width: "100%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          {item?.name}
        </Text>
        <Text style={{ fontFamily: "outfit", color: "gray" }}>
          {item?.address}
        </Text>
      </View>
    </View>
  );
};

export default ExploreListCard;
