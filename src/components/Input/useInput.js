/**
 * 灵感来源
 * https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks#
 */

import './index.styl'
import { useState } from 'react'

// function useLifeInput(props) {
//   return (
//     <div className="life-input__wrapper">
//       <input {...props} />
//     </div>
//   );
// }

function useLifeInput(props) {
  const [value, setValue] = useState("");
  const input = <input value={value} onChange={e => setValue(e.target.value)} {...props} />;
  return [value, input];
}

export default useLifeInput;
