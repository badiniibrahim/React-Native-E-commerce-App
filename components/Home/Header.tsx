import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { user } = useUser();
  return (
    <View
      style={{ paddingTop: 80, padding: 20, backgroundColor: Colors.primary }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text>Welcome,</Text>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 19 }}>
            {user?.fullName}
          </Text>
        </View>
      </View>

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
    </View>
  );
};

export default Header;
