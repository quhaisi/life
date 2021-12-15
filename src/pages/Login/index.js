import { useState } from "react";
import { useNavigate } from 'react-router-dom'


import LifeInput from '../../components/Input';
import { setToken } from "../../utils";

import axios from "../../utils/axios";

function Login() {

  const navigate = useNavigate()

  const [form, useForm] = useState({
    loginName: '',
    password: ''
  })

  function setFormValue(value, key) {
    useForm({
      ...form,
      [key]: value
    })
  }
  
  function login() {
    axios.post('/api/login',{loginName: form.loginName, password: form.password}).then(res=>{
      if(res.code == 200) {
        setToken(res.token)
        navigate('/')
      } else {
        alert(res.message)
      }
    })
  }

  return (
    <div>
      <LifeInput placeholder="用户名" onChange={e => setFormValue(e.target.value, 'loginName')} />
      <LifeInput type="password" placeholder="密码" onChange={e => setFormValue(e.target.value, 'password')} />
      <button onClick={login}>登录</button>
    </div>
  )
}

export default Login