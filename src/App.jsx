import './App.css'
import Home from './pages/Home'
import { feedVegetables } from './api';
feedVegetables();

function App() {

  return (
    <Home />
  );
}

export default App
