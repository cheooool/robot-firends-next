import React from 'react';
import fetch from 'isomorphic-unfetch';
import CardList from '../components/CardList';
import Template from '../layouts/template';
import SearchBox from '../components/SearchBox';

const Index = ({ robots }) => {
  return (
    <Template title="RoboFriends">
      <SearchBox />
      <CardList robots={robots} />
    </Template>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    robots: data
  };
};

export default Index;
