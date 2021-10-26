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

  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      if (businessInfo[businessInfo.length - 1].industry === 'industry' + i) {
        setRecommendedTemplate(props.templates[i]);
        break;
      }
    }
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
