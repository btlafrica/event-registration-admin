import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";
import { clear } from "../../redux/clear";
const slice = "clients";

const initialState = {
  clients: [],
  loading: false,
  error: "",
};

export const {
  actions: { setClients, setLoading, setError },
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setClients: createSetter("clients"),
    setLoading: createSetter("loading"),
    setError: createSetter("error"),
  },
  extraReducers: {
    [clear.type]: () => initialState,
  },
});

const getAuthenticationState = prop(slice);
const getClients = pipe(getAuthenticationState, prop("clients"));
const getLoading = pipe(getAuthenticationState, prop("loading"));
const getError = pipe(getAuthenticationState, prop("error"));
export { getAuthenticationState, getLoading, getClients, getError, slice };
