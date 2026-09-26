import { Navbar } from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
    </div>
  );
}

export default App;