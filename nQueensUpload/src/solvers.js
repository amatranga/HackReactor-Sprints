/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var game = new Board({n: n});
  var solution = [];
  var piecesCount = 0;

  var solver = function(rowIndex) {
    for (var colIndex = 0; colIndex < n; colIndex++) {
      game.togglePiece(rowIndex, colIndex);
      if (!game.hasAnyRooksConflicts()) {
        solution.push(game.get(rowIndex));
        piecesCount++;
        if (piecesCount === n) { break; }
        solver(rowIndex + 1);
      } else {
        game.togglePiece(rowIndex, colIndex);
      }
    }
  };

  solver(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {

  // if (n === 1) { return 1; }
  //
  // var game = new Board({n: n});
   var solutionCount = 0;

   var factorial = function(number){
     if (number === 1){
       return 1;
     } return number * factorial(number - 1);
   }

   solutionCount += factorial(n);

  //
  // var solver = function (rowIndex) {
  //   if (rowIndex === n ) {
  //     solutionCount++;
  //     return;
  //   }
  //   for (var colIndex = 0; colIndex < n; colIndex++) {
  //     game.togglePiece(rowIndex, colIndex);
  //     if (!game.hasAnyRooksConflicts()) {
  //       solver(rowIndex + 1);
  //     }
  //     game.togglePiece(rowIndex, colIndex);
  //   }
  // };
  //
  // solver(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

window.findNQueensSolution = function(n) {
  // TODO refactor to not use hard-coded non-results
  var twoN = [[0, 0], [0, 0]];
  var threeN = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  if (n === 2) { return twoN; }
  if (n === 3) { return threeN; }

  var game = new Board({n: n});
  var solution = [];

  var solver = function (rowIndex) {
    for (var colIndex = 0; colIndex < n; colIndex++) {
      game.togglePiece(rowIndex, colIndex);
      if (rowIndex + 1 === n && !game.hasAnyQueensConflicts()) {
        // solution.push(game.rows());
        for (var i = 0; i < n; i++){
          solution.push(game.get(i).slice());
        }
        return;
      } else if (!game.hasAnyQueensConflicts()) {
        solver(rowIndex + 1);
      }
      if (solution.length < n) {
        game.togglePiece(rowIndex, colIndex);
      }
    }
  };

  solver(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // TODO refactor to not hardcode 0 solutions cases
  if (n <= 1) {
    return 1;
  } else if (n <= 3) {
    return 0;
  }

  var game = new Board({n: n});
  var solutionCount = 0;

  var solver = function (rowIndex) {
    if (rowIndex === n ) {
      solutionCount++;
      return;
    }
    for (var colIndex = 0; colIndex < n; colIndex++) {
      game.togglePiece(rowIndex, colIndex);
      if (!game.hasAnyQueensConflicts()) {
        solver(rowIndex + 1);
      }
      game.togglePiece(rowIndex, colIndex);
    }
  };

  solver(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
