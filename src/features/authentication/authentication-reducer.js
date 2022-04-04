import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";
import { clear } from "../../redux/clear";
const slice = "auth";

const initialState = {
  auth: null,
  loading: false,
  error: "",
};

export const {
  actions: { setAuth, setLoading, setError },
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setAuth: createSetter("auth"),
    setLoading: createSetter("loading"),
    setError: createSetter("error"),
  },
  extraReducers: {
    [clear.type]: () => initialState,
  },
});

const getAuthenticationState = prop(slice);
const getAuth = pipe(getAuthenticationState, prop("auth"));
const getLoading = pipe(getAuthenticationState, prop("loading"));
const getError = pipe(getAuthenticationState, prop("error"));

export { getAuthenticationState, getLoading, getAuth, getError, slice };
