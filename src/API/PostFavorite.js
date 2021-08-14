import axios from 'axios';

const PostFavorite = (list) => {
  if (!list) {
    axios
      .post('/favorites/update', {
        sub_id: [],
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const req = list.map((sub) => {
      return sub.subject_id;
    });

    axios
      .post('/favorites/update', {
        sub_id: req,
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default PostFavorite;
