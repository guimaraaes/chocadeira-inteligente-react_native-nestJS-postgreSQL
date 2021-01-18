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
export default function Process() {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Outubro 2020</Text>
      <View style={styles.edit}>
        <IconButton icon="pencil" onPress={() => {}} />
      </View>

      <View style={styles.header}>
        <View style={styles.infoHeader}>
          <Text style={styles.info}>30°C</Text>
          <Text style={styles.info}>90%</Text>
          <Text style={styles.info}>8h</Text>
        </View>

        <View style={styles.infoHeader}>
          <Text style={styles.info}>30°C</Text>
          <Text style={styles.info}>90%</Text>
          <Text style={styles.info}>8h</Text>
        </View>
      </View>
      <List.Section style={styles.GroupTab}>
        <List.Item style={styles.Tab} onPress={() => {}} title="HOJE" />
        <List.Item style={styles.Tab} onPress={() => {}} title="SEMANA" />
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
        <Text>processo iniciado dd/mm/aaaa</Text>
        <Button
          style={styles.button}
          onPress={() => {}}
          color="#F9A825"
          mode="contained"
        >
          FINALIZAR
        </Button>
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
    width: Dimensions.get("window").width * 0.8,
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
