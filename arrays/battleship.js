[[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1]
]

const hitState = {
    HIT: 1,
    MISS: 0, 
    ALREADY_HIT: -1
};

class Cell {
    constructor(boat) {
        this.wasHit = false;
        this.isBoat = boat;
    }

    hit() {
        this.wasHit = true;
    }
}


Cell.prototype.toString = function cellToString() {
    return this.wasHit ? -1 : (this.isBoat ? 1 : 0);
  }

const gameBoard = (x) => {
    const board = [];
    for (let i = 0; i < x; i++) {
        board[i] = [];
        for (let j = 0; j < x; j++) {
            if (j === 0) {
                board[i].push(new Cell(true));
            } else {
                board[i].push(new Cell(false));
            }
        }
    }
    return board;
}


function hit(battleshipBoard, x, y) {
    const cellObject = battleshipBoard[y][x];

    if (cellObject.wasHit) {
        return hitState.ALREADY_HIT;
    }

    if (cellObject.isBoat) {
        cellObject.hit();
        return hitState.HIT;
    }

    return hitState.MISS;
}

function logHitOrMiss(turnOutcome) {
    switch(turnOutcome) {
        case hitState.MISS:
            return 'Miss!';

        case hitState.HIT:
            return 'Hit!!!';

        case hitState.ALREADY_HIT:
            return 'You already hit that spot';
    }
}

const board = gameBoard(5);

console.log(board);
console.log(logHitOrMiss(hit(board, 0, 3)))
console.log(logHitOrMiss(hit(board, 0, 3)))
console.log(board);
