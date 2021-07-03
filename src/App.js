import logo from './logo.svg';
import './App.css';

/************************************************************* */
//Binary Agents
function binaryAgent(str) {
  let arr = str.split(' ');

  console.log(arr);
  //from binary to decimal
  arr = arr.map((item) => parseInt(item, 2));
  console.log(arr);

  //from decimal to char uses String.fromCharCode
  let resultStr = String.fromCharCode(...arr);
  return resultStr;
}

console.log(
  binaryAgent(
    '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
  )
);
/**************************************************************/

function App() {
  return <div className="App"></div>;
}

export default App;
