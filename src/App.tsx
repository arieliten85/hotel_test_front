import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/index.scss";
import "sweetalert2/dist/sweetalert2.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navigation } from "./components/navigation/Navigation";
import { MyCodes } from "./pages/MyCodes";
import { Register } from "./pages/Register";
import { Login } from "./pages/Loagin";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/codes" element={<MyCodes />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
