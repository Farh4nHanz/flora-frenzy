import PropTypes from "prop-types";

const BackgroundVideo = ({ videoSrc, children }) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-screen h-screen absolute object-cover top-0 left-0 pointer-events-none -z-10"
      />
      {children}
    </section>
  );
};

BackgroundVideo.propTypes = {
  videoSrc: PropTypes.string,
  children: PropTypes.node,
};

export default BackgroundVideo;
