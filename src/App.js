import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
