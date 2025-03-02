import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import PicksPage from "./pages/PicksPage";
import { oscarCategories } from "./data/oscarData";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/picks" element={<PicksPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
