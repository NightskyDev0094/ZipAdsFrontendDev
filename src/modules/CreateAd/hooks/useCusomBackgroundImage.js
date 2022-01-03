import { useState, useEffect } from 'react';

/**
 * Handles the displaying of either the the campaign image or a custom image if it has been added
 *
 * @param {string} campaignImgUrl image url for all campaign preview of type either square or rectangle
 * @param {*} previewUrl image url for a specific campaign preview of type either square or rectangle
 */
export default function useCustomBackgroundImage(campaignImgUrl, previewUrl) {
  const [backgroundImageProp, setBackgroundImageProp] = useState(campaignImgUrl);

  useEffect(() => {
    if (previewUrl) {
      setBackgroundImageProp(previewUrl);
    }
  }, [previewUrl]);

  return {
    backgroundImageProp,
  };
}
