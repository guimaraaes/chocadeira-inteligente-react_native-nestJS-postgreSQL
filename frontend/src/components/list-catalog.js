import "moment/locale/pt-br";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function ListCatalog(props) {
  return (
    <View style={styles.container}>
      {/* <Text>{props.acessToken}</Text> */}

      <ScrollView>
        <Card
          onPress={() => {
            //navigateToProcess(i.id);
          }}
          style={styles.card}
        >
          <Card.Content>
            <Title>Galinha</Title>
            <Paragraph>
              Duração: 21 dias. Temperatura 38 a 39,3°C. Umidade 75%. Viragem
              1h50min.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card
          onPress={() => {
            //navigateToProcess(i.id);
          }}
          style={styles.card}
        >
          <Card.Content>
            <Title>Ganso</Title>
            <Paragraph>[informações]</Paragraph>
          </Card.Content>
        </Card>

        <Card
          onPress={() => {
            //navigateToProcess(i.id);
          }}
          style={styles.card}
        >
          <Card.Content>
            <Title>Pato</Title>
            <Paragraph>[informações]</Paragraph>
          </Card.Content>
        </Card>

        <Card
          onPress={() => {
            //navigateToProcess(i.id);
          }}
          style={styles.card}
        >
          <Card.Content>
            <Title>Codorna</Title>
            <Paragraph>[informações]</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3",
    height: "85%",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  card: {
    width: "95%",
    height: 125,
    backgroundColor: "#FFDB7E",
    shadowColor: "#FFF2",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
    margin: 8,
    marginBottom: 2,
  },
});
