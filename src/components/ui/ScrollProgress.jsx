import useScrollPosition from '../../hooks/useScrollPosition';

const ScrollProgress = () => {
  const { scrollProgress } = useScrollPosition();

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
};

export default ScrollProgress;
