
import './App.css'

function Square() {
  return <button className="square">X</button>
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>My first React application.</p>
      <Square />
    </div>
  )
}

export default App
