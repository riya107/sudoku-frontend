const Sudoku = (props) => {

  function inphandle(e) {
    if (e.target.innerText.length === 2 && +e.target.innerText) {
      e.target.innerText = e.target.innerText.slice(1);
      document.execCommand("selectAll", false, null);
      document.getSelection().collapseToEnd();
    }
    if (!+e.target.innerText) {
      e.target.innerText = "";
    }
  }

  let row = [];
  let grid = [];
  for (let i = 1; i <= 9; i++) {
    row.push(
      <div
        className={`cell c${i}`}
        onInput={inphandle}
        key={i}
        contentEditable
      ></div>
    );
  }

  for (let i = 1; i <= 9; i++) {
    grid.push(
      <div className={`row r${i}`} key={i}>
        {row}
      </div>
    );
  }
  return (
    <>
    <h1>Sudoku Solver</h1>
      <div className="table">{grid}</div>
      <div className="btns">
      <button onClick={props.handle1}>Propagation</button>
      <button onClick={props.handle2}>Backtracking</button>
      </div>

    </>
  );
};

export default Sudoku;
