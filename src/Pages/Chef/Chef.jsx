import { key } from 'localforage';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import { Container } from 'react-bootstrap';

const Chef = () => {
    // const { _id } = useParams();
    const recipe = useLoaderData();

    console.log(recipe)

    return (
        <Container>
            <img src="" alt="" />
            <p>name: {recipe?.name}</p>
            <p>description</p>
            <button>add fevarite</button>
        </Container>
    );
};

export default Chef;