import axios from 'axios';
import { useSnackBarContext } from '../contexts/SnackBarContext';

export const addFavorite = (subject, setLoading, setSnackBar) => {
  setLoading(true);
  axios
    .post('/favorites/update/add', {
      sub_id: subject,
    })
    .then((res) => {
      setLoading(false);
      setSnackBar({
        type: 'success',
        msg: '즐겨찾기 목록에 추가되었습니다.',
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnackBar({
        type: 'error',
        msg: '서버 오류가 발생했습니다. 다시 시도해주세요',
      });
    });
};

export const deleteFavorite = (subject, setLoading, setSnackBar) => {
  setLoading(true);

  axios
    .post('/favorites/update/del', {
      sub_id: subject,
    })
    .then((res) => {
      setLoading(false);
      setSnackBar({
        type: 'success',
        msg: '즐겨찾기 목록에서 삭제되었습니다.',
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnackBar({
        type: 'error',
        msg: '서버 오류가 발생했습니다. 다시 시도해주세요',
      });
    });
};

export const deleteAllFavorite = (setLoading, setSnackBar) => {
  setLoading(true);

  axios
    .get('/favorites/del', {
      sub_id: [],
    })
    .then((res) => {
      setLoading(false);
      setSnackBar({
        type: 'success',
        msg: '즐겨찾기 목록에서 모두 삭제되었습니다.',
      });
    })
    .catch((err) => {
      setLoading(false);
      setSnackBar({
        type: 'error',
        msg: '서버 오류가 발생했습니다. 다시 시도해주세요',
      });
    });
};
