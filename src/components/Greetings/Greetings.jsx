import React from 'react';

const Greetings = ({ greeting }) => {
    return (
        <div className="text-white text-4xl font-bold text-center mt-8">
            <h1>{greeting}</h1>
        </div>
    );
}

export default Greetings;


