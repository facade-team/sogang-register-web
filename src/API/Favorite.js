import axios from 'axios';

export const addFavorite = (subject, setLoading) => {
  // setLoading(true);
  axios
    .post('/favorites/update/add', {
      sub_id: subject,
    })
    .then(() => {
      // setLoading(false);
    });
};

export const deleteFavorite = (subject, setLoading) => {
  // setLoading(true);
  axios
    .post('/favorites/update/del', {
      sub_id: subject,
    })
    .then(() => {
      // setLoading(false);
    });
};

export const deleteAllFavorite = (setLoading) => {
  // setLoading(true);
  axios
    .get('/favorites/del', {
      sub_id: [],
    })
    .then(() => {
      // setLoading(false);
    });
};
