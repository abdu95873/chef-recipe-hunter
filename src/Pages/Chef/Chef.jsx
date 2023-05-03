import { key } from 'localforage';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const Chef = () => {
    // const { _id } = useParams();
    const { recipe, img } = useLoaderData();

    console.log(recipe)

    return (
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img src="" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <img src={img} alt="" />
            <p>name: {recipe?.name}</p>
            <p>description</p>
            <button>add fevarite</button>
        </Container>
    );
};

export default Chef;