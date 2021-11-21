import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import View from "./pages/View";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </>
  );
};

export default App;
