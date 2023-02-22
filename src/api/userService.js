import { instances } from "./axios"

//Xây dựng các service để gọi API - xử lý bất dồng bọ
export const USER_GET_SERVICE = async () => {
    try {
        //Gọi và đợi kết quả trả về ---> http://localhost/3001/users = instance.get("user")
        console.log("Goi API");
        let response = await instances.get("users");
        console.log("response-->", response);
        //trả về danh sách user lấy được từ API
        return response.data;
    } catch (error) {
        console.log("error===>", error);
    }
}
export const USER_SAGA_SERVICE = async (newUser) => {
    // yield call(userServices.USER_POST_SERVICE, action.payload)
    await instances.post('users', newUser)
}
export const USER_PATCH_SERVICE = async (updateUser) => {
    await instances.patch('users/'+ updateUser.id, updateUser);
}
export const USER_DELETE_SERVICE = async (id) => {
    await instances.delete('users/'+ id);
}

