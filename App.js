// import "react-native-gesture-handler~";
import RootNavigation from "./navigation";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs([
  "Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

export default function App() {
  return <RootNavigation />;
}
