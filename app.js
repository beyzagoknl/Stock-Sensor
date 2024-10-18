const readline = require('readline');

// Function for grid
const parseSensorReading = (reading, size) => {
    const grid = [];
    let row = [];
    for (let i = 0; i < reading.length; i++) {
        row.push(reading[i]);
        if (row.length === size) {
            grid.push(row);
            row = [];
        }
    }
    return grid;
};

// 2x2 ve 3x1 blocks func.
const findItems = (grid) => {
    let itemCount = 0;
    
    const rows = grid.length;
    const cols = grid[0].length;

    // 2x2 block
    for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < cols - 1; j++) {
            if (grid[i][j] === '1' && grid[i][j+1] === '1' && grid[i+1][j] === '1' && grid[i+1][j+1] === '1') {
                itemCount++;
                grid[i][j] = grid[i][j+1] = grid[i+1][j] = grid[i+1][j+1] = 'X'; 
            }
        }
    }

    // 3x1 or 1x3 blocks
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols - 2; j++) {
            if (grid[i][j] === '1' && grid[i][j+1] === '1' && grid[i][j+2] === '1') {
                itemCount++;
                grid[i][j] = grid[i][j+1] = grid[i][j+2] = 'X'; 
            }
        }
    }

    for (let i = 0; i < rows - 2; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && grid[i+1][j] === '1' && grid[i+2][j] === '1') {
                itemCount++;
                grid[i][j] = grid[i+1][j] = grid[i+2][j] = 'X'; 
            }
        }
    }

    return itemCount;
};

// Input functions 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    const gridSize = Math.sqrt(line.length); 
    const grid = parseSensorReading(line, gridSize);
    const stockLevel = findItems(grid);
    console.log(stockLevel);
});
