import React from 'react';
import "./style.css"
import Button from './Button';

const App=()=>{
  return(
      <div>
      <h1 style={{textAlign:"center",color:"white"}}>HELLO WORLD!</h1>
      <Button title="appstore"></Button>
      <Button title="playstore"></Button>
     
      </div>
  );
}

export default App;