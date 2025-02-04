import Game from "./src/components/Game";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = (): JSX.Element => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Game />
  </GestureHandlerRootView>
);

export default App;