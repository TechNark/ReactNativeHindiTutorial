import axios from 'axios';

const getAPIData = async () => {
  const response = await axios.get('https://reqres.in/api/users?page=2');
  console.log('response', response);
};

export default getAPIData;
