/**
 * 时间轴
 * 上面有一些点：
 * 1 大点表示卡片正在预览
 * 2 小点表示有事件但未预览，hover时，可以看到时间和标题
 */

import './index.styl';
// import Point from './Point';
import PreviewCard from '../PreviewCard';

function TimeLine() {
  return (
    <div className="life-timeline-container">
      <PreviewCard title="test" />
      <PreviewCard title="test" />
      <PreviewCard title="test" />
    </div>
  );
}

export default TimeLine;
