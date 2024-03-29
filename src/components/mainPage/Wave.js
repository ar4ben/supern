import React from 'react'

const Wave = () => (
  <svg
    fill="black"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
    id="contact-wave"
    viewBox="0 0 800 350"
    preserveAspectRatio="none"
  >
    <path>
      <animate
        attributeName="d"
        dur="80s"
        repeatCount="indefinite"
        values="M -600 350 Q -400 250 300 300 Q 700 320 800 300 L 800 0 L 0 0 Z;
          M 0 300 Q 500 -10 800 300 Q 1000 500 1400 300 L 1400 0 L 0 0 Z;
          M 0 300 Q 1500 300 2000 300 Q 1000 500 1400 300 L 1400 0 L 0 0 Z;
          M 0 300 Q 500 -10 800 300 Q 1000 500 1400 300 L 1400 0 L 0 0 Z;
          M -600 350 Q -400 250 300 300 Q 700 320 800 300 L 800 0 L 0 0 Z"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
      />
    </path>
  </svg>
)

export default Wave
