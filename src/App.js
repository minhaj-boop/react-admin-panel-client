import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <div>
      <Router>

        <Routes>

          <Route path="/">

            <Route index element={<Home />} />

            <Route path="login" element={<Login />}></Route>

            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>

            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>

          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
