import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-native-paper";
import CreateProcess from "./views/create-process";
import Home from "./views/home";
import Login from "./views/login";
import Process from "./views/process";
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen
            name="home"
            component={Home}
            initialParams={{ acessToken: "" }}
          />
          <Stack.Screen
            name="process"
            component={Process}
            initialParams={{ acessToken: "" }}
          />
          <Stack.Screen
            name="createProcess"
            component={CreateProcess}
            initialParams={{ acessToken: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
