import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";
import { clear } from "../../redux/clear";
const slice = "events";

const initialState = {
  events: [],
  loading: false,
  error: "",
};

export const {
  actions: { setEvents, setLoading, setError },
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setEvents: createSetter("events"),
    setLoading: createSetter("loading"),
    setError: createSetter("error"),
  },
  extraReducers: {
    [clear.type]: () => initialState,
  },
});

const getAuthenticationState = prop(slice);
const getEvents = pipe(getAuthenticationState, prop("events"));
const getLoading = pipe(getAuthenticationState, prop("loading"));
const getError = pipe(getAuthenticationState, prop("error"));
export { getAuthenticationState, getLoading, getEvents, getError, slice };
