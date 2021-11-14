/**
 * 点
 * 原打算做时间轴中的点，考虑到手机操作的可能性更大，暂时不需要这个组件
 */

import PreviewCard from '../PreviewCard';

function Point() {
  return (
    <div>
      <PreviewCard title="test" />
      <span className="timeline-point" />
    </div>
  );
}

export default Point;
