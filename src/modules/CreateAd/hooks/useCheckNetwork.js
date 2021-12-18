import { useState, useEffect, useCallback } from 'react';

export default function useCheckNetwork() {
  const [error, setError] = useState(null);

  // Functions for checking Network Tokens
  const checkForGoogleManagedAccount = useCallback(async () => {
    try {
      await getGoogleAdAccounts();
    } catch (e) {
      setError(e);
    }
  });

  const checkForFacebookManagedAccount = useCallback(async () => {
    try {
      await getFbAdAccounts();
    } catch (e) {
      setError(e);
    }
  });

  // Check for managed Accounts and if they exist then we know it is possible to run ads through them
  useEffect(() => {
    if (facebookToken) checkForFacebookManagedAccount();
    if (googleToken) checkForGoogleManagedAccount();
  }, []);

  return { networkError: error, setNetworkError: setError };
}
