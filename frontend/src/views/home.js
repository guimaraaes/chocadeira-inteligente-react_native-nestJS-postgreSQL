import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ListProcesses from "../components/list-processes";
export default function Home({ navigation }) {
  return (
    <Provider>
      <View>
        <Header navigation={navigation} />
        <ListProcesses navigation={navigation} />
      </View>
    </Provider>
  );
}
