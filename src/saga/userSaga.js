import * as userServices from "../api/userService";
import { call, put } from "redux-saga/effects";
import { act_user_success } from "../redux/actions";
import { USER_SUCCESS } from "../redux/constants/actionTypes";
//các saga kết nối và làm việc service
export const USER_SAGA_GET = function* () {

  // call(functionname, argument of function)
  let listUser = yield call(userServices.USER_GET_SERVICE)
  console.log("ListUser==>", listUser);
  // success --> gọi action --> put(action)
  yield put(act_user_success(USER_SUCCESS, listUser))
}
export const USER_SAGA_POST = function* (action) {
  try {
    yield call(userServices.USER_SAGA_SERVICE, action.payload)
    yield USER_SAGA_GET();
  } catch (erro) {

  }
}
export const USER_SAGA_PATCH = function* (action) {
  try{
    yield call(userServices.USER_PATCH_SERVICE, action);
    //cap nhat thanh cong
    yield USER_SAGA_GET();
  }catch(error){

  }
}

export const USER_SAGA_DELETE = function*(action){
  try{
    yield call(userServices.USER_DELETE_SERVICE, action.payload);
    //xoa thanhcongg
    yield USER_SAGA_GET()
  }catch(error){

  }
}




