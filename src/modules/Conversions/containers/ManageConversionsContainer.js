import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import ManageConversionsPage from '../pages/ManageConversionsPage';
import { getConversions, deleteConversion } from '../../../actions/conversions.gaActions';

const ManageConversionsContainer = ({ getConversions, conversions, deleteConversion }) => {
  const [conversionData, setConversionData] = useState([]);

  const getConversionData = useCallback(async () => await getConversions());

  useEffect(() => {
    getConversionData();
  }, []);

  useEffect(() => {
    setConversionData(conversions);
  }, [conversions]);

  return <ManageConversionsPage deleteConversion={deleteConversion} conversions={conversionData} />;
};

const mapStateToProps = (state) => ({
  conversions: state.gaConversions.conversions,
});

export default connect(mapStateToProps, {
  getConversions,
  deleteConversion: (id) => deleteConversion(id),
})(ManageConversionsContainer);
