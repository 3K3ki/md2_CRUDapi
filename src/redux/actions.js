// import NewUser from "../components/NewUser";
import *as actionType from "./constants/actionTypes";

// tạo action để yêu cầu lấy các dữ liệu từ Jon-server
//action là 1 funtion = (dâta) => {return object(type, payload)}
export const act_get_user = ()=> {
    console.log("Từ listUser gọi ");
    return {
        type: actionType.USER_GET, //không cẩn chuyển dữ liệu nen k cần payload
    }
}

export const act_user_success = (actionType,data)=>{
    return{
        type: actionType,
        payload: data
    }
}

export const act_create_user = (NewUser) =>{
    return{
        type: actionType.USER_POST,
        payload: NewUser
    }
}
export const act_update_user = (updateUser)=>{
    return {
        type: actionType.USER_PATCH,
        payload: updateUser
    }
}
export const act_delete_user = (id)=>{
    return{
        type: actionType.USER_DELETE,
        payload: id
    }
}