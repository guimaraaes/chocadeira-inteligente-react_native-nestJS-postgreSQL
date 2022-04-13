import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ListCatalog from "../components/list-catalog";

export default function Catalog(props) {
  return (
    <Provider>
      <View>
        <Header
          navigation={props.navigation}
          acessToken={props.route.params.acessToken}
        ></Header>
        <ListCatalog></ListCatalog>
      </View>
    </Provider>
  );
}
