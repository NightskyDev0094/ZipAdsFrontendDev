import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LibraryCheckmark from '../../../BlueTecUIKit/images/icons/library_green checkmark.png';
import LibraryOpenBook from '../../../BlueTecUIKit/images/library_open book.png';
import CreateCampaignButton from './CreateCampaignButton';
import Library_1 from '../../../BlueTecUIKit/images/gallery/library_1.png';
import Library_2 from '../../../BlueTecUIKit/images/gallery/library_2.png';
import Library_3 from '../../../BlueTecUIKit/images/gallery/library_3.png';
import Library_4 from '../../../BlueTecUIKit/images/gallery/library_4.png';
import Library_5 from '../../../BlueTecUIKit/images/gallery/library_5.png';
import Library_6 from '../../../BlueTecUIKit/images/gallery/library_6.png';

const useStyles = makeStyles((theme) => ({
  imageLibrary: {
    maxWidth: '880px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '250px',
    gridGap: '6px',

    ['@media (max-width:987px)']: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    ['@media (max-width:654px)']: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },

  titleStyle: {
    color: '#00468f',
    margin: 0,
    fontSize: '32px',
    letterSpacing: '1px',
    fontFamily: 'sans-serif',
    paddingTop: '20px',

    ['@media (max-width:1250px)']: {
      fontSize: '2.5rem',
    },

    ['@media (max-width:576px)']: {
      fontSize: '2rem',
    },
  },

  industyImageText: {
    position: 'absolute',
    width: 'fit-content',
    color: 'white !important',
    fontStyle: 'italic',
    top: '50%',
    transform: 'translate(365px, -50%)',
    fontSize: '20px',
    fontFamily: 'sans-serif',

    ['@media (max-width:1024px)']: {
      left: '50%',
      top: '50px',
      transform: 'translate(-50%, 0)',
    },
  },

  industyTextContent: {
    width: '100%',
    backgroundColor: '#00468f',

    ['@media (max-width:1024px)']: {
      paddingBottom: '38px',
    },
  },
}));

function ImageLibrary({
  cropper,
  previews,
  campaigns,
  currentCampaign,
  socialsToPost,
  hasBudgetStepBeenCompleted,
}) {
  const classes = useStyles();
  const setPreviewImage = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      let previewUrl = reader?.result;

      cropper.setRectangleUpImg(previewUrl);
      cropper.setSquareUpImg(previewUrl);
      previews.setSquareImgPreviewUrl(previewUrl);
      previews.setRectangleImgPreviewUrl(previewUrl);
    });
    reader.readAsDataURL(file);
  };
  const onSelectFile = (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        setPreviewImage(e.target.files[0]);
      }
    } catch (e) {
      // setError({ isError: true, message: e });
    }
  };
  const setImageFromUrl = async (url, index) => {
    checkLibraryImage(index);
    await fetch(`${url}`)
      .then((res) => res.blob())
      .then((blob) => {
        let n = url?.lastIndexOf('/');
        let fileName = url?.substring(n + 1);
        const modDate = new Date();
        const newName = fileName;
        const jpgFile = new File([blob], newName, {
          type: 'image/jpg',
          lastModified: modDate,
        });
        setPreviewImage(jpgFile);
      });
  };
  const checkLibraryImage = (index) => {
    let checkmarks = document.querySelectorAll('.libraryCheckmark');

    for (let i = 0; i < checkmarks.length; i++) checkmarks[i].classList.add('d-none');
    checkmarks[index].classList.remove('d-none');
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className={classes.industyTextContent}>
        <div className="position-relative m-auto" style={{ width: 'fit-content' }}>
          <h4 className="text-white m-0 py-2" style={{ fontSize: '32px', fontFamily: 'sans-serif' }}>
            Image Library: Beauty
          </h4>
          <a className={classes.industyImageText} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={LibraryOpenBook} style={{ width: '36px', marginRight: '5px' }} />
            <ins>View other industry images</ins>
          </a>
        </div>
      </div>
      <p className={classes.titleStyle}>Choose an Ad Image:</p>
      <div
        className="py-4 position-relative"
        style={{ paddingLeft: '100px', paddingRight: '100px' }}
      >
        <div className={classes.imageLibrary}>
          <div className="position-relative">
            <img
              className="w-100 h-100"
              src={Library_1}
              onClick={() => setImageFromUrl(Library_1, 0)}
            />
            <img
              className="position-absolute libraryCheckmark d-none"
              src={LibraryCheckmark}
              style={{ width: '60px', bottom: '0', left: '0' }}
            />
          </div>
          <div className="position-relative">
            <img
              className="w-100 h-100"
              src={Library_2}
              onClick={() => setImageFromUrl(Library_2, 1)}
            />
            <img
              className="position-absolute libraryCheckmark d-none"
              src={LibraryCheckmark}
              style={{ width: '60px', bottom: '0', left: '0' }}
            />
          </div>
          <div className="position-relative">
            <img
              className="w-100 h-100"
              src={Library_3}
              onClick={() => setImageFromUrl(Library_3, 2)}
            />
            <img
              className="position-absolute libraryCheckmark d-none"
              src={LibraryCheckmark}
              style={{ width: '60px', bottom: '0', left: '0' }}
            />
          </div>
          <div className="position-relative">
            <img
              className="w-100 h-100"
              src={Library_4}
              onClick={() => setImageFromUrl(Library_4, 3)}
            />
            <img
              className="position-absolute libraryCheckmark d-none"
              src={LibraryCheckmark}
              style={{ width: '60px', bottom: '0', left: '0' }}
            />
          </div>
          <div className="position-relative">
            <img
              className="w-100 h-100"
              src={Library_5}
              onClick={() => setImageFromUrl(Library_5, 4)}
            />
            <img
              className="position-absolute libraryCheckmark d-none"
              src={LibraryCheckmark}
              style={{ width: '60px', bottom: '0', left: '0' }}
            />
          </div>
          <div className="position-relative">
            <img
              className="w-100 h-100"
              src={Library_6}
              onClick={() => setImageFromUrl(Library_6, 5)}
            />
            <img
              className="position-absolute libraryCheckmark d-none"
              src={LibraryCheckmark}
              style={{ width: '60px', bottom: '0', left: '0' }}
            />
          </div>
        </div>
        <div
          className="position-absolute"
          style={{ top: '50%', right: '0', transform: 'translate(0, -50%)' }}
        >
          <CreateCampaignButton>Next</CreateCampaignButton>
        </div>
      </div>
      <p
        className="font-italic font-weight-bold py-4"
        style={{ color: '#00468f', fontSize: '18px' }}
      >
        Upload Your Own
      </p>
      <div className="pb-4">
        <input
          accept="image/*"
          className="d-none"
          id="contained-button-file"
          multiple
          type="file"
          onChange={onSelectFile}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            style={{
              backgroundColor: '#d9d9d9',
              color: '#767676',
              border: '1px solid #767676',
              fontSize: '14px',
            }}
          >
            Choose File
          </Button>
        </label>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  currentCampaign: state.campaigns?.current,
  socialsToPost: state.newAdInfo.socialsToPost,
  hasBudgetStepBeenCompleted: state.stepTracker.BUDGET_STEP,
});

export default connect(mapStateToProps, {})(ImageLibrary);
