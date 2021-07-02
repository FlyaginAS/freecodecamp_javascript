import logo from './logo.svg';
import './App.css';

/************************************************************* */
//Convert HTML Entities
function convertHTML(str) {
  let obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  for (let prop in obj) {
    str = str.replaceAll(prop, obj[prop]);
  }

  return str;
}

console.log(convertHTML('Hamburgers < Pizza < Tacos'));
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
