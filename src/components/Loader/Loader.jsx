const LoadingAnimation = () => {
  const wrapperStyle = {
    minHeight: '3rem',
    minWidth: '14rem',
    fontSize: '2rem',
    position: 'relative',
    overflow: 'hidden',
    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0))',
    fontFamily: 'monospace',
  };

  const letterStyle = {
    width: '1ch',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0px, -50%)',
    left: '100%',
    animation: 'scroll 2.5s linear infinite, rainbow 2.5s infinite',
  };

  // Define the animation delay calculation
  const getAnimationDelay = (index) => {
    return `${(2.5 / 10) * (10 - index) * -1}s`;
  };

  // Create an array of letters to display
  const letters = 'Loading...'.split('').map((letter, index) => (
    <span
      key={index}
      style={{
        ...letterStyle,
        animationDelay: getAnimationDelay(index),
        color: 'white', // Start color before rainbow animation
      }}
    >
      {letter}
    </span>
  ));

  return (
    <div style={wrapperStyle} className='w-28 flex justify-center m-auto items-center h-screen'>
      <style>
        {`
          @keyframes scroll {
            to {
              left: -1ch;
            }
          }
          
          @keyframes rainbow {
            0% { color: white; }
            10% { color: #ff0000; }
            20% { color: #ff8700; }
            30% { color: #ffd300; }
            40% { color: #deff0a; }
            50% { color: #a1ff0a; }
            60% { color: #0aff99; }
            70% { color: #0aefff; }
            80% { color: #147df5; }
            90% { color: #580aff; }
            100% { color: #be0aff; }
          }
        `}
      </style>
      {letters}
    </div>
  );
};

export default LoadingAnimation;
