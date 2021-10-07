import axios from 'axios';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

export const getUserAccountInformation = async () =>
  await axios.get('http://localhost:8000/api/business-info/', config);
