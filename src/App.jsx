import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [color,setColor] = useState("#000000");
 const colorChanger = (e) =>{
    setColor(e.target.value);
  };
  return (
    <div className='main'>
      <div className="center">
        <h1>Color-Picker</h1>
        <div className="display" style={{ backgroundColor: color}}>
         <p>color : {color}</p>
        </div>
        <div className="box">
          <h2 >Select the Color:</h2>
          <input type="color" value={color} onChange={colorChanger} style={{ backgroundColor: color}} />

        </div>
      </div>
    </div>
  );
};

export default App;
