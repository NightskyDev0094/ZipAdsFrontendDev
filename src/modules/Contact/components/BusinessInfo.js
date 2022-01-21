import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  InfoContainer: {
    margin: 'auto',
    width: 'fit-content',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: '25px',
    fontWeight: '600',

    '@media (max-width:718px)': {
      fontSize: '20px',
    },
  },
  info: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '80px',
    margin: '50px 0',

    '@media (max-width:965px)': {
      gridTemplateColumns: '1fr',
      gridGap: '50px',
    },
  },
}));

const BusinessInfo = () => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <div className="w-100 h-100">
      <div className={clsx(classes.InfoContainer, classes.textStyle)}>
        <p className="text-center m-0" style={{ color: '#00468f', fontSize: '30px' }}>
          Business Information
        </p>
        <div className={classes.info}>
          <div>
            <p className="font-weight-light m-0">Business Name:</p>
            <p>J.APPLESEED CO</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Website:</p>
            <p>www.jappleseedco.com</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Business Address:</p>
            <p>555 Main St</p>
            <p>Townsville, CA 10101</p>
          </div>
          <div>
            <p className="font-weight-light m-0">Industry:</p>
            <p>Business</p>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '25px',
          }}
        >
          <Button
            className="text-light font-weight-bold border-0"
            style={{
              backgroundColor: '#00468f',
              borderRadius: '8px',
              width: '120px',
              height: '55px',
              fontSize: '18px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
