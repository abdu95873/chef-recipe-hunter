import React from 'react';
import { Button, Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const { _id, name, like, img, experience } = chef;


    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Year of experience: {experience}
                    </Card.Text>

                    <Button variant="primary"><Link className='text-decoration-none text-light' to={`/chef/${_id}`}>View Recipes</Link> </Button>
                </Card.Body>
            </Card>


        </Container>
    );
};

export default ChefCard;