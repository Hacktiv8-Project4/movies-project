import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/saved" element={<SavedPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
