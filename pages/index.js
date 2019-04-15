import React from 'react';
import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';

const Index = ({ robots }) => {
  return (
    <div>
      {robots.map(robot => {
        return (
          <Card
            name={robot.name}
            email={robot.email}
            id={robot.id}
            key={robot.id}
          />
        );
      })}
    </div>
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
