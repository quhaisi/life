/**
 * 预览卡片
 * 由标题、时间和图片组成
 * 点击卡片进入相册详情
 */
import miku from '../../assets/img/miku.jpg';

function PreviewCard() {
  return (
    <div>
      {/* <img src="../../assets/img/miku.jpg" alt="" /> */}
      <img src={miku} alt="" />
    </div>
  );
}

export default PreviewCard;
