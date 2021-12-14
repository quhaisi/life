import TimeLine from '../../components/Timeline';

import { useEffect } from "react";

import axios from "../../utils/axios";

function Home() {
  useEffect(()=>{
    axios.get('/api/albums').then(res=>{
      console.log(res);
    })
  },[])
  return (
    <>
      <TimeLine />
    </>
  );
}

export default Home;
