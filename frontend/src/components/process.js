import moment from "moment";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Button, IconButton } from "react-native-paper";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  // backgroundGradientFrom: "#FFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  // barPercentage: 0.5,
  // useShadowColorFromDataset: false, // optional
};

export default function ProcessComponent(props) {
  const [refreshing, setRefreshing] = useState(false);
  function _onRefresh() {
    setRefreshing(true);
    props.getHistory();
    setRefreshing(false);
  }
  const data_umidade = {
    labels: props.history.map((i) => i.date),
    datasets: [
      {
        data: props.history.map((i) => i.umidade),
        color: () => `rgba(99, 153, 191)`, // optional
        strokeWidth: 3, // optional
      },

      {
        data: props.history.map((i) => i.umidade_def),
        color: () => `rgba(20, 40, 62)`, // optional
        strokeWidth: 0.5, // optional
      },
    ],
  };

  const data_temperatura = {
    labels: props.history.map((i) => i.date),
    datasets: [
      {
        data: props.history.map((i) => i.temperatura),
        color: () => `rgba(255, 140, 1)`, // optional
        strokeWidth: 3, // optional
      },

      {
        data: props.history.map((i) => i.temperatura_def),
        color: () => `rgba(200, 55, 5)`, // optional
        strokeWidth: 0.5, // optional
      },
    ],
  };
  function navigateToEdit() {
    props.navigation.navigate("createProcess", {
      acessToken: props.acessToken,
      id: props.process.id,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        {moment(props.process.data_inicio).format("LL")}
      </Text>
      {new Date(null).toISOString() !== props.process.data_fim ? (
        <>
          {/* <Text style={{ marginTop: "10%" }}>variações médias </Text>
          <View style={styles.header}>
            <View style={styles.infoHeader}>
              <Text style={styles.info}>
                {props.process.temperatura_med} °C
              </Text>
              <Text style={styles.info}>{props.process.umidade_med} %</Text>
              <Text style={styles.info}>
                {Math.ceil(props.process.viragem_med / 60)}h{" "}
                {props.process.viragem_med % 60}
              </Text>
            </View>
          </View> */}
        </>
      ) : (
        <>
          <View style={styles.edit}>
            <IconButton icon="pencil" onPress={navigateToEdit} />
          </View>
          {/* <Text>configuração </Text>
          <View style={styles.header}>
            <View style={styles.infoHeader}>
              <Text style={styles.info}>{props.process.temperatura} °C</Text>
              <Text style={styles.info}>{props.process.umidade} %</Text>
              <Text style={styles.info}>
                {Math.ceil(props.process.viragem / 60)}h{" "}
                {props.process.viragem % 60}min
              </Text>
            </View>
          </View> */}
        </>
      )}

      {/* <List.Section style={styles.GroupTab}>
        {new Date(null).toISOString() === props.process.data_fim ? (
          <>
            <List.Item style={styles.Tab} onPress={() => {}} title="HOJE" />
            <List.Item style={styles.Tab} onPress={() => {}} title="SEMANA" />
          </>
        ) : null}
        <List.Item style={styles.Tab} onPress={() => {}} title="PROCESSO" />
      </List.Section> */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_onRefresh}
          ></RefreshControl>
        }
      >
        <View style={styles.Graph}>
          <Text style={{ color: "#bb2505", fontWeight: "bold", marginTop: 10 }}>
            Temperatura: {props.process.temperatura} °C
          </Text>
          <LineChart
            data={data_temperatura}
            width={screenWidth * 1}
            height={screenWidth * 0.45}
            chartConfig={chartConfig}
            withShadow={false}
          />
          <Text style={{ color: "#14283e", fontWeight: "bold", marginTop: 10 }}>
            Umidade: {props.process.umidade} %
          </Text>
          <LineChart
            data={data_umidade}
            width={screenWidth * 1}
            height={screenWidth * 0.45}
            chartConfig={chartConfig}
            withShadow={false}
          />
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            viragem:{" "}
            {moment("2013-05-09T00:00:00-03:00")
              .add(props.process.viragem, "minutes")
              .format("HH:mm")}
            {/* viragem: {Math.ceil(props.process.viragem / 60)}h{props.process.viragem % 60}min */}
          </Text>
          {new Date(null).toISOString() === props.process.data_fim ? (
            <Text style={{ fontWeight: "bold", textTransform: "lowercase" }}>
              última{" "}
              {moment("2021-06-26T00:00:00-03:00")
                .add(props.process.viragem, "minutes")
                .calendar()}{" "}
              || próxima{" "}
              {moment("2021-06-27T00:00:00-03:00")
                .add(props.process.viragem, "minutes")
                .calendar()}
            </Text>
          ) : null}
        </View>

        <View style={styles.footer}>
          <Text>
            processo iniciado em{" "}
            {moment(props.process.data_inicio).format("LL")}{" "}
            {new Date(null).toISOString() !== props.process.data_fim ? (
              <Text>
                e finalizado em {moment(props.process.data_fim).format("LL")}{" "}
              </Text>
            ) : null}
          </Text>

          {new Date(null).toISOString() === props.process.data_fim ? (
            <Button
              style={styles.button}
              onPress={() => {
                Alert.alert(
                  "Deseja finalizar?",
                  "Após finalizado o processo não pode ser retomado",
                  [
                    {
                      text: "Cancelar",
                      // onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "Finalizar",
                      onPress: () => props.putFinishProcess(),
                    },
                  ],
                  { cancelable: false }
                );
              }}
              color="#F9A825"
              mode="contained"
            >
              FINALIZAR
            </Button>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.9,
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    margin: "5%",
  },
  header: {
    width: Dimensions.get("window").width * 0.9,
    // height: Dimensions.get("window").height * 0.1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "3%",
  },
  edit: {
    margin: "-3%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  infoHeader: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  info: {
    fontSize: 25,
    fontWeight: "bold",
  },
  GroupTab: {
    height: "8%",
    flexDirection: "row",
  },
  Tab: {
    width: "33%",
  },
  footer: {
    // height: "18%",
    margin: "3%",
    // flexDirection: "column",
    width: Dimensions.get("window").width * 0.85,
  },
  Graph: {
    margin: "5%",
    alignItems: "center",
    // height: "60%",
  },
  button: {
    width: 150,
    marginTop: 30,
    color: "#fff2",
    alignSelf: "flex-end",
  },
});
