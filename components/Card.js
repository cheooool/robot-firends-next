import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyleCard = styled.div`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background: transparent;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const StyleImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0 auto 1em;
`;

const StyleContent = styled.div`
  text-align: center;
`;

const Card = ({ name, email, id, linkProps, children }) => {
  return (
    <StyleCard>
      {linkProps ? (
        <Link {...linkProps}>
          <a>
            <StyleImg src={`https://robohash.org/${id}`} alt="Robot Image" />
          </a>
        </Link>
      ) : (
        <StyleImg src={`https://robohash.org/${id}`} alt="Robot Image" />
      )}

      <StyleContent>
        <strong>{name}</strong>
        <p>{email}</p>
        {children}
      </StyleContent>
    </StyleCard>
  );
};

export default Card;
