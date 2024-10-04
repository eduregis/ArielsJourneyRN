import { useFonts } from "expo-font";

import store from "./store/redux/store";
import { Provider } from "react-redux";
import MainRouter from "./MainRouter";

export default function App() {
  const [fontsLoaded] = useFonts({
    "macondo-regular": require("./assets/fonts/Macondo-Regular.ttf"),
  });

  return (
    <>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </>
  );
}
