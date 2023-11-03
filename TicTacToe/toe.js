const cells = document.querySelectorAll("td");
let currentPlayer = "X";
let gameOver = false;

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.color = "green";
      cells[b].style.color = "green";
      cells[c].style.color = "green";
      return true;
    }
  }

  return false;
}

function handleCellClick(cell) {
  if (cell.textContent === "" && !gameOver) {
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      gameOver = true;
      alert(`Player ${currentPlayer} wins!`);
    } else if ([...cells].every((cell) => cell.textContent !== "")) {
      gameOver = true;
      alert("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    handleCellClick(cell);
  });
});
