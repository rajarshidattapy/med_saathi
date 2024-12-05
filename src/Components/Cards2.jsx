import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function BasicExample(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details', { state: { id: props.id } });
  }

  return (
    <Card style={{ width: '18rem' , margin:"5px"}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
     The Age is {props.age} and the address is {props.address}
        </Card.Text>
        <Button variant="primary" onClick={e => navigate(`/patient/view/${props.id}`)}>More Details</Button>      </Card.Body>
    </Card>
  );
}

export default BasicExample;