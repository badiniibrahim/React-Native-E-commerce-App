import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { FC, useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "@/constants/Colors";
import { db } from "@/configs/FirebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";

type Props = {
  detail: any;
};
const Reviews: FC<Props> = ({ detail }) => {
  const [rating, setRating] = useState<number>(4);
  const [userInput, setUserInput] = useState<string>("");
  const { user } = useUser();
  console.log(detail);

  const onSubmit = async () => {
    const docRef = doc(db, "BusinessList", detail.id as string);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });

    //ToastAndroid.show("Comment added successfully", ToastAndroid.BOTTOM);
  };

  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>Reviews</Text>
      <View>
        <Rating
          showRating={false}
          imageSize={20}
          onFinishRating={(rating: number) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          placeholder="Your comment"
          numberOfLines={4}
          onChangeText={(value) => setUserInput(value)}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            borderColor: "gray",
            textAlignVertical: "top",
            marginBottom: 15,
          }}
        />
        <TouchableOpacity
          onPress={onSubmit}
          disabled={!userInput}
          style={{
            padding: 10,
            backgroundColor: Colors.primary,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {detail?.reviews?.map((item: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 10,
                borderWidth: 1,
                borderColor: "gray",
                marginTop: 10,
                borderRadius: 15,
              }}
            >
              <Image
                source={{ uri: item.userImage }}
                style={{ height: 50, width: 50, borderRadius: 99 }}
              />
              <View style={{ display: "flex", gap: 5 }}>
                <Text style={{ fontFamily: "outfit-medium" }}>
                  {item.userName}
                </Text>
                <Text style={{ fontFamily: "outfit" }}>{item.comment}</Text>
                <Rating
                  imageSize={20}
                  ratingCount={item.rating}
                  style={{ paddingVertical: 10, alignItems: "flex-start" }}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Reviews;
