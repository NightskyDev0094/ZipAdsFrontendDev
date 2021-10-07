import React from 'react';
import PropTypes from 'prop-types'

/**
 *
 * @param {string} name
 * @returns
 */
 const AdDisplayTitle = ({ name, classes, styles }) => (
	<div style={{ ...styles?.displayNameContainer }} className={classes?.displayNameContainer}>
	  <h2 style={{ ...styles?.displayName }} className={classes?.displayName}>
		{name}
	  </h2>
	</div>
  );
  
  AdDisplayTitle.propTypes = {
	name: PropTypes.string,
	classes: PropTypes.shape({
	  displayNameContainer: PropTypes.object,
	  displayName: PropTypes.object,
	}),
	styles: PropTypes.shape({
	  displayNameContainer: PropTypes.object,
	  displayName: PropTypes.object,
	}),
  };
  
  AdDisplayTitle.defaultProps = {
	name: 'No Name Given',
	classes: {},
	styles: {},
  };

  export default AdDisplayTitle;