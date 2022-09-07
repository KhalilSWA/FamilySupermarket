import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function BasicExample({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <>
      <Button variant="danger" size="lg" active>      </Button>
      <Button variant="success" size="lg" active>      </Button>
    </>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;