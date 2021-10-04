import './App.css';
import Hexagon from './components/hexagon.js';

function App() {
  return (
    <div>
      <div className="hex-row">
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
      </div>
      <div className="hex-row">
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
      </div>
      <div className="hex-row">
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
      </div>
      <div className="hex-row">
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
        <Hexagon></Hexagon>
      </div>
    </div>
  );
}

export default App;
