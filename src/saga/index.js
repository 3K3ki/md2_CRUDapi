import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes"
import * as userSagas from "./userSaga";
export const rootSaga = function* () {
    yield all([
        //takeLastes(actionsTypes, arguments of function)
        takeLatest(actionTypes.USER_GET, userSagas.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST, userSagas.USER_SAGA_POST),
        takeLatest(actionTypes.USER_PATCH, userSagas.USER_SAGA_PATCH),
        takeLatest(actionTypes.USER_DELETE, userSagas.USER_SAGA_DELETE)
    ])
}