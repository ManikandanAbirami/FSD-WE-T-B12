import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../../react-jsx/src/Home';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const [show, setShow] = useState(true);
  console.log("The App component is rendered ", useState(2003));
  // let count = 10000;
  // function handleClick() {
  //   count = count + 1;
  //   console.log("The incremened, count is: ", count);
  // }

  useEffect(() => {

    console.log("The useEffect is called");
    // document.title = `You clicked ${count} times`;
    // document.title = `You clicked ${name} times`;
    // document.title = `You clicked ${count} times`;
    // document.title = `You clicked ${name} times`;
    document.title = `You clicked ${count} times`;

  }, [name]);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setName((name) => name + " " + "Wick")}>
          Name is {name}
        </button>
        <button onClick={() => setShow(() => false)}>Show/Hide</button>
        {/* <button onClick={() => handleClick()}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {show && <Home />}
    </>
  )
}

export default App
