import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import DescriptionPage from "./pages/DescriptionPage";
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
