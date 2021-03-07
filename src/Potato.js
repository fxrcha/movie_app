import React from 'react';
import PropTypes from "prop-types";

const Potato = ({ name, image, rating }) => {
    return (
        <div>
            <h3>I like {name}!</h3>
            <h4>Rating: {rating}</h4>
            <img src={image} style={{ width: 600 }} alt={name} />
        </div>
    )
}

Potato.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default Potato;