import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { findByTestAttr, setup } from '../shared_logic/test_helpers';
import { currentCampaignProps, previewUrl } from '../shared_logic/mock_props';
import GoogleNetworkAd from '../components/ConnectSocial.Display.GoogleNetworkAd';

const GoogleNetworkAd = shallow( 
	<GoogleNetworkAd previewUrl={previewUrl} currentCampaign={currentCampaignProps} />
);

describe('Testing Google Network Ad', () => {
  
	test('Google Component displays without crash ', () => {
    const wrapper = findByTestAttr(GoogleNetworkAd, 'google-network-ad');
    expect(wrapper.length).toBe(1);
  });

  test('Google Component displays props passed to it', () => {
    const headline = findByTestAttr(GoogleNetworkAd, 'headline');
	const image = findByTestAttr(GoogleNetworkAd, "image");
	const avatar = findByTestAttr(GoogleNetworkAd, "avatar");
	const adDescription = findByTestAttr(GoogleNetworkAd, "ad-description");
	const button = findByTestAttr(GoogleNetworkAd, "button");

	expect(headline.text()).toBe(currentCampaignProps.headline)
	expect(image.src).toBe(previewUrl);
	// expect(avatar)
  });

});
