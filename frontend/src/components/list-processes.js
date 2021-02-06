import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, IconButton, Paragraph, Title } from "react-native-paper";
export default function ListProcesses(props) {
  function navigateToProcess() {
    props.navigation.navigate("process", {
      acessToken: props.acessToken,
    });
  }

  function navigateToCreateProcess() {
    props.navigation.navigate("createProcess", {
      acessToken: props.acessToken,
    });
  }
  return (
    <View style={styles.container}>
      <IconButton
        icon="plus"
        size={44}
        onPress={navigateToCreateProcess}
        style={styles.iconAdd}
      ></IconButton>
      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <Card key={i} onPress={navigateToProcess} style={styles.card}>
              <Card.Content>
                <Title>Outubro 2020</Title>
                <Paragraph>
                  Duração: 40 dias. Temperatura 30°C. Umidade 90%. Viragem 8h.
                </Paragraph>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3",
    height: "80%",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 0,
  },
  iconAdd: {
    marginRight: 20,
    backgroundColor: "#F9A825",
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
