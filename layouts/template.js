import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1em;
  text-align: center;
`;
const Container = styled.div`
  padding: 1em;
`;

const Template = ({ title, children }) => {
  return (
    <>
      <Header>{title}</Header>
      <Container>{children}</Container>
    </>
  );
};

export default Template;
