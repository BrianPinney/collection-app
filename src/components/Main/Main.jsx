import { HashLink } from "react-router-hash-link";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Main(){

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                    <h1>Gallery</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae ipsam laborum ea aperiam asperiores dolores accusantium animi placeat, maiores molestias. Praesentium, ad neque. Officiis velit provident illum! Ad, cupiditate.</p>
                    <HashLink to="/#gallery">
                        <Button  className="bg-secondary">
                        See Gallery
                        </Button>
                    </HashLink>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}