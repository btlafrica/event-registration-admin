import { watchLogin } from "../features/authentication/authentication-saga";

import { all } from "redux-saga/effects";
import { watchCreateAdmins, watchFetchAdmins } from "../features/admins/admins-saga";
import { watchCreateClient, watchFetchClients } from "../features/clients/clients-saga";
import { watchCreateEvent, watchFetchEvents } from "../features/events/events-saga";

function* rootSaga() {
  yield all([
    watchLogin(),
    watchFetchAdmins(),
    watchCreateClient(),
    watchFetchClients(),
    watchCreateAdmins(),
    watchCreateEvent(),
    watchFetchEvents()
  ]);
}

export { rootSaga };
