import React from 'react';
import { css } from '@linaria';

const animationKeyframes = css.keyframes`
  from, 
  20%, 
  53%, 
  80%, 
  to {
    transform: translate3d(0, 0, 0);
  }
  40%, 
  43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const Animation = css.div`
  color: #343434;
  font-weight: bold;
  margin-top: 100px;
  animation: ${animationKeyframes} 2s linear infinite;
`;

const AppLinaria = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Animation>Ayo Belajar Animasi</Animation>
    </div>
  );
};

export default AppLinaria