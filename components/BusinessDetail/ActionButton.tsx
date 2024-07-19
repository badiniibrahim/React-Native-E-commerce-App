import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const ActionButton = () => {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/location.png"),
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/web.png"),
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
    },
  ];
  return (
    <View style={{ backgroundColor: "white", padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={item?.icon} style={{ width: 50, height: 50 }} />
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  textAlign: "center",
                  marginTop: 3,
                }}
              >
                {item?.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ActionButton;
