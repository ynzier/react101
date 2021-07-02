import React, {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
    {show && (<Form />)}
    <button onClick={()=> setShow(prev => !prev)}>
      toggle
      </button>
    </div>
  );
}

export default App;
