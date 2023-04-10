import React from 'react';
import PropTypes from 'prop-types';

export const Test = ({ title }) => {
	return (
		<div>{ title }</div>
	)
};

Test.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Test contents
   */
	title: PropTypes.string.isRequired,
};

Test.defaultProps = {
	title: '타이틀',
};
