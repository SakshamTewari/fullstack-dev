const GridLights = ({ size = 5 }) => {
  const [grid, setGrid] = React.useState(
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(0)),
  );

  const toggle = (row, col) => {
    const directions = [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      directions.forEach(([dx, dy]) => {
        const x = row + dx;
        const y = col + dy;

        if (x >= 0 && x < size && y >= 0 && y < size) {
          newGrid[x][y] = newGrid[x][y] === 0 ? 1 : 0;
        }
      });
      return newGrid;
    });
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2>Grid Lights</h2>
      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                onClick={() => toggle(rowIndex, cellIndex)}
                role='cell'
                style={{
                  width: 40,
                  height: 40,
                  margin: 2,
                  backgroundColor: cell === 1 ? 'gold' : 'lightgray',
                  border: '1px solid black',
                  cursor: 'pointer',
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const gridLightsRoot = ReactDOM.createRoot(
  document.getElementById('grid-lights'),
);
gridLightsRoot.render(<GridLights />);
