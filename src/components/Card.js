import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NewsCard({ data }) {
  return (
    <Card style={{ width: '25rem',margin: '1.5rem' }}>
      <Card.Img variant="top" src={data.urlToImage} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
         <Button  class="btn btn-primary" >{data.source.name}</Button> 
       
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
