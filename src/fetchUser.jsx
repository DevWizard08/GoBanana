// src/fetchUsers.js
import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchUsers;
