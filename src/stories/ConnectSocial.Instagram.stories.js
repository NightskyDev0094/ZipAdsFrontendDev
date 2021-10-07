import React from 'react';

import InstagramSocialDisplay from '../modules/CreateAd/components/ConnectSocial.Display.Instagram';

export default {
    title: 'Ad Creation/InstagramSocialDisplay',
    component: InstagramSocialDisplay,
};

const Template = ({ styles, selectedAccount }) => {
    return (<InstagramSocialDisplay  />)
}

export const InstagramSocialDisplayStory = Template.bind({});

InstagramSocialDisplayStory.args = {
    styles: {},
    selectedAccount: 'Johns SeaFood Hang Out'
}