//App
import Router from "./src/routes/index";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
