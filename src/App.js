import logo from './logo.svg';
import './App.css';

/************************************************************* */
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return undefined;
}

console.log(fearNotLetter('abce'));
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
