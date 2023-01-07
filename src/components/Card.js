import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NewsCard({ data })

{
  console.log(data)
  
  return (
    <Card style={{ width: '20rem',margin: '1rem' }}>
      <Card.Img variant="top" src={data.urlToImage} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
         <Button  className="btn btn-primary" >{data.source.name}</Button> 
         {/* <a href="data.url" className="btn btn-primary">{data.source.name}</a> */}
         
         
       
      </Card.Body>
    </Card>
   
  );
  }


export default NewsCard;
