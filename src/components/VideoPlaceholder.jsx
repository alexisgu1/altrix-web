import './VideoPlaceholder.css';
import videoPlaceholder from '../video_placeholder.png';

export default function VideoPlaceholder() {
  return (
    <div className="video-placeholder-wrapper">
      <img
        src={videoPlaceholder}
        alt="Video Placeholder"
        className="video-placeholder-img"
      />
    </div>
  );
}