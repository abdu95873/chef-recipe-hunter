
import { keys } from 'localforage';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard/ChefCard';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import MarqueeSection from './MarqueeSection/MarqueeSection';
import AccordionSection from './Accordion/AccordionSection';

const Home = () => {
    const chef = useLoaderData();
    return (

        <Container>
            <Banner></Banner>

            {
                chef.map(chef => <ChefCard
                    key={chef._id}
                    chef={chef}

                >

                </ChefCard>)

            }

            <MarqueeSection></MarqueeSection>
            <AccordionSection></AccordionSection>
        </Container>
    );
};

export default Home;