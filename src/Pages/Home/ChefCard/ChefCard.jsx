import React from 'react';

const ChefCard = ({chef}) => {
    const {_id, name, like}= chef;


    return (
        <div>
            <h1>{_id}</h1>
        </div>
    );
};

export default ChefCard;