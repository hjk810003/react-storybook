import React from 'react';
import PropTypes from 'prop-types';

export const Test = ({ title }) => {
	return (
		<div>{ title }</div>
	)
};

Test.propTypes = {
	title: PropTypes.string.isRequired,
};

Test.defaultProps = {
	title: '타이틀',
};
