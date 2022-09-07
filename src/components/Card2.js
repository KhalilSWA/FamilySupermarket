import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function BgColorExample({item}) {
  return (
    <>
      {[
        'Light',
        'Light',
        'Light',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
            <Card.Img variant="top" src={item.img} />
          <Card.Header>10% de remise</Card.Header>
          <Card.Body>
            <Card.Title>{variant} {item.name}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>
          </Card.Body>
          <>
      <Button variant="danger" size="lg" active>      </Button>Add to favoris
      <Button variant="success" size="lg" active>      </Button>Add to cart
    </>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;