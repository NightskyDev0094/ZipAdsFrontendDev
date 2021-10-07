import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { findByTestAttr, setup } from '../shared_logic/test_helpers';
import { currentCampaignProps, previewUrl } from '../shared_logic/mock_props';
import GoogleSocialDisplay from '../components/ConnectSocial.Display.Google';

const GoogleMockComponent = shallow(<GoogleSocialDisplay currentCampaign={currentCampaignProps} />);

describe('Testing Facebook Audience Display Ad', () => {
  test('Google Component displays without crash ', () => {
    const wrapper = findByTestAttr(GoogleMockComponent, 'google');
    expect(wrapper.length).toBe(1);
  });
  test('Google Component displays props passed to it', () => {
    const adLink = findByTestAttr(GoogleMockComponent, 'ad-link');
    const headline = findByTestAttr(GoogleMockComponent, 'headline');
    const headlineAndDescription = findByTestAttr(GoogleMockComponent, 'headline2-ad-description');

    expect(adLink).toBe(currentCampaignProps.ad_link);
    expect(headline).toBe(currentCampaignProps.headline);
    expect(headlineAndDescription).toBe(
      `${currentCampaignProps.headline2} : ${currentCampaignProps.ad_description}`
    );
  });
});
