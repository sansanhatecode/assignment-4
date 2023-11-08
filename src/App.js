import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Todolist/>
    </ThemeProvider>
  );
}

export default App;
