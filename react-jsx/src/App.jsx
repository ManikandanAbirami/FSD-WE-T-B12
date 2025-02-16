import List from "./List"

const list = [
  {
    title: "React",
    objectID: "1",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,

  },
  {
    title: "Redux",
    objectID: "2",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
  }
]

function App() {

  return (
    <div>
      <h1>React Crash Course!!</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <List list={list} />
    </div>
  )
}

// function List() {
//   return (
//     <ul>
//       {
//         list.map(function (item) {
//           return (<li key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//           </li>)
//         })
//       }
//     </ul>
//   )
// }

export default App
