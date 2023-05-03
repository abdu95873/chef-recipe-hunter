import { key } from 'localforage';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import photo from '../..//assets/background.jpg';

const Chef = () => {
    // const { _id } = useParams();
    const { recipe, img, name, description, like, no_of_recipe, experience, recipe1, recipe2, recipe3 } = useLoaderData();

    console.log(recipe)

    return (
        <Container>
            <Card className="bg-dark text-white ">
                <Card.Img src={photo} alt="Card image" />
                <Card.ImgOverlay >
                    <Card.Img style={{ height: '10rem', width: '8rem' }} variant="top" src={img} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <small>{description}</small>
                    </Card.Text>
                    <Card.Text className='my-0'>
                        Likes: {like}
                    </Card.Text>
                    <Card.Text className='my-0'>
                        Number of recipe: {no_of_recipe}
                    </Card.Text>
                    <Card.Text className='mt-0'>
                        Year of experience: {experience}
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>
            <div>
                <Card className='my-5'>
                    <Card.Header as="h5">{recipe1.name}</Card.Header>
                    <Card.Body>
                    <Card.Img style={{ height: '40rem' }}  variant="top" src={recipe1.img} />
                    <Card.Text className='
                    mt-5'>
                        Ingredient: {recipe1.ingredient}method
                        </Card.Text>
                        <Card.Text>
                        Method: {recipe1.method}
                        </Card.Text>
                        <Button variant="primary">Go Add favorite</Button>
                    </Card.Body>
                </Card>
                <Card className='my-5'>
                    <Card.Header as="h5">{recipe2.name}</Card.Header>
                    <Card.Body>
                    <Card.Img style={{ height: '40rem' }}  variant="top" src={recipe2.img} />
                    <Card.Text className='
                    mt-5'>
                        Ingredient: {recipe2.ingredient}method
                        </Card.Text>
                        <Card.Text>
                        Method: {recipe2.method}
                        </Card.Text>
                        <Button variant="primary">Go Add favorite</Button>
                    </Card.Body>
                </Card>
                <Card className='my-5'>
                    <Card.Header as="h5">{recipe3.name}</Card.Header>
                    <Card.Body>
                    <Card.Img style={{ height: '40rem' }}  variant="top" src={recipe3.img} />
                    <Card.Text className='
                    mt-5'>
                        Ingredient: {recipe3.ingredient}method
                        </Card.Text>
                        <Card.Text>
                        Method: {recipe3.method}
                        </Card.Text>
                        <Button variant="primary">Go Add favorite</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Chef;