import React from 'react';

import axios from 'axios';

function App() {
  const getData =()=>{
    axios.get("https://newsapi.org/v2/everything?q=nepal&apiKey=17e3958800ec4c7e913cc29b812579d4")
    .then((response)=>{
      console.log(response);
    })

  }
  return (
   <>
    <div className="container my-3">
    <button className="btn btn-primary" onClick={getData}>Click</button>
   </div>
   </>
  
  );
}

export default App;