//importing important components and libraries
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { HashRouter, Routes, Route } from "react-router-dom";

//the app component to manage url paths for every page
function App() {
  const pageRestriction =
    localStorage.getItem("user") == null ? <Login /> : <Main />;

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/landing" element={pageRestriction} />
        <Route path="/register" element={pageRestriction} />
        <Route path="/application" element={pageRestriction} />
      </Routes>
    </HashRouter>
  );
}

export default App;
