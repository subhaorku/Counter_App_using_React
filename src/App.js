import {useState} from 'react';
import "./App.css";
import Content from "./Components/Content/Content";
import Button from "./Components/Button/Button";
function App() {
  const [value,setValue] = useState(0);
  const handleplusClick =() =>
    {
      const newValue = value+1;
      setValue(newValue);
    }
    const handleminusClick =() =>
      {
        const newValue = value-1;
        setValue(newValue);
      }

  return (
    <div className="App">
      <>
        <Content />
        <div className='counter-value'>{value}</div>
        <div>
          <Button onButtonClick={handleplusClick}>Increment!</Button>
          <Button onButtonClick={handleminusClick}>Decrement!</Button>
        </div>
      </>
    </div>
  );
}

export default App;
