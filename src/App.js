import './App.css';
import Grid from './components/grid/grid';

function App() {
  return (
    <div className="hex-grid">
      <Grid noOfRows={3} hexPerRow={5}></Grid>
    </div>
  );
}

export default App;
