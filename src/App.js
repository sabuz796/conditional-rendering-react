// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Greetings from './components/Greetings';


function App() {

  const [familiar, setFamiliar] = useState(false)

  const handleButton = ()=>{
    setFamiliar(!familiar)
  }
  return (
    <div className="App">
      {/* toString() method use to show the result 'false'*/}
      <h1>Conditional rendering in React</h1><br />
      <h1>Is Familiar: {familiar.toString()}</h1> 
      <button onClick = {handleButton}>Toggle Friend</button>
      <Greetings familiar = {familiar}></Greetings>
    </div >
  );
}

export default App;
