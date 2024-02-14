import './App.css';
import Bedroom from './components/Bedroom.js';
function App() {
  return (
    <div className="App">
        <Bedroom height={200} width={300} />
        <h5>{process.env.REACT_APP_ID}</h5>
    </div>
  );
}

export default App;
