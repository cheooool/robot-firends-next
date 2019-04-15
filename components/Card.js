import React from 'react';
import styled from 'styled-components';

const StyleCard = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 1em;
  padding: 1em;
  box-sizing: border-box;
  background: transparent;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const StyleImg = styled.img`
  width: 100%;
`;

const StyleContent = styled.div`
  text-align: center;
`;

const Card = ({ name, email, id }) => {
  return (
    <StyleCard>
      <StyleImg
        src={`https://robohash.org/${id}?size=200x200`}
        alt="Robot Image"
      />
      <StyleContent>
        <strong>{name}</strong>
        <p>{email}</p>
      </StyleContent>
    </StyleCard>
  );
};

export default Card;
