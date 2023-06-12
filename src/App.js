import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import HomePage from "./pages/homePage";
import DetailPage from "./pages/detailPage";
import SavedPage from "./pages/savedPage";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/saved" element={<SavedPage />}></Route>
        <Route path="/search/:query" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
