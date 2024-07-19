import { View, ScrollView, FlatList } from "react-native";
import React, { FC } from "react";
import { BusinessType } from "@/app/businesslist/[category]";
import ExploreListCard from "./ExploreListCard";

type Props = {
  categoryList: BusinessType[];
};
const ExploreBusinessList: FC<Props> = ({ categoryList }) => {
  return (
    <ScrollView>
      <FlatList
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExploreListCard item={item} />}
      />
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

export default ExploreBusinessList;
