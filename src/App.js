import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';



 

import './index.js'

// import { SearchConsoleprovider } from "./command";
import News from "./components/News";



function App() {
  const [searchTerm, setSearchterm] = useState(' ');

  return (
    <div className="App">
       <Header searchNews={(search)=>(setSearchterm(search)) }/> 
      {/* <SearchConsoleprovider /> */}
     
      <News />
      <Container field>
        <div className="justify-content-md-center">
          <News searchTerm={searchTerm} />
        </div>


      </Container>
      
      
     
    
      
    </div>
  );
}

export default App;
