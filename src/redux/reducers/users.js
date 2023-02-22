import { USER_SUCCESS } from "../constants/actionTypes";

const initialState = [];
export const users = (state= initialState,action ) =>{
    switch (action.type){
        case USER_SUCCESS:
            // xử lý cho trường hợp gọi api get thành công
            //data cần lưu trữ ở store của redux: action.payload
            console.log("action==>",action);
            return [...action.payload];
            default:
                return state;
    }
}