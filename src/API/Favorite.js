import axios from 'axios';

export const addFavorite = (subject, setLoading) => {
  console.log(setLoading);
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  axios.post('/favorites/update/add', {
    sub_id: subject,
  });
};

export const deleteFavorite = (subject, setLoading) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  axios.post('/favorites/update/del', {
    sub_id: subject,
  });
};

export const deleteAllFavorite = (setLoading) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  axios.get('/favorites/del', {
    sub_id: [],
  });
};
