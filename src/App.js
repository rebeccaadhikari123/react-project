import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import './index.js'

// import { SearchConsoleprovider } from "./command";
import News from "./components/News";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchConsoleprovider /> */}
      <News />
      
    </div>
  );
}

export default App;
