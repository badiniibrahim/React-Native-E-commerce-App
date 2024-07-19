import { View, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import { Colors } from "@/constants/Colors";
import Intro from "@/components/BusinessDetail/intro";
import ActionButton from "@/components/BusinessDetail/ActionButton";
import About from "@/components/BusinessDetail/About";
import Reviews from "@/components/BusinessDetail/Reviews";

const BusinessDetail = () => {
  const navigation = useNavigation();
  const { businesid } = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<any>();

  const getBusinessDetailById = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "BusinessList", businesid as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDetail({ id: docSnap.id, ...docSnap.data() });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching category list:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBusinessDetailById();
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          color={Colors.primary}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        />
      ) : (
        <View>
          <Intro detail={detail} />
          <ActionButton />
          <About detail={detail} />
          <Reviews detail={detail} />
        </View>
      )}
    </ScrollView>
  );
};

export default BusinessDetail;
