import Navigation from "./components/navigation/navigation"
import './App.css';
import { DataProvider } from "./data";

function App() {
  return (
    < div className="App container">
      <DataProvider>
      <Navigation/>
      </DataProvider>
      
      
      
     
    </div>
  );
}

export default App;
