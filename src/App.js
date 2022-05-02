import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import "./style/dark.scss";


function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>

        <Routes>

          <Route path="/">

            <Route index element={<Home />} />

            <Route path="login" element={<Login />}></Route>

            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New inputs={userInputs} title="Add new user" />}></Route>
            </Route>

            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route path="new" element={<New inputs={productInputs} title="Add new product" />}></Route>
            </Route>

          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
