import React from 'react';
import GoogleAdNetworkDisplay from '../modules/CreateAd/components/ConnectSocial.Display.GoogleNetworkAd';

export default {
    title: 'Ad Creation/GoogleAdNetworkDisplay',
    component: GoogleAdNetworkDisplay,
};

const Template = ({ styles, selectedAccount }) => {
    return (<GoogleAdNetworkDisplay  />)
}

export const GoogleAdNetworkDisplayStory = Template.bind({});

GoogleAdNetworkDisplayStory.args = {
    styles: {},
    selectedAccount: 'Johns SeaFood Hang Out'
}