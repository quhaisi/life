import LifeInput from '../../components/Input';
import nput from '../../components/Input/useInput'

import axios from 'axios';

function Add() {
  const [title, useTitle] = nput()

  function addAlbums() {
    axios.post('/albums', {title})
  }

  return (
    <div>
      {useTitle}
      <LifeInput placeholder="标题" />
      <LifeInput type="date" />
      <LifeInput type="file" />
      <button onClick={addAlbums}>save</button>
    </div>
  );
}

export default Add;
