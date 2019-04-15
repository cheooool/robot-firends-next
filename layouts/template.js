import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1em;
  text-align: center;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 4em;
  font-family: 'SEGA LOGO FONT';
  font-weight: 200;
  line-height: 1.5em;
  color: #0ccac4;
`;
const Container = styled.div`
  padding: 1em;
`;

const Template = ({ title, children }) => {
  return (
    <>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Container>{children}</Container>
    </>
  );
};

export default Template;
