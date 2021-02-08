import moment from "moment";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Button, IconButton, List } from "react-native-paper";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#FFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  // barPercentage: 0.5,
  // useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
export default function ProcessComponent(props) {
  function navigateToEdit() {
    props.navigation.navigate("createProcess", {
      acessToken: props.acessToken,
      id: props.process.id,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        {/* {props.acessToken} */}
        {moment(props.process.data_inicio).format("LL")}
      </Text>
      {new Date(null).toISOString() !== props.process.data_fim ? (
        <>
          <Text style={{ marginTop: "10%" }}>variações médias </Text>
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
          </View>
        </>
      ) : (
        <>
          <View style={styles.edit}>
            <IconButton icon="pencil" onPress={navigateToEdit} />
          </View>
          <Text>configuração </Text>
          <View style={styles.header}>
            <View style={styles.infoHeader}>
              <Text style={styles.info}>{props.process.temperatura} °C</Text>
              <Text style={styles.info}>{props.process.umidade} %</Text>
              <Text style={styles.info}>
                {Math.ceil(props.process.viragem / 60)}h{" "}
                {props.process.viragem % 60}min
              </Text>
            </View>
          </View>
        </>
      )}

      <List.Section style={styles.GroupTab}>
        {new Date(null).toISOString() === props.process.data_fim ? (
          <>
            <List.Item style={styles.Tab} onPress={() => {}} title="HOJE" />
            <List.Item style={styles.Tab} onPress={() => {}} title="SEMANA" />
          </>
        ) : null}
        <List.Item style={styles.Tab} onPress={() => {}} title="PROCESSO" />
      </List.Section>

      <View style={styles.Graph}>
        <Text>Temperatura</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={screenWidth * 0.25}
          chartConfig={chartConfig}
        />
        <Text>Umidade</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={screenWidth * 0.25}
          chartConfig={chartConfig}
        />
      </View>
      <View style={styles.footer}>
        <Text>
          processo com início em{" "}
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
            onPress={props.putFinishProcess}
            color="#F9A825"
            mode="contained"
          >
            FINALIZAR
          </Button>
        ) : null}
      </View>
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
    height: Dimensions.get("window").height * 0.1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "3%",
  },
  edit: {
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
    height: "15%",
    flexDirection: "column",
    width: Dimensions.get("window").width * 0.8,
  },
  Graph: {
    alignItems: "center",
    height: "42%",
  },
  button: {
    width: 150,
    marginTop: 30,
    color: "#fff2",
    alignSelf: "flex-end",
  },
});
