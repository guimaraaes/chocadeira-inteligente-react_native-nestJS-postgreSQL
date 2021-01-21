import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormLogin from "../components/form-login";
import Header from "../components/header";
export default function Login({ navigation }) {
  return (
    <Provider>
      <View>
        <Header login={true} />
        <FormLogin navigation={navigation} />
      </View>
    </Provider>
  );
}
