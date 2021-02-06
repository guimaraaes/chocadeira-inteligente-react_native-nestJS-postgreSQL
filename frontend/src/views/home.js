import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ListProcesses from "../components/list-processes";
export default function Home(props) {
  return (
    <Provider>
      <View>
        <Header navigation={props.navigation} />
        <ListProcesses
          navigation={props.navigation}
          acessToken={props.route.params.acessToken}
        />
      </View>
    </Provider>
  );
}
