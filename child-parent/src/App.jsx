
import './App.css'
import CompA from './CompA'
import CompB from './CompB'
import Parent from './Parent'
import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(true);
  const remove = () => {
    setVisible(false);
  }

  const add = () => {
    setVisible(true);
  }

  return (
    <>
      <button onClick={remove}>Remove compA compB</button>
      <button onClick={add}>Add compA compB</button>
      {/* <CompA /> */}
      <Parent />
      {visible ? <div><CompA /><CompB /></div> : null}

    </>
  )
}

export default App
