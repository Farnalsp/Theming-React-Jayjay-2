import React from 'react';
import Appemotion from './App_emotion';
import Applinaria from './App_linaria';
import AppStyled from './App_Styled';

const App = () => {
  return (
    <div>
      <Appemotion />
      <Applinaria />
      <AppStyled />
      <App />
    </div>
  );
};

export default App;