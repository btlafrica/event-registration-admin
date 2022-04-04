import toast from "react-hot-toast";
import { call, put, select, takeEvery } from "redux-saga/effects";

import { setError, setLoading } from "./admins-reducer";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { setAdmins } from "./admins-reducer";
import { getAuth } from "../authentication/authentication-reducer";

function* handleFetchAdmins() {
  try {
    yield put(setLoading(true));
    const config = {
      headers: {
        Authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "Content-Type": "application/json",
      },
    };
    const path = `${BASE_URL}/getAllAdmin`;
    const { data } = yield call([axios, axios.get], path);
    console.log(data);
    yield put(setAdmins(data.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error fetching admins");
  }
}

const fetchAdmins = (payload) => ({ type: fetchAdmins.type, payload });
fetchAdmins.type = "ADMINS/fetchAdmins";

function* watchFetchAdmins() {
  yield takeEvery(fetchAdmins.type, handleFetchAdmins);
}

function* handleCreateAdmin({
  payload: { firstname, lastname, email, password, phoneNumber },
}) {
  try {
    const user = yield select(getAuth);
    yield put(setLoading(true));
    // const config = {
    //   headers: {
    //     Authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
    //     "Content-Type": "application/json",
    //   },
    // };
    const payload = {
      firstname,
      lastname,
      email,
      password,
      phoneNumber,
      adminId: user.adminId,
    };
    console.log(JSON.stringify(payload));
    const path = `${BASE_URL}/createAdmin`;
    const { data } = yield call(
      [axios, axios.post],
      path,
      JSON.stringify(payload)
    );
    console.log(data);
    yield put(fetchAdmins());
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error creating admin");
  }
}

const createAdmins = (payload) => ({ type: createAdmins.type, payload });
createAdmins.type = "ADMINS/createAdmins";

function* watchCreateAdmins() {
  yield takeEvery(createAdmins.type, handleCreateAdmin);
}

export {
  fetchAdmins,
  handleFetchAdmins,
  watchFetchAdmins,
  watchCreateAdmins,
  createAdmins,
};
