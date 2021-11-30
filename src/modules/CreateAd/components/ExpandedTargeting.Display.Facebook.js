import React, {useEffect} from 'react';
import Divider from '@material-ui/core/Divider';
import { DisplayTable, MissingDataAlert } from './ExpandedTargeting.SharedComponents.DisplayTable';
import PropTypes from 'prop-types';

const formatGeoTargetingData = (geoArray) =>
  geoArray.map(({ name, region, country_code, type }) => ({
    city: name ?? 'City not Avaialable',
    region: region ?? 'Region not Available',
    country: country_code ?? 'Country not Available',
    type: type ?? 'Type not Available',
  }));

//
const formatFacebookInterestGroups = (interestGroupArray) =>
  interestGroupArray.map(({ name, audience_size_lower_bound, audience_size_upper_bound }) => ({
    name: name ?? 'Name not Available',
    min_audience_size: audience_size_lower_bound ?? 'Minimum Audience Size not Available',
    max_audience_size: audience_size_upper_bound ?? 'Maximum Audience Size not Available',
  }));

const ExpandedFacebookTargetingComponent = ({
  facebookInterestGroups,
  facebookGeoTargeting,
  tableState,
  setSelectedFacebookRows,
  selectedFacebookRows,
}) => {


  useEffect(() => {
    setSelectedFacebookRows({
      ...selectedFacebookRows,
      selectedInterestGroupRows: facebookInterestGroups,
      selectedGeoTargeting: facebookGeoTargeting
    });
  }, []);


  const facebookGeoTargetingAddRowToSelected = (name) => {
    if (!selectedFacebookRows?.selectedGeoTargeting?.includes(name)) {
      setSelectedFacebookRows({
        ...selectedFacebookRows,
        selectedGeoTargeting: [...selectedFacebookRows.selectedGeoTargeting, name],
      });
    }
  };

  const facebookGeoTargetingRemoveRowFromSelected = (name) => {
    if (selectedFacebookRows?.selectedGeoTargeting?.includes(name)) {
      const newSelectedArray = selectedFacebookRows.selectedGeoTargeting.filter(
        (item) => item !== name
      );
      setSelectedFacebookRows({
        ...selectedFacebookRows,
        selectedGeoTargeting: newSelectedArray,
      });
    }
  };

  const facebookGeoTargetingAddAllRowsToSelected = () => {
    const selectedRowNames = tableState?.geoTargetingArray.map((rows) => Object.values(rows)[0]);
    setSelectedFacebookRows({
      ...selectedFacebookRows,
      selectedGeoTargeting: selectedRowNames,
    });
  };

  const facebookInterestGroupsAddRowToSelected = (name) => {
    if (!selectedFacebookRows?.selectedInterestGroupRows?.includes(name)) {
      setSelectedFacebookRows({
        ...selectedFacebookRows,
        selectedInterestGroupRows: [...selectedFacebookRows.selectedInterestGroupRows, name],
      });
    }
  };

  const facebookInterestGroupsRemoveRowFromSelected = (name) => {
    if (selectedFacebookRows?.selectedInterestGroupRows?.includes(name)) {
      const newSelectedArray = selectedFacebookRows.selectedInterestGroupRows.filter(
        (item) => item !== name
      );
      setSelectedFacebookRows({
        ...selectedFacebookRows,
        selectedInterestGroupRows: newSelectedArray,
      });
    }
  };

  const facebookInterestGroupsAddAllRowsToSelected = () => {
    const selectedRowNames = tableState?.interestGroupArray.map((rows) => Object.values(rows)[0]);
    setSelectedFacebookRows({
      ...selectedFacebookRows,
      selectedInterestGroupRows: selectedRowNames,
    });
  };

  return (
    <>
      {facebookGeoTargeting && facebookGeoTargeting?.length ? (
        <DisplayTable
          tableTitle="Facebook Geo Targeting"
          tableHeaders={['', 'Zip Code', 'State', 'Country', 'Type']}
          tableRows={formatGeoTargetingData(facebookGeoTargeting)}
          //   addRowToSelectedDisabled={true}
          //   selectAllRowsDisabled={true}
          addRowToSelected={(name) => facebookGeoTargetingAddRowToSelected(name)}
          removeRowFromSelected={(name) => facebookGeoTargetingRemoveRowFromSelected(name)}
          addAllRowsToSelected={() => facebookGeoTargetingAddAllRowsToSelected()}
          removeAllRowsFromSelected={() => {
            setSelectedFacebookRows({
              ...selectedFacebookRows,
              selectedGeoTargeting: [],
            });
          }}
        />
      ) : (
        <MissingDataAlert severity="info">
          There is no Facebook Location Targets at this time
        </MissingDataAlert>
      )}
      <Divider style={{ height: '40px' }} />
      {facebookInterestGroups && facebookInterestGroups?.length ? (
        <DisplayTable
          tableTitle="Facebook Interest Groups"
          tableHeaders={['', 'Name', 'Minimum Audience Size', 'Maximum Audience Size']}
          tableRows={facebookInterestGroups && formatFacebookInterestGroups(facebookInterestGroups)}
          addRowToSelected={(name) => facebookInterestGroupsAddRowToSelected(name)}
          removeRowFromSelected={(name) => facebookInterestGroupsRemoveRowFromSelected(name)}
          addAllRowsToSelected={() => facebookInterestGroupsAddAllRowsToSelected()}
          removeAllRowsFromSelected={() => {
            setSelectedFacebookRows({
              ...selectedFacebookRows,
              selectedInterestGroupRows: [],
            });
          }}
        />
      ) : (
        <MissingDataAlert severity="info">
          There is no Facebook Interest Groups at this time
        </MissingDataAlert>
      )}
    </>
  );
};

ExpandedFacebookTargetingComponent.propTypes = {
  facebookInterestGroups: PropTypes.array,
  facebookGeoTargeting: PropTypes.array,
  tableState: PropTypes.func,
  setSelectedFacebookRows: PropTypes.func,
  selectedFacebookRows: PropTypes.array
}

ExpandedFacebookTargetingComponent.defaultProps = {
  facebookInterestGroups: [],
  facebookGeoTargeting: [],
  tableState: () => {},
  setSelectedFacebookRows: () => {},
  selectedFacebookRows: [],
}

export default ExpandedFacebookTargetingComponent;
