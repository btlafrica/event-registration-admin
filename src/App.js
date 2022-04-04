import "./App.css";
import Routes from "./routes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
const persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <Toaster />
      </PersistGate>
    </Provider>
  );
}

export default App;
