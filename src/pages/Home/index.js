import TimeLine from '../../components/Timeline';

import { useEffect } from "react";

import axios from "../../utils/axios";
import { setToken } from "../../utils";

function Home() {
  function login() {
    axios.post('/api/login',{username: 'quhaisi', password: '123456'}).then(res=>{
      setToken(res.token)
    })
  }
  useEffect(()=>{
    axios.get('/api/albums').then(res=>{
      console.log(res);
    })
  },[])
  return (
    <>
      <button onClick={login}>登录</button>
      <TimeLine />
    </>
  );
}

export default Home;
