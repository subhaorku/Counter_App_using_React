import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import Button from "./Components/Button/Button";
import SetCount from "./Components/SetCount";

function expensiveCalculation(value) {}

function App() {
  const [value, setValue] = useState(0);
  // const[enteredNum,setEnteredNum] = useState(0);

  const [state, setState] = useState("");
  const calc = useMemo(() => expensiveCalculation(value), [value]); // useMemo will say look at the function inside and memorize it by assigning its returned value to 'calc' variable and then call the expensiveCalculation function iff the paramaters inside the dependency array changes.
  /* Suppose the value of state is changing freq so App component is getting re-rendered again and again so expensiveCalculation() function is getting called again and again, which is useless so for that we use useMemo hoook of react */
  const handleplusClick = useCallback(() => {
    // const newValue = value + 1;
    // setValue(newValue);

    setValue((prev) => prev + 1);
  }, []);
  const handleminusClick = useCallback(() => {
    // const newValue = value - 1;
    // setValue(newValue);

    setValue((prevValue) => prevValue - 1);
  }, []);
  const handleSet = (CountValue) => {
    setValue(Number(CountValue));
  };
  // function handleSet(CountValue) {
  //   setValue(CountValue);
  // }}

  // const handleInputChange = (event) =>
  //   {
  //    const newNum = event.target.value;
  //    setEnteredNum(newNum);
  //   }
  console.log("App component rendering");
  const arr = [
    {
      id: 1,
      num: 1,
    },
    {
      id: 2,
      num: 2,
    },
    {
      id: 3,
      num: 3,
    },
  ];

  return (
    <div className="App">
      <Content counterValue={value} />

      <div>
        <Button onButtonClick={handleplusClick}>Increment!</Button>
        <Button onButtonClick={handleminusClick}>Decrement!</Button>
        <SetCount onValueSet={handleSet}></SetCount>
        {/* <div>
          <input type='number' onChange={handleInputChange}/>
          <button className='button' onClick={()=>{
            setValue(enteredNum);
          }}>Set</button> 
          </div>*/}

        {/* <ul>
          {arr.map((item)=>{

            return <li key={item.id}>{item.num}</li>
          })}
          </ul> */}
      </div>
    </div>
  );
}

export default App;

{
  /*
***** Here, whatever is the value of state 'enteredNum' when Set button is hit is only imp , the rendering of components in the stage process " initial value --------> final value " is useless.
rendering of 'Content' component is useless when value of 'value' prop is not changing.
so to handle this we have 'memo' in react. memo will just check whether value of the props of the given function on which it is wrapped has changed or not,based on that it will render that component or will prevent the rendering of that component,when we click on 'Set' button then only content will get rendered.

OR, 
the second way out is to restructure the code, make a new component 'SetCount.js' and define the second state thereout;;


***** when Set button is clicked then button component gets rendered but that is useless because neither the content of button nor the button is onClicked when Set button is hit. So in order to stop the rendering of button we wrap it with memo but that wont work because the prop to button is a function and when App component is rendered again on hitting Set button , the functions passed as props gets newly defined in the memory with same name, so memo detects that the function passed as prop changed so the button component gets re-rendered even when memo is used.
'functions are created as object in memory'.
to solve this issue we can use useCallback hook of react.
in useCallback , first parameter is function, second parameter is array of dependencies, in that array we define all values on modification of whom the function should get re-created otherwise should not


****** DURING dynamic array mapping we should give key to each value otherwise react will not understand it and will render the whole <li></li> tag and wont be able to compare real and virtual dom for this li tag when there is  no unique identification.
      the key can be index of the element provided we are not pushing any new element to array
      it's better to create array of objects where each element will have a unique id to be used as key for mapping.
*/
}
