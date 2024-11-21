import React from 'react';
import styled from 'styled-components';


const primaryBackgroundColor = '#f0f0f0';

const Wrapper = styled.section`
  padding: 4em;
  background: ${primaryBackgroundColor};
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const App_Styled = () => {
  return (
    <Wrapper>
      <Title>SELAMAT DATANG DI JAYJAY</Title>
    </Wrapper>
  );
};

export default App_Styled;