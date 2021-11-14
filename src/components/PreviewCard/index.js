/**
 * 预览卡片
 * 由标题、时间和图片组成
 * 点击卡片进入相册详情
 */
import PropTypes from 'prop-types';
import miku from '../../assets/img/miku.jpg';
import './index.styl';

function PreviewCard(props) {
  const { title } = props;
  return (
    <div className="qu-previewcard-container">
      <span>{ title }</span>
      <img src={miku} alt="" />
    </div>
  );
}

PreviewCard.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default PreviewCard;
