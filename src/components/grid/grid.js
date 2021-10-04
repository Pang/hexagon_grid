import Hexagon from '../hexagon/hexagon.js';

const Grid = ({ noOfRows, hexPerRow }) => {


  return (
    <div>
      {Array.from(Array(noOfRows), (e, i) => (
          <div key={i} className="hex-row">
            {Array.from(Array(hexPerRow), () => (
              <Hexagon></Hexagon>
            ))}
          </div>
      ))}
    </div>
  );
}

export default Grid;