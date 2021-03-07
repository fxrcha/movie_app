import React from 'react';

const Potato = ({ name, image }) => {
    return (
        <div>
            <h3>I like {name}!</h3>
            <img src={image} style={{ width: 600 }} />
        </div>
    )
}

export default Potato;