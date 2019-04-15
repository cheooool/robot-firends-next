import React from 'react';
import styled from 'styled-components';

const StyleBox = styled.div`
  margin: 1em 0;
`;

const SearchField = styled.input`
  display: block;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 0.5em 1em;
  font-size: 1.5em;
  text-align: center;
  border: 1px solid #eaeaea;
  background: transparent;
  box-sizing: border-box;
`;

const SearchBox = ({ changeSearchValue }) => {
  return (
    <StyleBox>
      <SearchField
        type="text"
        placeholder="Search Robot"
        name="searchValue"
        onChange={changeSearchValue}
      />
    </StyleBox>
  );
};

export default SearchBox;
