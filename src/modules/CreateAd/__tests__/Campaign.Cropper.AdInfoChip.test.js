import React from 'react';
import {shallow, render, mount} from 'enzyme';

import AdInfoChip from '../components/Campaign.Cropper.AdInfo.Chip';
import { findByTestAttr} from '../shared_logic/test_helpers';

describe('AdInfoChip Tests', () => {
	test('If passed correct displayname it will return correct display', () => {
		const componentTestInput = [
			{
				displayName: 'Google Display Network',
				expectingLabel: 'The suggested size for this ad is 625 X 330'
			},
			{
				displayName: 'Google Display Network Square Imag',
				expectingLabel: 'The suggested size for this ad is 600 X 600'
			},
			{
				displayName: 'Google Ad Network Image',
				expectingLabel: 'The suggested size for this ad is 625 X 340'

			},
			{
				displayName: 'Facebook Feeds',
				expectingLabel: 'The suggested size for this ad is 625 X 330'
			},
			{
				displayName: 'Facebook Audience Network',
				expectingLabel: 'The suggested size for this ad is 340 X 600'
			},
			{
				displayName: 'Instagram Feeds',
				expectingLabel: 'The suggested size for this ad is 600 X 600'
			},
			{
				displayName: 'Google search ads',
				expectingLabel: 'The suggested size for this ad is 1000 X 800'

			}
		];
		
		componentTestInput.forEach(({displayName, expectingLabel}) => {	
			const AdInfoChipMockComponent = shallow(<AdInfoChip displayName={displayName} />);
			const label = findByTestAttr(<AdInfoChipMockComponent />, 'ad-info-chip');
			expect(label.text()).toBe(expectingLabel);
		})
	})
})