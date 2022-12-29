import React , {searchconsole, useEffect , useState} from 'react';
import axios from 'axios';



     export const command = searchconsole();
   export const SearchConsoleprovider =(props)=>{
        const [data,setdata] = useState([])
       
        useEffect(() =>{
            axios.get("https://newsapi.org/v2/everything?q=nepal&apiKey=17e3958800ec4c7e913cc29b812579d4")
            .then(response => setdata(response.data))
            .catch(error => console.log(error));
     
  
    }, [data]);
        


      
  return( 
    <SearchConsoleprovider value={{ data }}>{props.news}</SearchConsoleprovider>


  );
 
};
export default command