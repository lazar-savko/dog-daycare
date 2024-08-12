import { useState } from 'react'
import './App.css'
import Dogs from './Dogs.jsx'

function App() {

  const [dogs, setDogs] = useState(['Rover', 'Buddy', 'Rex'])
  const [showDogs, setShowDogs] = useState(true)
  const [input, setInput] = useState('')

  function addDog(){
    if (input){
      setDogs([...dogs, input])
      setInput('')
    }
  }


  return (
    <div className="App">
      <h2>🐶 Dog Daycare 🐕</h2>
      <input placeholder="New dog name" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addDog}>Add</button>
      <div>
        <button onClick={() => setShowDogs(!showDogs)}>Show Dogs</button>
        {showDogs && <Dogs dogs={dogs}/>}
      </div>
    </div>
  )
}

export default App
