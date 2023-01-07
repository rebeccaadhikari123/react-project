import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NewsCard({ data })

{
  console.log(data)
  
  return (
   
    <Card style={{ width: '20rem',margin: '1.2rem'}}>
      <Card.Img variant="top" src={data.urlToImage} />
      <div class="Card bg-white">
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
        <Button  className="btn-dark"  >{data.source.name}</Button> 
         {/* <a href="data.url" className="btn btn-success">{data.source.name}</a> */}
      </Card.Body>
      </div>
      </Card>
    
   
  );
  }


export default NewsCard;
