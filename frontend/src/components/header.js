import moment from "moment";
import React, { useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Appbar, IconButton, Menu, Searchbar } from "react-native-paper";
export default function Header(props) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(String(moment())));
  const [searchQuery, setSearchQuery] = React.useState("");
  const [search, setSearch] = React.useState(true);

  const onChangeSearch = (query) => setSearchQuery(query);

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [active, setActive] = React.useState("");

  return (
    <Appbar.Header style={styles.header}>
      {/* <Text> {moment(date).format()}</Text> */}
      {props.login ? null : (
        <Menu
          // style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" onPress={openMenu}></Appbar.Action>
          }
        >
          <View style={styles.menu}>
            <View style={styles.menuHeader}>
              <IconButton
                icon="close"
                onPress={closeMenu}
                style={styles.buttonClose}
              />
              <View style={{ flexDirection: "row", margin: 8 }}>
                <Image
                  source={require("../../assets/chicken-pngrepo-com.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Menu.Item
                  title={<Text style={styles.client}>Olá! Bem-vinde!</Text>}
                />
              </View>
            </View>

            <Menu.Item
              icon="home"
              title="Início"
              onPress={() => {
                closeMenu();
                props.navigation.navigate("home");
                // closeMenu();
              }}
            />

            <Menu.Item
              icon="egg"
              title="Catálogo chocagem"
              onPress={() => {
                closeMenu();
                props.navigation.navigate("catalog");
              }}
            />

            <Menu.Item
              icon="logout"
              title="Sair"
              onPress={() => {
                props.navigation.navigate("login");
                closeMenu();
              }}
            />
            <Menu.Item
              style={styles.menuFooter}
              title={
                <View>
                  {/* <Text style={styles.menuFooter}>por</Text>
                  <Text>SARA GUIMARÃES</Text> */}
                </View>
              }
            />
          </View>
        </Menu>
      )}
      <Appbar.Content
        style={{ alignItems: "center" }}
        title="chocadeira inteligente"
      />

      {props.login ? null : props.process ? (
        <>
          {/* <Appbar.Action icon="share" onPress={() => {}} /> */}
          {new Date(null).toISOString() === props.process_finish ? null : (
            <Appbar.Action
              icon="delete"
              onPress={() => {
                Alert.alert(
                  "Deseja excluir?",
                  "Após excluir o processo não será possível recuperar ele",
                  [
                    {
                      text: "Cancelar",
                      // onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "Excluir",
                      // onPress: () => props.putFinishProcess(),
                    },
                  ],
                  { cancelable: false }
                );
              }}
            />
          )}
        </>
      ) : props.create ? null : show ? (
        <>
          <Searchbar
            placeholder="Buscar por processo"
            onChangeText={onChangeSearch}
            style={styles.search}
            value={searchQuery}
          />
          <Appbar.Action
            icon="close"
            onPress={() => {
              //setSearch(!search);
              setShow(false);
            }}
          ></Appbar.Action>
        </>
      ) : (
        <Appbar.Action
          icon="magnify"
          onPress={() => {
            setShow(true);
            // setSearch(!search);
          }}
        />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F9A825",
  },
  menu: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.8,
    flex: 1,
    margin: 0,
  },
  menuHeader: {
    height: "25%",
    backgroundColor: "#F9A825",
    marginBottom: 5,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  buttonClose: {
    alignSelf: "flex-end",
  },

  client: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuFooter: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    // backgroundColor: "#F9A825",
  },
  search: {
    marginLeft: -10,
    visible: false,
    // backgroundColor: "#FFF",
    width: Dimensions.get("window").width * 0.7,
  },
});
