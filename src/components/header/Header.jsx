import React from 'react'
import './header.css'
import axios from 'axios';
import logo from '../../assets/Newslogo.jpg'
// import {MdSearch} from 'react-icons/md'
import { Button } from 'react-bootstrap';

function Header() {
  const getData =()=>{
    axios.get("https://newsapi.org/v2/everything?q=nepal&apiKey=17e3958800ec4c7e913cc29b812579d4")
    .then((response)=>{
      console.log(response);
    })

  }
  return (
   <>
   <div className="Header">
    <div className="menuContainer"></div>
   <header>
    
   <div class=" container Newssite__container">
  
  <img className='logo' src={logo} alt="Newssite" />
 
  <a  class='active' href=" #">Home</a>
 
  <div class="category">
    <button class="dropbtn">Category
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="category-content">
      <a href=" #animal">Animal</a>
      <a href=" #birds">Birds</a>
      <a href=" #novel">Novel</a>
      <a href=" #clothes">Clothes</a>
    </div>
  </div> 
  
  
  <div class="search-container">
    <form action="/action_page.category">
      <input type="text" placeholder='Search..' name="search"/>
       {/* <button type='submit' className="btn btn-primary">
       <article className="search-container">
        <MdSearch className='search-container-icon'  />

      </article></button>  */}
      <Button as="a" variant="primary">
    Button as link
  </Button>
      {/* <article className="search-container">
        <MdSearch className='search-container-icon'  />

      </article> */}
    </form>
  
</div>
</div>
</header>
      </div>
<div className="container click__container">
    <button className="btn btn-primary" onClick={getData}>Click</button>
   
</div>

  
  </>
  
  );
}

export default Header



 

   







