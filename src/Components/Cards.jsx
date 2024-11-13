import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageCards() {
  const images = [
    { id: 1, image: "image1.jpeg" },
    { id: 2, image: "image2.jpeg" },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px', gap:"300px" }}>
      {images.map((item) => (
        <Card key={item.id} style={{ width: '18rem', padding: '20px' }}>
          {/* Fixed size for images */}
          <Card.Img 
            variant="top" 
            src={`../public/${item.image}`} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <Card.Body>
            <Card.Title>Card Title {item.id}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Check Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ImageCards;
