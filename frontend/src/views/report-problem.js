import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";

export default function ReportProblem(props) {
  return (
    <Provider>
      <View>
        <Header create={true} navigation={props.navigation} />
      </View>
    </Provider>
  );
}
