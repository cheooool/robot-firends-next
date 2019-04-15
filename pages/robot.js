import React from 'react';
import RobotDetailContainer from '../components/RobotDetailContainer';

const Robot = ({ id }) => {
  return <RobotDetailContainer userId={id} />;
};

Robot.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default Robot;
