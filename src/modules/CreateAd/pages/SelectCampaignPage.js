import React from 'react';
import TemplateTable from '../components/SelectCampaign.TemplateTable';
import DraftTable from '../components/SelectCampaign.DraftTable';

export const SelectCampaignPage = ({ ...props }) => {
  return (
    <div>
      <TemplateTable {...props} />
      <DraftTable {...props} />
    </div>
  );
};

export default SelectCampaignPage;
