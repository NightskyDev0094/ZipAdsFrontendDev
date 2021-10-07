import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import ManagePixelsPage from '../pages/ManagePixelsPage';
import { getPixels, deletePixel } from '../../../actions/conversions.fbActions';

const ManagePixelsContainer = ({ getPixels, pixels, deletePixel }) => {
  const [pixelData, setPixelData] = useState([]);

  const getPixelData = useCallback(async () => await getPixels());

  useEffect(() => {
    getPixelData();
  }, []);

  useEffect(() => {
    setPixelData(pixels);
  }, [pixels]);

  return (
    <div>
      <ManagePixelsPage deletePixel={deletePixel} pixels={pixelData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  pixels: state.fbPixels.pixels,
});

export default connect(mapStateToProps, {
  getPixels,
  deletePixel: (id) => deletePixel(id),
})(ManagePixelsContainer);
