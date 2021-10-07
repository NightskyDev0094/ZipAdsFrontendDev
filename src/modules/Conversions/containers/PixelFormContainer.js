import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PixelFormPage from '../pages/PixelFormPage';
import { addPixel } from '../../../actions/conversions.fbActions';
import { getFbAdAccounts } from '../../../actions/account.fbAdActions';

const PixelFormContainer = ({ accounts, addPixel, getFbAdAccounts }) => {
  const history = useHistory();
  const [facebookAdAccount, setFacebookAdAccount] = useState('');
  const [name, setName] = useState('');

  const [accountData, setAccountData] = useState([]);

  const getAccountData = useCallback(async () => await getFbAdAccounts());

  useEffect(() => {
    getAccountData();
  }, []);

  useEffect(() => {
    setAccountData(accounts);
  }, [accounts]);

  const handleUpdateAdAccount = (adAccount) => {
    setFacebookAdAccount(adAccount);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append('account_id', facebookAdAccount);
    formData.append('name', name);
    addPixel(formData);
    history.push('/manage-pixels');
  };
  return (
    <div>
      <PixelFormPage
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        adAccount={facebookAdAccount}
        handleUpdateAdAccount={handleUpdateAdAccount}
        accountData={accountData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  accounts: state.fbAdAccount.adAccounts,
});

export default connect(mapStateToProps, { addPixel, getFbAdAccounts })(PixelFormContainer);
