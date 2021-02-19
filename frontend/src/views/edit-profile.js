import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormProfile from "../components/form-profile";
import Header from "../components/header";
import api from "../services/api";
export default function EditProfile(props) {
  const [user, setUser] = useState([]);
  async function getUSer() {
    // navigateToHome();

    await api
      .get("/auth/authUser", {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + props.route.params.acessToken,
        },
      })
      .then((response) => {
        setUser(response.data);
        acessToken = response.data;
        // console.log("login");
        console.log(user);
        // navigateToHome();
      })
      .catch((error) => {
        alert("Credenciais inválidas");
        // console.log(error);
      });
  }
  const mounted = useRef();

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (!mounted.current) getUSer();

    return () => {
      source.cancel();
    };
  }, [user]);
  return (
    <Provider>
      <View>
        <Header create={true} navigation={props.navigation} />
        <FormProfile user={user} />
      </View>
    </Provider>
  );
}
