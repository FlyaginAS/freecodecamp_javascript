import logo from './logo.svg';
import './App.css';

/************************************************************* */
//Arguments Optional
function addTogether(...args) {
  if (args.length === 2) {
    return typeof args[0] === 'number' && typeof args[1] === 'number'
      ? args[0] + args[1]
      : undefined;
  } else {
    if (typeof args[0] !== 'number') {
      return undefined;
    }
    return function (b) {
      return typeof args[0] === 'number' && typeof b === 'number'
        ? args[0] + b
        : undefined;
    };
  }
}

console.log(addTogether('http://bit.ly/IqT6zt'));
/**************************************************************/

function App() {
  return <div className="App"></div>;
}

export default App;
