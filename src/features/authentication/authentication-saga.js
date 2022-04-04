import { history } from "../../helpers/browser";
import toast from "react-hot-toast";
import { clear } from "../../redux/clear";
import { call, put, takeEvery } from "redux-saga/effects";

import { setAuth, setError, setLoading } from "./authentication-reducer";
import { BASE_URL } from "../../constants";
import axios from "axios";

function* handleLogin({ payload: { email, password } }) {
  try {
    yield put(setLoading(true));
    yield put(setError(""));
    // const config = {
    //   headers: {
    //     'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
    //   },
    // };
    const path = `${BASE_URL}/login`;
    const body = { email, password };
    console.log(body);
    const { data } = yield call(
      [axios, axios.post],
      path,
      JSON.stringify(body)
    );
    console.log(data.response[0]);
    yield put(setAuth(data.response[0]));
    yield put(setLoading(false));
    yield call([history, history?.push], "/dashboard");
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.response));
    console.log(error);
    yield call([toast, "error"], "invalid credentials");
  }
}

const login = (payload) => ({ type: login.type, payload });
login.type = "AUTHENTICATION/login";

function* watchLogin() {
  yield takeEvery(login.type, handleLogin);
}

function* handleSignOut() {
  try {
    yield put(clear());
  } catch (error) {
    console.log(error);
  }
}

const signOut = (payload) => ({ type: signOut.type, payload });
signOut.type = "AUTHENTICATION/signOut";

function* watchSignOut() {
  yield takeEvery(signOut.type, handleSignOut);
}

export { watchLogin, watchSignOut, signOut, login, handleSignOut, handleLogin };
