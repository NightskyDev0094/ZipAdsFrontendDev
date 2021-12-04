import React, { useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import { DisplayTable, MissingDataAlert } from './ExpandedTargeting.SharedComponents.DisplayTable';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  tableContainer: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
  divider: {
    '@media (max-width:500px)': {
      display: 'none',
    },
  },
});

const formatGeoTargetingData = (geoArray) =>
  geoArray.map(({ name, country_code, target_type, reach }) => ({
    name: name ?? 'Location not Available',
    country: country_code ?? 'Country not Available',
    reach: reach ?? 'Reach not Available',
    target_type: target_type ?? 'Type not Available',
  }));

const ExpandedGoogleTargetingComponent = ({
  googleGeoTargeting,
  googleKeywords,
  tableState,
  setTableState,
  setSelectedGoogleRows,
  selectedGoogleRows,
  currentCampaign,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setSelectedGoogleRows({
      ...selectedGoogleRows,
      selectedGeoTargeting: googleGeoTargeting,
      selectedKeywordGroupRows: googleKeywords,
    });
  }, []);

  const geoTargetingAddRowToSelected = (name) => {
    if (!selectedGoogleRows?.selectedGeoTargeting?.includes(name)) {
      setSelectedGoogleRows({
        ...selectedGoogleRows,
        selectedGeoTargeting: [...selectedGoogleRows.selectedGeoTargeting, name],
      });
    }
  };

  const geoTargetingRemoveRowFromSelected = (name) => {
    if (selectedGoogleRows?.selectedGeoTargeting?.includes(name)) {
      const newSelectedArray = selectedGoogleRows.selectedGeoTargeting.filter(
        (item) => item !== name
      );
      setSelectedGoogleRows({
        ...selectedGoogleRows,
        selectedGeoTargeting: newSelectedArray,
      });
    }
  };

  const geoTargetingAddAllRowsToSelected = () => {
    const selectedRowNames = tableState.geoTargetingArray.map((rows) => Object.values(rows)[0]);
    setSelectedGoogleRows({
      ...selectedGoogleRows,
      selectedGeoTargeting: selectedRowNames,
    });
  };

  const googleKeywordsAddRowToSelected = (name) => {
    if (!selectedGoogleRows.selectedKeywordGroupRows.includes(name)) {
      setSelectedGoogleRows({
        ...selectedGoogleRows,
        selectedKeywordGroupRows: [...selectedGoogleRows.selectedKeywordGroupRows, name],
      });
    }
  };

  const googleKeywordsRemoveRowFromSelected = (name) => {
    if (selectedGoogleRows.selectedKeywordGroupRows.includes(name)) {
      const newSelectedArray = selectedGoogleRows.selectedKeywordGroupRows.filter(
        (item) => item !== name
      );
      setSelectedGoogleRows({
        ...selectedGoogleRows,
        selectedKeywordGroupRows: newSelectedArray,
      });
    }
  };

  const googleKeywordsAddAllRowsToSelected = () => {
    const selectedRowNames = tableState.keywordArray.map((rows) => Object.values(rows)[0]);
    setSelectedGoogleRows({
      ...selectedGoogleRows,
      selectedKeywordGroupRows: selectedRowNames,
    });
  };

  return (
    <>
      {googleGeoTargeting && googleGeoTargeting.length && currentCampaign && currentCampaign.distance === 'hyper-local' ? (
        <DisplayTable
          tableRows={googleGeoTargeting ? formatGeoTargetingData(googleGeoTargeting) : []}
          tableHeaders={['  ', 'Zip Code', 'Country', 'Reach', 'Target Type']}
          tableTitle="Google Geographical Targeting"
          addRowToSelected={(name) => geoTargetingAddRowToSelected(name)}
          removeRowFromSelected={(name) => geoTargetingRemoveRowFromSelected(name)}
          addAllRowsToSelected={() => geoTargetingAddAllRowsToSelected()}
          removeAllRowsFromSelected={() => {
            setSelectedGoogleRows({
              ...selectedGoogleRows,
              selectedGeoTargeting: [],
            });
          }}
        />
      ) : (
        <MissingDataAlert severity="info">
          There is no Google Targeting info at this time
        </MissingDataAlert>
      )}
      <Divider className={classes.divider} style={{ height: '40px' }} />
      {googleKeywords && googleKeywords.length ? (
        <DisplayTable
          fromGoogle={true}
          tableRows={googleKeywords.length ? googleKeywords : []}
          tableHeaders={[
            '  ',
            'Keywords',
            'Monthly Searches',
            'Competition',
            'Competition Index',
            'Low/High Bid',
            'High/Top Bid',
          ]}
          tableTitle="Google Keywords"
          addRowToSelected={(name) => googleKeywordsAddRowToSelected(name)}
          removeRowFromSelected={(name) => googleKeywordsRemoveRowFromSelected(name)}
          addAllRowsToSelected={() => googleKeywordsAddAllRowsToSelected()}
          removeAllRowsFromSelected={() => {
            setSelectedGoogleRows({
              ...selectedGoogleRows,
              selectedKeywordGroupRows: [],
            });
          }}
        />
      ) : (
        <MissingDataAlert severity="info">
          There is no Google keywords info at this time
        </MissingDataAlert>
      )}
    </>
  );
};

ExpandedGoogleTargetingComponent.propTypes = {
  googleGeoTargeting: PropTypes.array,
  googleKeywords: PropTypes.array,
  tableState: PropTypes.object,
  setTableState: PropTypes.func,
  setSelectedGoogleRows: PropTypes.func,
  selectedGoogleRows: PropTypes.func,
};

ExpandedGoogleTargetingComponent.defaultProps = {
  googleGeoTargeting: [],
  googleKeywords: [],
  tableState: {},
  setTableState: () => {},
  setSelectedGoogleRows: () => {},
  selectedGoogleRows: () => {},
};

export default ExpandedGoogleTargetingComponent;
