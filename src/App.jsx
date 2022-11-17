import React from 'react'
import Buttons from './components/Buttons'
import NumOne from './components/NumOne'
import NumTwo from './components/NumTwo'
import './index.css'
import {nanoid} from 'nanoid'

function App() {
  const [firstNumberValue, setFirstNumberValue] = React.useState("")
  const [secondNumberValue, setSecondNumberValue] = React.useState("")
  

  const buttons ={ 
    buttonFaces:[
    "AC","+/-", "%", "/", 
    7, 8, 9, "*",
    4,5,6, "-",
    1,2,3, "+",
    0,".","=" ],
    id:nanoid()
  }

  
  function numButtonClicked(){

    console.log("button clicked!!")

  }
  

  const buttonElements = buttons.buttonFaces.map(buttonValue =><Buttons 
    key={buttons.id}
    id={buttons.id}
    buttonClicked={numButtonClicked} 
    buttonValue={buttonValue}/> )
  




  return (
    <main className="App flex items-center h-screen w-screen">
      <div id='calculator-container' className='w-1/2 h-1/2 mx-auto border border-white'>
        <div className="operation-container relative flex flex-col w-full bg-black/25 h-1/4 text-white">
            <NumOne />
            <NumTwo value={secondNumberValue} />
        </div>
        
        <div className="calcualtor-buttons grid grid-cols-4 grid-row-3 gap-0 w-full h-3/4">
         
         {buttonElements}

     
        </div>
      </div>
    </main>
  )
}

export default App
