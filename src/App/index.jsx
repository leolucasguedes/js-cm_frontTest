import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../templates/Main";
import Users from "../templates/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
