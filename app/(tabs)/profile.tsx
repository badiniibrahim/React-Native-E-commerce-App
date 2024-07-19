import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UserIntro from "@/components/Profile/UserIntro";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@clerk/clerk-expo";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View style={{ padding: 20, paddingTop: 60 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>Profile</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <UserIntro />
    </View>
  );
}
