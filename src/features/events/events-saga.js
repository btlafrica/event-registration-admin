import toast from "react-hot-toast";
import { call, put, select, takeEvery } from "redux-saga/effects";

import { BASE_URL } from "../../constants";
import axios from "axios";
import { setEvents, getEvents, setError, setLoading } from "./events-reducer";
import { fetchClients } from "../clients/clients-saga";
import { getAuth } from "../authentication/authentication-reducer";

function* handleFetchEvents() {
  try {
    yield put(setLoading(true));

    const path = `${BASE_URL}/getAllEvents`;
    const { data } = yield call([axios, axios.get], path);
    console.log(data);
    yield put(setEvents(data.response));
    yield put(fetchClients());
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error fetching events");
  }
}

const fetchEvents = (payload) => ({ type: fetchEvents.type, payload });
fetchEvents.type = "Events/fetchEvents";

function* watchFetchEvents() {
  yield takeEvery(fetchEvents.type, handleFetchEvents);
}

function* handleCreateEvent({
  payload: { clientId, eventName, eventDate, description, capacity, eventType,eventTime },
}) {
  try {
    yield put(setLoading(true));
    const user = yield select(getAuth);
    const path = `${BASE_URL}/createEvent`;
    const payload = {
      adminId: user.adminId,
      clientId,
      eventName,
      logo: "89",
      eventDate: "2021-08-20 16:54:44",
      description,
      capacity,
      eventType,
      eventTime
    };
    console.log(JSON.stringify(payload));
    const { data } = yield call(
      [axios, axios.post],
      path,
      JSON.stringify(payload)
    );
    console.log(data);
    yield put(fetchEvents());
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.message));
    console.log(error.response);
    yield call([toast, "error"], "Error creating event");
  }
}

const createEvent = (payload) => ({ type: createEvent.type, payload });
createEvent.type = "Event/createEvent";

function* watchCreateEvent() {
  yield takeEvery(createEvent.type, handleCreateEvent);
}

export {
  fetchEvents,
  handleFetchEvents,
  watchFetchEvents,
  watchCreateEvent,
  createEvent,
};
