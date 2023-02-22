import React, { useEffect } from 'react'
import { act_delete_user, act_get_user } from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function ListUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    //Gọi action act-get_user khi component dc Mount
    //useEfect
    /*
    useEffect(callback): khi gọi mount và render
    useEffect(callback,[]):gọi khi mount
    useEffect(callback,[deps]): khi gọi mount và deps thay đổi
    */
   useEffect(()=>{
    //thực hiện khi components mount
        dispatch(act_get_user())
   },[]);
   const handleUpdate = (userUpdate)=> {
    //luu du lieu vao local storeage
    localStorage.setItem("userUpdate", JSON.stringify(userUpdate));
    //chuyen sang UpdateUser Component
    navigate("/updateUser")
   }
   const handleDelete = (id) => {
    dispatch(act_delete_user(id))
   }
   //lấy state hiển thị ra 
   const listUser = useSelector(state=>state.users)
   let elementListUser = listUser.map((user,index)=>{
        return <tr key={user.id}>
        <td>{index +1}</td>
        <td> {user.id} </td>
        <td>{user.email}</td>
        <td> {user.password}</td>
        <td>{user.fullname} </td>
        <td>
            <button onClick={()=> handleUpdate(user)}>UPDATE</button>
            <button onClick={()=> handleDelete(user.id)}>DELETE</button>
        </td>
    </tr>
   })
  return (
    <div>
        <h2>ListUser</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Fullname</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {elementListUser}
            </tbody>
        </table>
        <button onClick={()=> navigate("/newUser")}>create new user</button>
    </div>
  )
}
