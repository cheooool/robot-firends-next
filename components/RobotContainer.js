import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Template from '../layouts/template';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class RobotContainer extends Component {
  state = {
    robots: [],
    searchValue: ''
  };
  async onRequestRobots() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    this.setState({
      robots: data
    });
  }

  componentDidMount() {
    this.onRequestRobots();
  }

  searchRobots = () => {
    return this.state.robots.filter(robot => {
      const robotName = robot.name.toLowerCase();
      const searchValue = this.state.searchValue.toLowerCase();

      return robotName.includes(searchValue);
    });
  };

  onChangeSearchValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Template title="Robo Friends">
        <SearchBox changeSearchValue={this.onChangeSearchValue} />
        <CardList robots={this.searchRobots()} />
      </Template>
    );
  }
}

export default RobotContainer;
