import logo from './logo.svg';
import './App.css';

/************************************************************* */
//Sum All Odd Fibonacci Numbers before num
function sumFibs(num) {
  //получить массив чисел фибоначчи
  let arrFib = [1, 1];
  for (let i = 2; i <= num; i++) {
    arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
  }
  // console.log(arrFib);
  //отфильтровать только нечентные
  arrFib = arrFib.filter((item) => item % 2 > 0);
  // console.log(arrFib);
  //просуммировать все числа в массиве
  let sumFib = arrFib.reduce(
    (acc, item) => (item <= num ? (acc += item) : (acc += 0)),
    0
  );
  // console.log(sumFib);
  return sumFib;
}

console.log(sumFibs(4));
/**************************************************************/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
