import Home from "./Home";
import Post from "./Post";


function App() {
  let name = "Manikandan Anbalagan";
  return (
    <div className="App">
      {/* <div>
        BSNL India
      </div>
      <button> Add </button>
      <div>
        <span>Name</span>
        <span>Phone</span>
      </div> */}
      {/* <label htmlFor="name">Name: </label>
      <input id="name" type="text"
        placeholder="Type Here"
        defaultValue={name} />
      <Home /> */}
      {/* Display post component multiple times */}
      <Post number={1} name="Mani" />
      <Post number={2} name="Anbalagan" />
      <Post number={3} name="Mary Jane" />
      <Post number={4} name="John Doe" />
      <Post number={5} name="Jane Doe" />

    </div>
  )
}

export default App
