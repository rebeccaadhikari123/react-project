import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



 

import './index.js'

// import { SearchConsoleprovider } from "./command";
import News from "./components/News";


function App() {
  const [searchTerm, setSearchterm] = useState('');

  return (
    <div className='App'>
      <Header searchNews={(search) => setSearchterm(search) } />
      {/* <SearchConsoleprovider /> */}
      
      <Container fluid>
        <Row className='justify-content-md-center'>
          <News searchTerm={searchTerm} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
