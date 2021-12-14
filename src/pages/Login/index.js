import { useState } from "react";

import LifeInput from '../../components/Input';
import { setToken } from "../../utils";

import axios from "../../utils/axios";

function Login(props) {

  const { history } = props

  const [form, useForm] = useState({
    username: '',
    password: ''
  })

  function setFormValue(value, key) {
    useForm({
      ...form,
      [key]: value
    })
  }
  
  function login() {
    axios.post('/api/login',{username: 'quhaisi', password: '123456'}).then(res=>{
      setToken(res.token)
      console.log(props);
      window.history.pushState('','','/')
    })
  }

  return (
    <div>
      <LifeInput placeholder="用户名" onChange={e => setFormValue(e.target.value, 'username')} />
      <LifeInput type="password" placeholder="密码" onChange={e => setFormValue(e.target.value, 'password')} />
      <button onClick={login}>登录</button>
    </div>
  )
}

export default Login