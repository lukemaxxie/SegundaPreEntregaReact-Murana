
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BootstrapCart = ({ itemName, itemPrice }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <Card.Text>
          Price: ${itemPrice}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default BootstrapCart;
