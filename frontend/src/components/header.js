import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Appbar, IconButton, Menu, Searchbar } from "react-native-paper";

export default function Header() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [search, setSearch] = React.useState(true);

  const onChangeSearch = (query) => setSearchQuery(query);

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [active, setActive] = React.useState("");

  return (
    <Appbar.Header style={styles.header}>
      <Menu
        // style={styles.menu}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" onPress={openMenu}></Appbar.Action>}
      >
        <View style={styles.menu}>
          <View style={styles.menuHeader}>
            <IconButton
              icon="close"
              onPress={closeMenu}
              style={styles.buttonClose}
            />

            <Menu.Item
              title={<Text style={styles.client}>Francisco da Silva</Text>}
            />
          </View>

          <Menu.Item icon="logout" title="Sair" onPress={() => {}} />
          <Menu.Item
            style={styles.menuFooter}
            title={
              <View>
                <Text style={styles.menuFooter}>por</Text>
                <Text>SARA GUIMARAES</Text>
              </View>
            }
          />
        </View>
      </Menu>
      {search ? (
        <>
          <Appbar.Content title="chocadeira inteligente"></Appbar.Content>
          <Appbar.Action
            icon="magnify"
            onPress={() => {
              setSearch(!search);
            }}
          ></Appbar.Action>
        </>
      ) : (
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
              setSearch(!search);
            }}
          ></Appbar.Action>
        </>
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
    backgroundColor: "#F9A825",
  },
  search: {
    width: "75%",
  },
});
