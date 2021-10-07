import React from 'react';
import {shallow, render, mount} from 'enzyme';

import { findByTestAttr} from '../shared_logic/test_helpers';
import AdPreviewDisplays from '../components/Campaign.Display.AdCarousel.AdPreviews';
import { AdPreviewDisplaysProps } from '../shared_logic/mock_props';

describe('Ad Previews test', () => {
	test('Shows correct slide', () => {
		[
			{number: 1, dataTest: "fb-feed-slide"},
			{number: 2, dataTest: "fb-audience-slide"},
			{number: 3, dataTest: "instagram-slide"},
			{number: 4, dataTest: "google-search-slide"},
			{number: 5, dataTest: "google-display-slide"},
			{number: 6, dataTest: "google-square-display-slide"},
		].forEach(({number, dataTest}) => {
			AdPreviewDisplaysProps.adSlideNumber = number;
			const wrapper = shallow(<AdPreviewDisplays {...AdPreviewDisplaysProps} />);
			findByTestAttr(wrapper, dataTest);
		});
	});
});

