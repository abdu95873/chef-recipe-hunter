
import { keys } from 'localforage';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard/ChefCard';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import MarqueeSection from './MarqueeSection/MarqueeSection';
import AccordionSection from './Accordion/AccordionSection';
import Row from 'react-bootstrap/Row';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {
    const chef = useLoaderData();

    const {user} = useContext(AuthContext);
    console.log(user);
    return (

        <Container>
            <Banner></Banner>

            <Row>
                <h1 className='text-center my-5'>Chef List </h1>
            {
                chef.map(chef => <ChefCard
                    key={chef._id}
                    chef={chef}

                >
                </ChefCard>)
            }
            </Row>

            <MarqueeSection></MarqueeSection>
            <AccordionSection></AccordionSection>
        </Container>
    );
};

export default Home;