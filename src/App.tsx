import { Navbar } from "./components/Navbar";
import { TaskManager } from "./components/TaskManager";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <TaskManager />
    </div>
  );
}

export default App;