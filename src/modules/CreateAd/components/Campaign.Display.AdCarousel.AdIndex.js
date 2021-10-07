import React from 'react';
import PropTypes from 'prop-types';
import {Typography, makeStyles} from '@material-ui/core'; 

const useStyles = makeStyles(() => ({
	root: {
		fontFamily: 'Silka'
	}
})); 

const AdIndex = ({currentIndex}) => {
	const classes = useStyles();
	return(
		<div className={classes.root}>
			<Typography variant="h4">
				{currentIndex}/6
			</Typography>
		</div>
	)
}

AdIndex.propTypes = {
	currentIndex: PropTypes.number
}

AdIndex.defaultProps = {
	currentIndex: 1
}

export default AdIndex;