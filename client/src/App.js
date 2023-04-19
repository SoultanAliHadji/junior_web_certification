//importing important components and libraries
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//the app component to manage url paths for every page
function App() {
  const pageRestriction =
    localStorage.getItem("User") == null ? <Login /> : <Main />;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/landing" element={pageRestriction} />
        <Route exact path="/register" element={pageRestriction} />
        <Route exact path="/application" element={pageRestriction} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
