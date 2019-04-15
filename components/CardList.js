import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  &:after {
    clear: both;
    display: table;
    content: '';
  }
`;

const StyleLi = styled.li`
  padding: 1em;
  box-sizing: border-box;
  @media (min-width: 640px) {
    float: left;
    width: 50%;
  }
  @media (min-width: 960px) {
    float: left;
    width: 33%;
  }
  @media (min-width: 1280px) {
    float: left;
    width: 25%;
  }
  @media (min-width: 1600px) {
    float: left;
    width: 20%;
  }
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
