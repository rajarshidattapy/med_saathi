import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' , margin:"5px"}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
     The Age is {props.age} and the address is {props.address}
        </Card.Text>
        <Button variant="primary">More Details </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;