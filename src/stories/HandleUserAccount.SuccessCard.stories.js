import React from 'react';
import {SuccessCard} from '../modules/CreateAd/components/ConnectSocial.HandleUserAccount.Components';
import {makeStyles} from '@material-ui/core';

export default {
    title: 'Ad Creation/Success Card',
    component: SuccessCard,
};

const useStyles = makeStyles(() => ({
    successCard: {
        width: '600px',
        height: '480px',
        maxWidth: '600px',
        maxHeight: '480px',
        padding: '25px',
        borderRadius: '20px',
        textAlign: 'center'
    },
    message: {},
    subText: {},
    successCardIcon: {
        border: '1px solid black',
        width: '300px',
        height: '300px'
    }
}));

const Template = ({ message, subText, styles }) => {
    const classes = useStyles();
    return (
        <SuccessCard 
            message={'You have successfully created a Google Ad Account!'}
            classes={classes}
            styles={styles}
            subText={
            'Feel free to connect accounts on other social media!'
            } 
        />
    )
}

export const SuccessCardStory = Template.bind({});

SuccessCardStory.args = {
    message: '',
    subText: '',
    classes: {},
    styles: {}
}

