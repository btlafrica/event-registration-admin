import { createSlice } from "@reduxjs/toolkit";
import { createSetter } from "../../helpers/create-setter";
import { pipe, prop } from "ramda";
import { clear } from "../../redux/clear";
const slice = "admins";

const initialState = {
  admins: [],
  loading: false,
  error: "",
};

export const {
  actions: { setAdmins, setLoading, setError },
  reducer,
} = createSlice({
  initialState,
  name: slice,
  reducers: {
    setAdmins: createSetter("admins"),
    setLoading: createSetter("loading"),
    setError: createSetter("error"),
  },
  extraReducers: {
    [clear.type]: () => initialState,
  },
});

const getAuthenticationState = prop(slice);
const getAdmins = pipe(getAuthenticationState, prop("admins"));
const getLoading = pipe(getAuthenticationState, prop("loading"));
const getError = pipe(getAuthenticationState, prop("error"));
export { getAuthenticationState, getLoading, getAdmins, getError, slice };
