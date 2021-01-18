import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormLogin from "../components/form-login";
import Header from "../components/header";
export default function Login() {
  return (
    <Provider>
      <View>
        <Header login={true} />
        <FormLogin />
      </View>
    </Provider>
  );
}
