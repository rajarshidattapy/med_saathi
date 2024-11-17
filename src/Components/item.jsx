import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props ) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} className='image'/>
      <Card.Body>
        <Card.Title>{props.name} </Card.Title>
        <Card.Text>
         {props.quantity}
       </Card.Text>
       <Card.Text>
        {props.price}
       </Card.Text>
        <Button variant="primary">Buy </Button>
      </Card.Body>
    </Card>

  );
}

export default Item;