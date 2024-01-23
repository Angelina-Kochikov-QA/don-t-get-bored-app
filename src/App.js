import { useState, useEffect } from 'react';
import './App.css';
import icon from './sleeping_6943844-removebg-preview.png'


function App() {

  const [advice, setAdvice] = useState("");



  useEffect(() => {
    getAdvice()
  },[])

  const getAdvice = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity)
    
  }



  return (
    <div className="App">
    <div className="container">
        <h1>
          Getting bored? <img className='icon' src={icon} width="50px" alt='icon'/>
          <br></br>Click to find activity to do
          <br></br>
        </h1>

        <div className='card'>
          <p>{advice}</p>
          </div>

          <div className='container'>
          <button onClick={getAdvice}>New activity</button>
            </div>

    

    </div>
    </div>
  );
}

export default App;
