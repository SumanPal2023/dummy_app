import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  let [uname, setUname] = useState('')
  let [pwd, setPwd] = useState('');
  let handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("")
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="un">User Name</label>
        <input
          type="text"
          className='form-control'
          placeholder='enter user name'
          onInput={(e) => {setUname(e.target.value) }}
        />
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          className='form-control'
          placeholder='enter your password'
          onInput={(e)=>{setPwd(e.target.value)}}
        />
        <button className='btn btn-success mt-3 w-100'>submit</button>
      </form>
    </div>
  )
}
export default Login
