import Hexagon from '../hexagon/hexagon.js';
import './grid.css';

const Grid = ({ noOfRows, hexPerRow }) => {
  return (
    <div>
      {Array.from(Array(noOfRows), (e, i) => (
          <div key={i} className="hex-row">
            {Array.from(Array(hexPerRow), (a, k) => (
              <Hexagon key={k}></Hexagon>
            ))}
          </div>
      ))}
    </div>
  );
}

export default Grid;