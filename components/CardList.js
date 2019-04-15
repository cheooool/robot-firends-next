import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyleLi = styled.li`
  margin: 1em;
`;

const CardList = ({ robots }) => {
  return (
    <StyleUl>
      {robots.map(robot => {
        return (
          <StyleLi key={robot.id}>
            <Card id={robot.id} name={robot.name} email={robot.email} />
          </StyleLi>
        );
      })}
    </StyleUl>
  );
};

export default CardList;
