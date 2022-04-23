import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import { useState } from 'react';
import Sudoku from './components/Sudoku';
import Solution from './components/Solution';
import './App.css';

function App() {

  const nav=useNavigate();

  let grid2d1 = [];
  let grid2d2 = [];

  for (let i = 0; i < 9; i++) {
    grid2d1.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  for (let i = 0; i < 9; i++) {
    grid2d2.push([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  }

  const sol_= [];

  for (let i = 0; i < 9; i++) {
    sol_.push([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  }

  const [sol,setSol]=useState(sol_);

  function handle1() {
    for (let i = 1; i <= 9; i++) {
      let row = document.getElementsByClassName("r" + i)[0];
      for (let j = 1; j <= 9; j++) {
        let cell = row.querySelector(`.c${j}`).innerText;
        if (parseInt(cell)) {
          grid2d1[i - 1][j - 1] = parseInt(cell);
        } else {
          grid2d1[i - 1][j - 1] = 0;
        }
      }
    }

    fetch(`https://shaleen-app.herokuapp.com/propagation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({grid:grid2d1})
      }).then(function(response){
        return response.json();
    }).then(function(data){
        setSol(data.grid);
        nav("/solution");
    });
  }

  function handle2() {
    for (let i = 1; i <= 9; i++) {
      let row = document.getElementsByClassName("r" + i)[0];
      for (let j = 1; j <= 9; j++) {
        let cell = row.querySelector(`.c${j}`).innerText;
        if (parseInt(cell)) {
          grid2d2[i - 1][j - 1] = parseInt(cell);
        } else {
          grid2d2[i - 1][j - 1] = -1;
        }
      }
    }

    fetch(`https://shaleen-app.herokuapp.com/backtracking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({grid:grid2d2})
      }).then(function(response){
        return response.json();
    }).then(function(data){
      setSol(data.grid);
      nav("/solution");
    });
  }

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Sudoku handle1={handle1} handle2={handle2}/>}/>
      <Route path="/solution" element={<Solution grid={sol}/>}/>
    </Routes>
    </div>
  );
}

export default App;
