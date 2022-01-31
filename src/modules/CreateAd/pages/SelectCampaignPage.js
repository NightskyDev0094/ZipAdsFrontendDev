import React from 'react';
import RecommendedTable from '../components/SelectCampaign.RecommendedTable';
import TemplateTable from '../components/SelectCampaign.TemplateTable';
import DraftTable from '../components/SelectCampaign.DraftTable';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';
// import { connect } from 'react-redux';

// import { getBusinessInfo } from '../../../actions/businessInfoActions';

export const SelectCampaignPage = ({
  // getBusinessInfo,
  // businessInfo,
  // businessInfoLoading,
  recommendedTemplate,
  ...props
}) => {
  return (
    <div className="select-campaign">
      {recommendedTemplate && (
        <RecommendedTable recommendedTemplate={recommendedTemplate} {...props} />
      )}
      <TemplateTable {...props} />
      <DraftTable {...props} />
      <BlueTecLandingFooter />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   // businessInfo: state.businessInfo.businessInfos,
//   // businessInfoLoading: state.businessInfo.businessInfoLoading,
//   // campaigns: state.campaigns.campaigns,
// });

export default SelectCampaignPage;
