import React from 'react'

const App = () => {
  const [gridSize, setGridSize] = React.useState(5)
  const [grid , setGrid] = React.useState(createInitialGrid(gridSize))
  const [setTheme, setSetTheme] = React.useState(false)
  const themeChnage = () => {
    setSetTheme(!setTheme)
  }
  function createInitialGrid(size) {
    return Array(size).fill().map(() => Array(size).fill(false));
  }
  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setGridSize(newSize);
    setGrid(createInitialGrid(newSize));
  }
  function resetGrid() {
    const newSize = 5;
    setGridSize(newSize);
    setGrid(createInitialGrid(newSize));
  }
  function toggleAll(){
    const newGrid = grid.map(row => row.map(() => true));
    setGrid(newGrid);
  }
  function randomizeGrid() {
    const newGrid = grid.map(row => row.map(() => Math.random() > 0.5));
    setGrid(newGrid);
  }
  function toggleLight(rowIndex, colIndex){
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = !newGrid[rowIndex][colIndex];
    setGrid(newGrid);
  }
  return (
    <div className="flex flex-col items-center p-6 gap-6"
      style={{
        backgroundColor: setTheme ? '#1a202c' : '#f7fafc',
        color: setTheme ? '#f7fafc' : '#1a202c',
        minHeight: '100vh'
      }}
    >
      <h1 className="text-3xl font-bold mb-4">Interactive Light Grid</h1>
      
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-2">
          <label htmlFor="gridSize" className="font-medium">Grid Size:</label>
          <select 
            id="gridSize" 
            value={gridSize} 
            onChange={handleSizeChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(size => (
              <option key={size} value={size}>{size}x{size}</option>
            ))}
          </select>
        </div>
        <button
         onClick={resetGrid}
         className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Reset
        </button>
        <button
        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-red-600"
         onClick={toggleAll}
        >
          Toggle all
        </button>
                <button
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-red-600"
         onClick={randomizeGrid}
        >
          Random
        </button>
        <button
        className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={themeChnage}
        >
          Dark Mode
        </button>
      </div>
      <div className="grid gap-2" style={{ 
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` 
      }}>
        {grid.map((row, rowIndex) => (
          row.map((isLit, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleLight(rowIndex, colIndex)}
              className={`w-16 h-16 rounded-md cursor-pointer transition-colors duration-200 border-2 ${
                isLit 
                  ? 'bg-yellow-400 border-yellow-500 shadow-lg' 
                  : 'bg-gray-300 border-gray-400'
              }`}
            />
          ))
        ))}
      </div>
      
      <div className="mt-4 text-gray-700">
        <p className="text-center "
        style={{
          color : setTheme? '#FFFFFF' : '#1a202c',
        }}
        >Click on any light to toggle it on/off</p>
      </div>
    </div>
  )
}

export default App
