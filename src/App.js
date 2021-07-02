import logo from './logo.svg';
import './App.css';

/************************************************************* */
//Drop it

function dropElements(arr, func) {
  let index = arr.findIndex((item) => func(item));
  if (index < 0) {
    return [];
  }

  return arr.slice(index);
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
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
