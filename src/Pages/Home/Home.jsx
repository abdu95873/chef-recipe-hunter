
import { keys } from 'localforage';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard/ChefCard';

const Home = () => {
    const chef = useLoaderData();
    return (
        <div>
            
            {
                chef.map(chef => <ChefCard
                key={chef._id}
                chef = {chef}
                    
                >

                </ChefCard>)
                    
            }
        </div>
    );
};

export default Home;