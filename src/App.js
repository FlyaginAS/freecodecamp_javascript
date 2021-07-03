import logo from './logo.svg';
import './App.css';

/************************************************************* */
//Everything Be True
function truthCheck(collection, pre) {
  return collection.every((item) => item[pre]);
}

console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' },
    ],
    'sex'
  )
);
/**************************************************************/

function App() {
  return <div className="App"></div>;
}

export default App;
