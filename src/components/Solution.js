const Solution = (props) => {
    
    let row = [[],[],[],[],[],[],[],[],[]];
    let grid = [];
    for (let i = 0; i < 9; i++) {
      row[0].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[0][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[1].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[1][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[2].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[2][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[3].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[3][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[4].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[4][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[5].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[5][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[6].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[6][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[7].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[7][i]}</div>
      );
    }
    for (let i = 0; i < 9; i++) {
      row[8].push(
        <div
          className={`cell c${i+1}`}
          key={i}
        >{props.grid[8][i]}</div>
      );
    }
  
    for (let i = 0; i < 9; i++) {
      grid.push(
        <div className={`row r${i+1}`}  key={i}>
          {row[i]}
        </div>
      );
    }

    return (
      <>
      <h1>Sudoku Solution</h1>
        <div className="table">{grid}</div>
        <div className="btns">
        </div>
  
      </>
    );
  };

  export default Solution;