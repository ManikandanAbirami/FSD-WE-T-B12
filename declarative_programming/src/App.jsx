import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cctv from './Cctv';
import Products from './Products';

function App() {
  const [count, setCount] = useState(0); // state variable
  // const count = 0;
  // setCount(count + 1)

  return (
    <div>
      {/* <h2>Customers Entered: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Enter Store</button> */}

      {/* <Cctv /> */}
      <Products />
    </div>
  )
}

export default App
