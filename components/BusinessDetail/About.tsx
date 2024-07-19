import { View, Text } from "react-native";
import React, { FC } from "react";

type Props = {
  detail: any;
};

const About: FC<Props> = ({ detail }) => {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>About</Text>
      <Text style={{ fontFamily: "outfit", lineHeight: 25 }}>
        {detail?.about}
      </Text>
    </View>
  );
};

export default About;
