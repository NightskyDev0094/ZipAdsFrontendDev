import React, { useEffect, useState } from 'react';
import RecommendedTable from '../components/SelectCampaign.RecommendedTable';
import TemplateTable from '../components/SelectCampaign.TemplateTable';
import DraftTable from '../components/SelectCampaign.DraftTable';
import { connect } from 'react-redux';

import { getBusinessInfo } from '../../../actions/businessInfoActions';

export const SelectCampaignPage = ({
  getBusinessInfo,
  businessInfo,
  businessInfoLoading,
  // getCampaign,
  ...props
}) => {
  useEffect(() => {
    getBusinessInfo();
  }, []);

  const [recommendedTemplate, setRecommendedTemplate] = useState(null);
  const industries = [
    'BEAUTY',
    'CONSUMER PRODUCTS AND SERVICES',
    'FINANCE',
    'FITNESS',
    'HEALTH',
    'PERSONAL FINANCE',
    'PET',
    'REAL ESTATE',
    'RESTAURANT',
    'TRAVEL AND LODGING',
  ];

  useEffect(() => {
    let industry = businessInfo[businessInfo.length - 1].industry;
    setRecommendedTemplate(props.templates[industries.indexOf(industry)]);
  }, [businessInfo]);

  return (
    <div>
      <RecommendedTable recommendedTemplate={recommendedTemplate} {...props} />
      <TemplateTable {...props} />
      <DraftTable {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  businessInfo: state.businessInfo.businessInfos,
  businessInfoLoading: state.businessInfo.businessInfoLoading,
  campaigns: state.campaigns.campaigns,
});

export default connect(mapStateToProps, { getBusinessInfo })(SelectCampaignPage);
