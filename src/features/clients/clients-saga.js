import toast from "react-hot-toast";
import { call, put, select, takeEvery } from "redux-saga/effects";

import { BASE_URL } from "../../constants";
import axios from "axios";
import {
  setClients,
  getClients,
  setError,
  setLoading,
} from "./clients-reducer";
import { getAuth } from "../authentication/authentication-reducer";

function* handleFetchClients() {
  try {
    yield put(setLoading(true));
    const config = {
      headers: {
        Authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "Content-Type": "application/json",
      },
    };
    const path = `${BASE_URL}/getAllClients`;
    const { data } = yield call([axios, axios.get], path);
    console.log(data);
    yield put(setClients(data.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error fetching clients");
  }
}

const fetchClients = (payload) => ({ type: fetchClients.type, payload });
fetchClients.type = "Clients/fetchClients";

function* watchFetchClients() {
  yield takeEvery(fetchClients.type, handleFetchClients);
}

function* handleCreateClient({
  payload: {
    firstname,
    lastname,
    organisationname,
    email,
    password,
    phoneNumber,
  },
}) {
  try {
    const user = yield select(getAuth);
    yield put(setLoading(true));
    const payload = {
      adminId: user.adminId,
      firstname,
      lastname,
      organisationname,
      email,
      password,
      phoneNumber,
      password:"12345678"
    };

    const path = `${BASE_URL}/createClient`;
    const { data } = yield call(
      [axios, axios.post],
      path,
      JSON.stringify(payload)
    );
    console.log(data,"here");
    yield put(fetchClients());
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error fetching admins");
  }
}

const createClient = (payload) => ({ type: createClient.type, payload });
createClient.type = "CLIENT/createClient";

function* watchCreateClient() {
  yield takeEvery(createClient.type, handleCreateClient);
}

export {
  fetchClients,
  handleFetchClients,
  watchFetchClients,
  watchCreateClient,
  createClient,
};
