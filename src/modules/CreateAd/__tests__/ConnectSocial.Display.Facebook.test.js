import React from 'react';
import {shallow, render, mount} from 'enzyme';
import { findByTestAttr, setup } from '../shared_logic/test_helpers';
import FacebookSocialDisplay from '../components/ConnectSocial.Display.Facebook';
import CampaignImageDisplay from '../components/Campaign.ImageDisplay';
import { currentCampaignProps, previewUrl } from '../shared_logic/mock_props';

const FacebookMockComponent = shallow(
	<FacebookSocialDisplay 
		currentCampaign={currentCampaignProps}
		previewUrl={previewUrl}
	/>
);

const ImageDisplayMockComponent = shallow(
	<CampaignImageDisplay
		form={currentCampaignProps}
		previewUrl={previewUrl}
	/>
)

describe('FaceBookSocial and Campaign Image Display', () => {
	test("Ad renders without error", () => {
		const mockComponent = findByTestAttr(FacebookMockComponent, "facebook-social-display");
		expect(mockComponent.length).toBe(1);
	});
	
	test("Image display renders with out error", () => {
		const mockComponent = findByTestAttr(ImageDisplayMockComponent, "campaign-image-display");
		expect(mockComponent.length).toBe(1);
	});
	
	test("Image display renders with out error", () => {
		const mockComponent = findByTestAttr(ImageDisplayMockComponent, "campaign-image-display");
		expect(mockComponent.length).toBe(1);
	});
	
	test("Facebook Ad/Image Display displays correct props being passed to it", () => {
		const adImage = findByTestAttr(ImageDisplayMockComponent, "facebook-image")
		const headline = findByTestAttr(ImageDisplayMockComponent, "headline")
		const headline2 = findByTestAttr(ImageDisplayMockComponent, "headline2")
		const button = findByTestAttr(ImageDisplayMockComponent, "button");
		// expect(adImage.prop('src')).toBe(previewUrl);
		expect(headline.text()).toBe(currentCampaignProps.headline);
		expect(headline2.text()).toBe(currentCampaignProps.headline2);
		expect(button.text()).toBe(currentCampaignProps.cta);
	});
});






