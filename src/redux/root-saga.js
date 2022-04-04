import { watchLogin } from "../features/authentication/authentication-saga";

import { all } from "redux-saga/effects";
import { watchCreateAdmins, watchFetchAdmins } from "../features/admins/admins-saga";
import { watchCreateClient, watchFetchClients } from "../features/clients/clients-saga";

function* rootSaga() {
  yield all([
    watchLogin(),
    watchFetchAdmins(),
    watchCreateClient(),
    watchFetchClients(),
    watchCreateAdmins()
  ]);
}

export { rootSaga };
