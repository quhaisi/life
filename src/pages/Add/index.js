import LifeInput from '../../components/Input';
import { useState } from "react";
// import nput from '../../components/Input/useInput'

import axios from "../../utils/axios";

function Add() {
  // const [title, useTitle] = nput()

  const [form, useForm] = useState({
    title: '',
    date: ''
  })

  function setFormValue(value, key) {
    useForm({
      ...form,
      [key]: value
    })
  }

  function addAlbums() {
    axios.post('/api/albums', form)
  }

  return (
    <div>
      <LifeInput placeholder="标题" onChange={e => setFormValue(e.target.value, 'title')} />
      <LifeInput type="date" onChange={e => setFormValue(e.target.value, 'date')} />
      <LifeInput type="file" />
      <button onClick={addAlbums}>save</button>
    </div>
  );
}

export default Add;
