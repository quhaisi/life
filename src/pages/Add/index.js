import LifeInput from '../../components/Input';

function Add() {
  return (
    <div>
      <LifeInput placeholder="标题" />
      <LifeInput type="date" />
      <LifeInput type="file" />
    </div>
  );
}

export default Add;
