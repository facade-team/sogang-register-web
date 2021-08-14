import axios from 'axios';

export const addFavorite = (subject) => {
  axios.post('/favorites/update/add', {
    sub_id: subject,
  });
};

export const deleteFavorite = (subject) => {
  axios.post('/favorites/update/del', {
    sub_id: subject,
  });
};

export const deleteAllFavorite = () => {
  axios.get('/favorites/del', {
    sub_id: [],
  });
};
