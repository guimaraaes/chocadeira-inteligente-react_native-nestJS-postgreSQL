import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

export default function Process() {
  return (
    <View>
      <Text>title</Text>
      <Text>30°C - 90% - 8h (edit)</Text>
      <Text>30°C - 90% - 8h</Text>

      <List.Section style={styles.GroupTab}>
        <List.Item style={styles.Tab} onPress={() => {}} title="HOJE" />
        <List.Item style={styles.Tab} onPress={() => {}} title="SEMANA" />
        <List.Item style={styles.Tab} onPress={() => {}} title="PROCESSO" />
      </List.Section>

      <Text>graph</Text>
      <Text>info</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  GroupTab: {
    flexDirection: "row",
  },
  Tab: {
    width: "33%",
  },
});
