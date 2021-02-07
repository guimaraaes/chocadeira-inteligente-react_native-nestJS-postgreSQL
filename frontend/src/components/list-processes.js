import moment from "moment";
import "moment/locale/pt-br";
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
      {props.processInProgress ? null : (
        <IconButton
          icon="plus"
          size={44}
          onPress={navigateToCreateProcess}
          style={styles.iconAdd}
        />
      )}

      <ScrollView>
        {/* {console.log(props.processes)} */}
        {props.processes.map((i) => {
          return (
            <Card
              key={i.id}
              onPress={navigateToProcess}
              style={styles.card(new Date(null).toISOString() === i.data_fim)}
            >
              <Card.Content>
                <Title>Início: {moment(i.data_inicio).format("LL")}</Title>
                <Paragraph>
                  Duração: {moment(i.data_inicio).fromNow()}. Temperatura{" "}
                  {i.temperatura} °C. Umidade
                  {i.umidade}%. Viragem {Math.ceil(i.viragem / 60)}h
                  {i.viragem % 60}min.
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

  card: (emandamento) => ({
    width: "90%",
    height: 120,
    backgroundColor: emandamento ? "#FFDB7E" : "#FFF",
    shadowColor: "#FFF2",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
    margin: 8,
  }),
});
