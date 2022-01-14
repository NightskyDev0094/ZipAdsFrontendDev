import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import ManageConversionsPage from '../pages/ManageConversionsPage';
import { getConversions, deleteConversion } from '../../../actions/conversions.gaActions';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

const ManageConversionsContainer = ({ getConversions, conversions, deleteConversion }) => {
  const [conversionData, setConversionData] = useState([]);

  const getConversionData = useCallback(async () => await getConversions());

  useEffect(() => {
    getConversionData();
  }, []);

  useEffect(() => {
    setConversionData(conversions);
  }, [conversions]);

  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 297.38px)' }}>
        <ManageConversionsPage deleteConversion={deleteConversion} conversions={conversionData} />
      </div>
      <BlueTecLandingFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  conversions: state.gaConversions.conversions,
});

export default connect(mapStateToProps, {
  getConversions,
  deleteConversion: (id) => deleteConversion(id),
})(ManageConversionsContainer);
