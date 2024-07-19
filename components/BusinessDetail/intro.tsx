import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

type Props = {
  detail: any;
};

const Intro: FC<Props> = ({ detail }: any) => {
  const router = useRouter();
  return (
    <View>
      {
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 20,
            marginTop: 66,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back-circle"
              size={35}
              color={Colors.primary}
            />
          </TouchableOpacity>
          <Ionicons name="heart-outline" size={35} />
        </View>
      }
      <Image
        source={{ uri: detail?.imageUrl }}
        style={{
          width: "100%",
          height: 340,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 66,
        }}
      />
      <View
        style={{
          padding: 20,
          marginTop: -20,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ fontSize: 26, fontFamily: "outfit-bold" }}>
          {detail?.name}
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "outfit" }}>
          {detail?.address}
        </Text>
      </View>
    </View>
  );
};

export default Intro;
