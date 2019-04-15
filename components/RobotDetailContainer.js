import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Template from '../layouts/template';
import Card from '../components/Card';

const Anchor = styled.a`
  display: inline-block;
  padding: 1em 2em;
  color: #000;
  border: 2px solid #000;
  border-radius: 5px;
  cursor: pointer;
`;

const DetailBox = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
`;

class RobotDetailContainer extends Component {
  state = {
    userInfo: null
  };
  async onRequestUser() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.userId}`
    );
    const data = await res.json();

    this.setState({
      userInfo: data
    });
  }
  componentDidMount() {
    this.onRequestUser();
  }
  render() {
    const { userInfo } = this.state;

    if (!userInfo) {
      return null;
    }
    return (
      <Template title={`Robo Friends`}>
        <DetailBox>
          <Link href="/">
            <Anchor>목록</Anchor>
          </Link>
          <Card name={userInfo.name} email={userInfo.email} id={userInfo.id}>
            <div>Phone : {userInfo.phone}</div>
            <div>Website : {userInfo.website}</div>
            <div>Company : {userInfo.company.name}</div>
          </Card>
        </DetailBox>
      </Template>
    );
  }
}

export default RobotDetailContainer;
