import React, { Component } from 'react';
import DefaultLayout from '../layouts/default';
import HomeHero from '../components/homeHero';

export class Home extends Component {
  render() {
    return (
      <DefaultLayout>
        <HomeHero />
      </DefaultLayout>
    )
  }
}
