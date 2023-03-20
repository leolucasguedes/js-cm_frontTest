import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../templates/Main";
import Users from "../templates/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
