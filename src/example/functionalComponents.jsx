import React from 'react';
import PropTypes from 'prop-types';

export const HelloWorldFunctional = (props) => {
    return <h1> Hello World {props.name}</h1>
}

HelloWorldFunctional.propTypes = {
    name: PropTypes.string.isRequired,
}