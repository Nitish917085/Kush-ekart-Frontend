import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '../reducers/user';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(
      'https://web-production-e9b7.up.railway.app/',
      user
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
