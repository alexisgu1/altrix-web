import './VideoPlaceholder.css';
import videoPlaceholder from '../video_placeholder.png';

export default function VideoPlaceholder() {
  return (
    <div className="video-placeholder-wrapper section-spacing">
      <img
        src={videoPlaceholder}
        alt="Video Placeholder"
        className="video-placeholder-img"
      />
    </div>
  );
}