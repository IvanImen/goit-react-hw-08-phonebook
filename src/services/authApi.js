import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = BASE_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    delete axios.defaults.headers.common.Authorization;
  },
};

export const createUser = async body => {
  const { data } = await axios.post('/users/signup', body);
  console.log('dataapi :>> ', data);
  return data;
};

export const loginUser = async body => {
  const { data } = await axios.post('/users/login', body);
  console.log('loginUser :>> ', loginUser);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post('/users/logout');
  console.log('logOutUser :>> ', logOutUser);
  return data;
};

export const getInformation = async () => {
  const { data } = await axios.get('/users/current');
  console.log('getInformation :>> ', getInformation);
  return data;
};
