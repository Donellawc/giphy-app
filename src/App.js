import './App.css';
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/RegisterPage";
import SearchPage from "./componentsSearchPage";
import FavoritesPage from "./components/FavoritesPage";



function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
