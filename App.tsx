import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./navigation/Root/RootStack";

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
