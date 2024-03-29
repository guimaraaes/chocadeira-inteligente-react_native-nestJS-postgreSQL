import moment from "moment";
import "moment/locale/pt-br";
import React, { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, IconButton, Paragraph, Title } from "react-native-paper";

export default function ListProcesses(props) {
  function navigateToProcess(id) {
    props.navigation.navigate("process", {
      acessToken: props.acessToken,
      id: id,
    });
  }
  const [refreshing, setRefreshing] = useState(false);
  function _onRefresh() {
    setRefreshing(true);
    props.getProcess();
    setRefreshing(false);
  }
  function navigateToCreateProcess() {
    props.navigation.navigate("createProcess", {
      acessToken: props.acessToken,
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_onRefresh}
          ></RefreshControl>
        }
      >
        {props.processInProgress ? null : (
          <IconButton
            icon="plus"
            size={44}
            onPress={navigateToCreateProcess}
            style={styles.iconAdd}
          />
        )}
        {props.processes
          ? props.processes.map((i, index) => {
              return (
                <Card
                  key={index}
                  onPress={() => {
                    navigateToProcess(i.id);
                  }}
                  style={styles.card(
                    new Date(null).toISOString() === i.data_fim
                  )}
                >
                  <Card.Content>
                    <Title>Início: {moment(i.data_inicio).format("ll")}</Title>
                    <Paragraph>
                      Duração: {moment(i.data_inicio).fromNow()}. Temperatura{" "}
                      {i.temperatura}°C. Umidade {i.umidade}%. Viragem{" "}
                      {Math.ceil(i.viragem / 60)}h{i.viragem % 60}min.
                    </Paragraph>
                  </Card.Content>
                </Card>
              );
            })
          : null}
      </ScrollView>
      <Text style={styles.processTotal}>
        {props.count} {props.count <= 1 ? "processo" : "processos"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3",
    height: "85%",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 0,
  },
  processTotal: {
    alignSelf: "flex-end",
    marginRight: "12%",
    marginTop: "8%",
  },
  iconAdd: {
    marginRight: 20,
    alignSelf: "center",
    backgroundColor: "#F9A825",
  },

  card: (emandamento) => ({
    width: "90%",
    height: 125,
    backgroundColor: emandamento ? "#FFDB7E" : "#FFF",
    shadowColor: "#FFF2",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
    margin: 8,
    marginBottom: 2,
  }),
});
