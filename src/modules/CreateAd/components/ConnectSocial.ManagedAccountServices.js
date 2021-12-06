import axios from 'axios';
import { SERVER_URL } from '../../../environmentVariables';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};

export const getUserAccountInformation = async () =>
  await axios.get(`${SERVER_URL}/api/business-info/`, config);
