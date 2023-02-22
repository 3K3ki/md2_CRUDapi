import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { act_update_user } from '../redux/actions';
import {useNavigate } from 'react-router-dom';


export default function UpdateUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //khai báo các sate lưu trữ thông tin ben trong NewUser
    const [email,setEmail]=useState("");
    const [fullname,setFullname]=useState("");
    const [id, setId]=useState("");
    useEffect(()=>{
        //lay du lieu tu local storage va luu vao Email , fullname, id
        let user = JSON.parse(localStorage.getItem("userUpdate"));
        setEmail(user.email)
        setFullname(user.fullname)
        setId(user.id)
    }, []);
    const handleUpdate =()=>{
        //dispatch action
        dispatch(act_update_user({id, email,fullname}))
        navigate("/");
    }
  return (
    <div>
       <h2> Create New User</h2>
       <label htmlFor='userId'>id</label>
        <input id='userId' name='userId' value={id} onChange={(e)=> setId(e.target.value)} readOnly></input><br/>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input><br/>
        <label htmlFor='fullname'>fullname</label>
        <input id='fullname' name='fullname' value={fullname} onChange={(e)=> setFullname(e.target.value)}></input><br/>
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}
