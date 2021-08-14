import axios from 'axios';

const PostFavorite = (list) => {
  if (!list) {
    axios
      .post('/favorites/update', {
        sub_id: [],
      })
      .then((res) => {
        console.log(res);
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
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default PostFavorite;
