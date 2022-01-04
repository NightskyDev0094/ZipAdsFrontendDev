import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  BoxShadow: {
    width: (props) => props.mobileWidth,
    height: (props) => props.mobileHeight,
    boxShadow: '1px 1px 10px 5px grey',

    ['@media (min-width:450px)']: {
      boxShadow: '1px 1px 10px 5px grey, 10px 0 20px 20px rgb(0 0 0 /30%)',
      width: (props) => props.mainWidth,
      height: (props) => props.mainHeight,
    },
  },
});

/**
 * Manages the dimensions of the ad preview cards and the box shadow required for each of the components
 *
 * @param {string} mobileWidth the width for the preview display on mobile screens
 * @param {string} mobileHeight the height for the preview display on mobile screens
 * @param {string} width the width for the preview display on tablet and laptop screens
 * @param {string} height the height for the preview display on tablet and laptop screens
 * @returns
 */
export default function AdPreviewDisplayContainer({
  mobileWidth,
  mobileHeight,
  width,
  height,
  children,
}) {
  const classes = useStyles({ mobileWidth, mobileHeight, mainWidth: width, mainHeight: height });

  return <div className={classes.BoxShadow}>{children}</div>;
}
