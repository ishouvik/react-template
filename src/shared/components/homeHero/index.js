import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Home } from '../../containers/home';

class HomeHero extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello world</h1>
        <p className='lead'>
          This is a simple React sample app template with SSR enabled
        </p>
      </Jumbotron>
    )
  }
}

export default HomeHero;
