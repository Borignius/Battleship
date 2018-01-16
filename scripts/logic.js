function fireMissle(displayBoard, board, coordinates) {
  var missleloaction = board [coordinates.y] [coordinates.x];
  if ( missleloaction > 1) {
   displayBoard[coordinates.y] [coordinates.x] = hit;
 } else {
   displayBoard[coordinates.y] [coordinates.x] = miss;
 }
  // console.log (displayBoard);
  return displayBoard;
}

function generateComputerMove(board) {
  var compy = (Math.floor(Math.random() * 10));
  var compx = (Math.floor(Math.random() * 10));
  board.x = compx;
  board.y = compy;
  if (board [compy] [compx] == -1 || board [compy] [compx] == 1 ){
    generateComputerMove(board);
  }
  return {x: board.x, y: board.y}
}

function isWon(board){
  var totes = 0;
  var windscar = 17;
  board.forEach(function(row){
    row.forEach(function(box){
      if (box == h) {
        totes++
      }
    })
  })
  if (totes === windscar){
    gameOver = true;
  } else {
    gameOver = false;
  }
  console.log(totes)
  return gameOver;
}
