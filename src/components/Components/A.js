
import React from 'react';
import PropTypes from 'prop-types';

export const A = ({values}) => <a href={values.href} target='_blank' rel="noopener noreferrer">{values.label}</a>;

A.propTypes = {
  values: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};
