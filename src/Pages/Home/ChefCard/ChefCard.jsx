import React from 'react';
import { Button, Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

const ChefCard = ({chef}) => {
    const { _id, name, like, img, experience,no_of_recipe } = chef;


    return (
        <Col md={4} >
            <Container class='bg-black'>
            <Card style={{ width: '18rem', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <Card.Img style={{ height: '14rem' }}  variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='my-0'>
                            Likes: {like}
                        </Card.Text>
                        <Card.Text className='my-0'>
                            Number of recipe: {no_of_recipe} 
                        </Card.Text>
                        <Card.Text className='mt-0'>
                            Year of experience: {experience}
                        </Card.Text>

                        <Button variant="primary"><Link className='text-decoration-none text-light ' to={`/chef/${_id}`}>View Recipes</Link> </Button>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    );
};

export default ChefCard;