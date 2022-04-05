import { combineReducers } from "@reduxjs/toolkit";
import {
  reducer as authReducer,
  slice as authSlice,
} from "../features/authentication/authentication-reducer";
import {
  reducer as AdminsReducer,
  slice as AdminsSlice,
} from "../features/admins/admins-reducer";
import {
  reducer as ClientsReducer,
  slice as ClientsSlice,
} from "../features/clients/clients-reducer";
import {
  reducer as EventsReducer,
  slice as EventsSlice,
} from "../features/events/events-reducer";

const combinedReducer = combineReducers({
  [authSlice]: authReducer,
  [AdminsSlice]: AdminsReducer,
  [ClientsSlice]: ClientsReducer,
  [EventsSlice]: EventsReducer,
 
 
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const rootState = rootReducer(undefined, {});

export { rootReducer, rootState };
