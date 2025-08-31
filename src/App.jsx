import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/edit-user/:id" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
