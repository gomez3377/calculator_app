import React from "react";
import Buttons from "./components/Buttons";
import NumOne from "./components/NumOne";
import NumTwo from "./components/NumTwo";
import "./index.css";
import { nanoid } from "nanoid";

function App() {
  const [firstNumberValue, setFirstNumberValue] = React.useState("");
  const [secondNumberValue, setSecondNumberValue] = React.useState("");

  const [buttons, setButtons] = React.useState(generateButtons());

  function generateButtons() {
    const buttonValues = [
      "AC",
      "+/-",
      "%",
      "/",
      7,
      8,
      9,
      "*",
      4,
      5,
      6,
      "-",
      1,
      2,
      3,
      "+",
      0,
      ".",
      "=",
    ];
    const buttonsArray = [];
    for (let i = 0; i < 19; i++) {
      buttonsArray.push({
        buttonValue: buttonValues[i],
        id: nanoid(),
      });
    }
    return buttonsArray;
  }
React.useEffect(()=> {

},[])

  

  function buttonClicked(currendId) {
    let currentOperator
    let currentNumber
    let previousNumber
    let currentButton;

    buttons.find((button) => {
      if (button.id === currendId) {
        currentButton = button.buttonValue;
          if(typeof currentButton === "number"){
          setFirstNumberValue(prevNum => prevNum + currentButton)

        }else if(currentButton === "+") {
          console.log("You added!")
          
        }
        
        else if(currentButton === "AC"){
          setSecondNumberValue("")
        }

      }
      
      return currentButton
    });

    
  }
  console.log(secondNumberValue)
  function addNumbers(x,y) {
    return x + y
  }
  function subtractNumbers(x,y) {
    return x - y
  }
  function multiplyNumbers(x,y) {
    return x * y
  }
  function divideNumbers(x,y) {
    return x / y
  }
  
  
  





  const buttonElements = buttons.map((button) => (
    <Buttons
      key={button.id}
      id={button.id}
      buttonClicked={() => buttonClicked(button.id)}
      buttonValue={button.buttonValue}
    />
  ));

  return (
    <main className="App flex items-center h-screen w-screen">
      <div
        id="calculator-container"
        className="w-1/2 h-1/2 mx-auto border border-white"
      >
        <div className="operation-container relative flex flex-col w-full bg-black/25 h-1/4 text-white">
          <NumOne value={firstNumberValue} />
          <NumTwo value={secondNumberValue} />
        </div>

        <div className="calcualtor-buttons grid grid-cols-4 grid-row-3 gap-0 w-full h-3/4">
          {buttonElements}
        </div>
      </div>
    </main>
  );
}

export default App;
