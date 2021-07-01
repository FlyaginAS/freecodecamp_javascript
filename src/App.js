import logo from './logo.svg';
import './App.css';

/************************************************************* */
function myReplace(str, before, after) {
  let isCapital = (word) => {
    let regExp = new RegExp(/^[A-Z]/);
    return regExp.test(word);
  };
  let toCapital = (word) => {
    return word.replace(/^\w/, (char) => {
      return char.toUpperCase();
    });
  };

  let newStr = str.replace(before, () => {
    //определить регистр буквы в заменяемом слове
    if (isCapital(before)) {
      return toCapital(after);
    } else {
      return after.toLowerCase();
    }
  });
  return newStr;
}

console.log(
  myReplace('I think we should look up there', 'up', 'Down')
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
