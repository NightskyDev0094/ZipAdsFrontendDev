/**
 * A function that creates a config object with the content type as json
 * and the Authorization property with the user's local storage token value
 */
export const headerConfig = () => {
  // Get token from local storage
  const token = localStorage.getItem('token');

  // returns an object with the token configured within the header
  // and sets the content type to json
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
};
