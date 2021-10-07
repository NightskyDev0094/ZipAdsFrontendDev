import React from 'react';
import {shallow, render, mount} from 'enzyme';
import { findByTestAttr, setup } from '../shared_logic/test_helpers';
import FacebookAudienceDisplay from '../components/ConnectSocial.Display.FacebookAudience';
import { currentCampaignProps, previewUrl } from '../shared_logic/mock_props';

const FaceBookAudienceMockComponent = shallow(
	<FacebookAudienceDisplay 
		currentCampaign={currentCampaignProps}
		previewUrl={previewUrl}
	/>
)

describe('Testing Facebook Audience Display Ad', () => {
	test('FaceBook Audience displays without crash ', () => {
		const wrapper = findByTestAttr(FaceBookAudienceMockComponent, "facebook-audience")
		expect(wrapper.length).toBe(1);
	});
	test('Facebook Audience displays props passed to it', () => {
		const backgroundImage = findByTestAttr(FaceBookAudienceMockComponent, "image");
		const headline = findByTestAttr(FaceBookAudienceMockComponent, "headline")
		const description = findByTestAttr(FaceBookAudienceMockComponent, "description");
		const button = findByTestAttr(FaceBookAudienceMockComponent, "button");
		
		expect(backgroundImage.src).toBe(previewUrl)
		expect(headline.text()).toBe(currentCampaignProps.headline)
		expect(description.text()).toBe(currentCampaignProps.description);
		expect(button.text()).toBe(currentCampaignProps.cta);
	});
})