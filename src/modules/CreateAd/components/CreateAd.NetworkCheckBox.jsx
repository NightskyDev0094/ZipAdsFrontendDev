import React from 'react';
import CheckBox from '@material-ui/core/CheckBox';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  Vessel: { marginBottom: '2em', textAlign: 'center' },
  CheckVessel: {
    marginBottom: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
  },
  CheckBox: {
    display: 'inline-block',
    marginRight: '0.3em',
  },
  Image: {
    display: 'inline-block',
    width: '2.5em',
    height: '2.5em',
    objectFit: 'contain',
    ['@media (min-width:450px)']: {
      width: '3.5em',
      height: '3.5em',
    },
  },
  TitleText: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '75%',
    fontSize: '1rem',
    ['@media (min-width:450px)']: {
      fontSize: '1.5rem',
    },
  },
});

/**
 * @param {string} iconSrc An image path for the icon associated with this checkBox
 * @param {string} titleText The text that describes what this checkBox is for
 * @param {function} setSelectedNetworks function that runs whenever the check box is clicked
 */
export default function NetworkCheckBox({ iconSrc, titleText, setSelectedNetworks }) {
  const classes = useStyles();
  return (
    <div className={classes.Vessel}>
      <div className={classes.CheckVessel}>
        <CheckBox
          size="large"
          className={classes.CheckBox}
          defaultChecked={true}
          onChange={(e) =>
            e.target.checked
              ? setSelectedNetworks((prevNetworkState) => [...prevNetworkState, titleText])
              : setSelectedNetworks((prevNetworkState) =>
                  prevNetworkState.filter((n) => n !== titleText)
                )
          }
        />
        <img src={iconSrc} className={classes.Image} alt={`${titleText} icon image`} />
      </div>
      <Typography variant="h3" className={classes.TitleText}>
        {titleText}
      </Typography>
    </div>
  );
}
