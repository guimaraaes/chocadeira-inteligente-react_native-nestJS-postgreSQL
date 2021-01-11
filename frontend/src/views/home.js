import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Appbar,
  Card,
  IconButton,
  Menu,
  Paragraph,
  Provider,
  Searchbar,
  Title,
} from "react-native-paper";
export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [search, setSearch] = React.useState(true);

  const onChangeSearch = (query) => setSearchQuery(query);

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [active, setActive] = React.useState("");

  return (
    <Provider>
      <View>
        <Appbar.Header style={styles.header}>
          <Menu
            style={styles.menu}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="menu"
                onPress={openMenu}
                // onDismiss={closeMenu}
              ></Appbar.Action>
            }
          >
            <Menu.Item title="s" style={styles.menuHeader}></Menu.Item>
            {/* <View style={styles.menuContent}> */}

            <Menu.Item icon="logout" title="Sair" onPress={() => {}} />
            <Menu.Item
              // style={styles.menuFooter}
              title={
                <View>
                  <Text>por</Text>
                  <Text>SARA GUIMARAES</Text>
                </View>
              }
            />
            {/* </View> */}
            {/* <Drawer.Item label="Francisco da Silva" /> */}
            {/* <Drawer.Section
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action
                  icon="menu"
                  onPress={openMenu}
                  // onDismiss={closeMenu}
                ></Appbar.Action>
              }
              title="Seja bem vindo, "
              // style={styles.menu}
              // style={styles.menuContianer}
            >
              <View style={styles.menuHeader}>
                <Drawer.Item
                  // style ={styles.menuHeader}
                  label={<Text style={styles.client}>Francisco da Silva</Text>}
                ></Drawer.Item>
              </View>
              <Divider />
              <View style={styles.menuContent}>
                <Drawer.Item icon="logout" label="Sair" onPress={() => {}} />
                <Drawer.Item
                  style={styles.menuFooter}
                  label={
                    <View>
                      <Text>por</Text>
                      <Text>SARA GUIMARAES</Text>
                    </View>
                  }
                />
              </View>
            </Drawer.Section> */}
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

        <View style={styles.container}>
          <IconButton
            icon="plus"
            size={44}
            onPress={() => {}}
            style={styles.iconAdd}
          ></IconButton>
          <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return (
                <Card key={i} onPress={() => {}} style={styles.card}>
                  <Card.Content>
                    <Title>Outubro 2020</Title>
                    <Paragraph>
                      Duração: 40 dias. Temperatura 30°C. Umidade 90%. Viragem
                      8h.
                    </Paragraph>
                  </Card.Content>
                </Card>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3",
    // height: "80%",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 0,
  },
  iconAdd: {
    marginRight: 20,
    backgroundColor: "#F9A825",
  },
  header: {
    backgroundColor: "#F9A825",
  },
  menu: {
    // position: "absolute",
    // flex: 1,
    // width: "80%",
    // // height: 200,
    // margin: -6,
    // // justifyContent: "space-between",
    // backgroundColor: "#F2FF",
  },
  menuHeader: {
    // flex: 1,
    // position: "relative",
    height: "80%",
    // width: "40%",
    backgroundColor: "#F9A825",
    marginBottom: 15,
    justifyContent: "flex-end",
  },
  // menuContianer: { height: "100%" },

  menuContent: {
    // flex: 1,
    // position: "absolute",
    height: "50%",
    // padding: 1,
    height: 250,
    margin: 10,
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignContent: "space-between",
    backgroundColor: "#F2FF",
    // height: "80%",
  },
  client: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuFooter: {
    // flex: 1,
    // backgroundColor: "#F9A825",
    // marginBottom: 0,
    position: "relative",
    // height: 400,
    height: "60%",
    margin: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    // margin: "auto",
  },
  search: {
    width: "75%",
  },
  card: {
    width: "90%",
    height: 120,
    backgroundColor: "#FFDB7E",
    shadowColor: "#FFF2",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
    margin: 8,
  },
});
