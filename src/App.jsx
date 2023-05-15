import { Formulario } from './Components/Formulario'
import { Home } from './Components/Home'
import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState([])

  return (
      <div className="App">
        <Formulario setUser={setUser} />
        <Home/>
      </div>
  )
}

export default App
