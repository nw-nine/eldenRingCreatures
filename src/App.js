import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from "react"
import Monsters from "./Monsters"

function App() {

  const [currentMonster, setCurrentMonster] = useState([])
  const [monsters, setMonsters] = useState({})



useEffect(() => {
  let abortController = new AbortController()
  fetch("https://eldenring.fanapis.com/api/creatures",
  { signal: abortController.signal })
  .then(response => response.json())
  .then(data => setMonsters(data))
  .catch(e => {
    if (e.name !== 'AbortError') {
      throw e;
    }
  });
return () => {
  console.log('we are running the cleanup function')
  abortController.abort()
};
}, [])

console.log(monsters);



  return (
    <div className="App">
      <Monsters monsters={monsters} />
    </div>
  );
}

export default App;
