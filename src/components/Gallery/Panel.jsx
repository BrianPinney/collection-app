import { Card, Col, Image } from "react-bootstrap";

export default function Panel({ data: { id, episode, content, image } }) {
  
    return (
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3">
        <figure>
          <Image src={image} fluid/>
        </figure>
        
        <div className="episode">
          <h3>{episode}</h3>
          <p>{content}</p>
        </div>
      </Card>
    </Col>
  );
}
