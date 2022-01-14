import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import ConversionFormPage from '../pages/ConversionFormPage';
import { addConversion, clearConversionErrors } from '../../../actions/conversions.gaActions';
import { getGaAdAccounts } from '../../../actions/account.gaAdActions';
import {
  ErrorHandler,
  ErrorFallBackPageWrapper as ErrorFallBackPage,
} from '../components/ErrorBoundary.Component';
import BlueTecLandingFooter from '../../../BlueTecUIKit/BlueTecLandingFooter';

const LoadingSpinner = () => (
  <div
    style={{
      display: 'flex',
      marginTop: '200px',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'scale(1.2)',
    }}
  >
    <CircularProgress size={120} />
  </div>
);

const ConversionFormContainer = ({
  accounts,
  getGaAdAccounts,
  addConversion,
  conversions,
  conversionError,
}) => {
  const history = useHistory();
  const [googleAdAccount, setGoogleAdAccount] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  //the alternative to a custom hook that has useRefs.
  const [hasConversionsFired, setHasConversionsFired] = useState(false);

  const [containerState, setContainerState] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const [accountData, setAccountData] = useState([]);

  const getAccountData = useCallback(async () => await getGaAdAccounts());

  useEffect(() => {
    clearConversionErrors();
    getAccountData();
  }, []);

  useEffect(() => {
    setAccountData(accounts);
  }, [accounts]);

  const handleUpdateAdAccount = (adAccount) => {
    setGoogleAdAccount(adAccount);
  };

  const handleSubmit = async () => {
    let formData = new FormData();
    setContainerState({ ...containerState, loading: true });
    formData.append('account_id', googleAdAccount);
    formData.append('name', name);
    formData.append('value', value);
    await addConversion(formData);
    setHasConversionsFired(true);
    setContainerState({...containerState, loading: false });
    history.push('/manage-conversions');
  };

  return (
    <div>
      <ErrorHandler>
        {containerState.error && <ErrorFallBackPage />}
        {containerState.loading && <LoadingSpinner />}
        {!containerState.error && !containerState.loading && (
          <ConversionFormPage
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            value={value}
            setValue={setValue}
            adAccount={googleAdAccount}
            handleUpdateAdAccount={handleUpdateAdAccount}
            accountData={accountData}
          />
        )}
      </ErrorHandler>
      <BlueTecLandingFooter />
    </div>
  );
};

const mapStateToProps = (state) => ({
  accounts: state.googleAdAccount.adAccounts,
  conversions: state.gaConversions.conversions,
  conversionError: state.gaConversions.error,
});

export default connect(mapStateToProps, { getGaAdAccounts, addConversion })(
  ConversionFormContainer
);
