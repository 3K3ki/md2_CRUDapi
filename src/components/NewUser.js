import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_create_user } from '../redux/actions';
import {useNavigate } from 'react-router-dom';


export default function NewUser() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    //khai báo các sate lưu trữ thông tin ben trong NewUser
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [fullname,setFullname]=useState("");
    const handleCreate = ()=>{
        dispatch(act_create_user({email, password, fullname}))
        navigate("/");
    }
  return (
    <div>
       <h2> Create New User</h2>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' onChange={(e)=> setEmail(e.target.value)}></input><br/>
        <label htmlFor='password'>password</label>
        <input id='password' name='password' onChange={(e)=> setPassword(e.target.value)}></input><br/>
        <label htmlFor='fullname'>fullname</label>
        <input id='fullname' name='fullname' onChange={(e)=> setFullname(e.target.value)}></input><br/>
        <button onClick={handleCreate}>Create</button>
    </div>
  )
}
