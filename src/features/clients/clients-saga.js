import toast from "react-hot-toast";
import { call, put, takeEvery } from "redux-saga/effects";

import { BASE_URL } from "../../constants";
import axios from "axios";
import {
  setClients,
  getClients,
  setError,
  setLoading,
} from "./clients-reducer";

function* handleFetchClients() {
  try {
    yield put(setLoading(true));
    const config = {
      headers: {
        Authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "Content-Type": "application/json",
      },
    };
    const path = `${BASE_URL}/getAllClient`;
    const { data } = yield call([axios, axios.get], path);
    console.log(data);
    yield put(setClients(data.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error fetching admins");
  }
}

const fetchClients = (payload) => ({ type: fetchClients.type, payload });
fetchClients.type = "Clients/fetchClients";

function* watchFetchClients() {
  yield takeEvery(fetchClients.type, handleFetchClients);
}

function* handleCreateClient({
  payload: {
    adminId,
    firstname,
    lastname,
    organisationname,
    email,
    password,
    phoneNumber,
  },
}) {
  try {
    yield put(setLoading(true));
    const payload = {
      adminId,
      firstname,
      lastname,
      organisationname,
      email,
      password,
      phoneNumber,
    };

    const path = `${BASE_URL}/createClient`;
    const { data } = yield call([axios, axios.post], path, payload);
    console.log(data);
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
