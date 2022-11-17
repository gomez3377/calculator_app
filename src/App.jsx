import React from 'react'
import Buttons from './components/Buttons'
import './index.css'


function App() {
  const [buttonFaces,setbuttonFaces] = React.useState([
    "AC","+/-", "%", "/", 
    7, 8, 9, "*",
    4,5,6, "-",
    1,2,3, "+",
    0,".","=" 
  ])

  

  const buttonElements = buttonFaces.map(buttonValue =><Buttons buttonValue={buttonValue}/> )
  




  return (
    <main className="App flex items-center bg-lightGreenishGray h-screen w-screen">
      <div id='calculator-container' className='w-1/2 h-1/2 mx-auto bg-gray-900/50'>
        <div className="operation-container w-full bg-pink-100 h-1/4">
           <h1>123</h1>
           <h1>456</h1>
        </div>
        
        <div className="calcualtor-buttons grid grid-cols-4 grid-row-3 gap-0 w-full h-3/4">
         
         {buttonElements}

     
        </div>
      </div>
    </main>
  )
}

export default App
