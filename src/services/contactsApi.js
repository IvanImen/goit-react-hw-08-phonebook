import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = BASE_URL;

export const getContacts = async () => {
  const { data } = await axios.get(`/contacts`);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(`/contacts`, contact);

  return data;
};
