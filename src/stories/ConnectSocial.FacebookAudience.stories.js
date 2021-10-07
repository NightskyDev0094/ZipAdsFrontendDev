import React from 'react';
import FacebookAudienceDisplay from '../modules/CreateAd/components/ConnectSocial.Display.FacebookAudience';

export default {
    title: 'Ad Creation/FacebookAudienceDisplay',
    component: FacebookAudienceDisplay,
};

const Template = ({ styles, selectedAccount }) => {
    return (<FacebookAudienceDisplay  />)
}

export const FacebookAudienceDisplayStory = Template.bind({});

FacebookAudienceDisplayStory.args = {
    styles: {},
    selectedAccount: 'Johns SeaFood Hang Out'
}