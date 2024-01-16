import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

function Cardss() {
  return (
    
    <div className='bungkus'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/85782c1df91c28cce80638eaba2e221d.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://s2.bukalapak.com/uploads/content_attachment/258e908220e8d7629010c3c5/w-475/Main-foto-anime-terbaik.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://akcdn.detik.net.id/visual/2022/05/17/spy-x-family-1_169.png?w=400&q=90" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.idntimes.com/content-images/community/2023/02/the-ice-guy-and-his-cool-female-colleague-50ca54fb7cd7f78186bc0ff031b90bfe-584692939959dbb81f6b46735a9de618_600x400.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        
  );
}

export default Cardss;