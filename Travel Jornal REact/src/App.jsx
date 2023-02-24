import data from "./data"
import Navbar from"./Navbar"
import Hero from"./Hero"
import './App.css'

function App() {
  
  const info = data.map(function (el){
    return <Hero 

    item={el}

             />
  })
  return (
    
      <div>
        <Navbar/>
        {info}
        
    
      </div>
  )
}

export default App
