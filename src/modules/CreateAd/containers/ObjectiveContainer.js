import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ObjectivePage from '../pages/ObjectivePage';
import { updateCampaign } from '../../../actions/campaignActions';
import { completeStepByCurryingWithMultipleParams as completeStep } from '../../../actions/step.actions';

const ObjectiveContainer = ({
  campaigns,
  currentCampaign,
  socialsToPost,
  updateCampaign,
  completeStep,
  hasObjectiveStepBeenCompleted,
}) => {
  const submitObjective = (objectiveInfo) => {
    const formData = new FormData();
    formData.append('objective', objectiveInfo.objective);
    // Get campaign Id from state

    const campaignId = campaigns.current.id;
    // Save Targeting options to Campaign_Info
    updateCampaign(formData, campaignId);
  };
  const [objective, setObjective] = useState(currentCampaign.objective || 'Conversions');

  return (
    <>
      <ObjectivePage
        socialsToPost={socialsToPost}
        handleSubmitObjective={submitObjective}
        completeStep={completeStep}
        hasObjectiveStepBeenCompleted={hasObjectiveStepBeenCompleted}
        objective={objective}
        setObjective={setObjective}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  currentCampaign: state.campaigns?.current,
  socialsToPost: state.newAdInfo.socialsToPost,
  hasObjectiveStepBeenCompleted: state.stepTracker.OBJECTIVE_STEP,
});

export default connect(mapStateToProps, { updateCampaign, completeStep })(ObjectiveContainer);
