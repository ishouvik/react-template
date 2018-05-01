import React, { Component } from 'react';
import '../assets/stylesheets/bootstrap.min.css'
import PrimaryNavigation from './components/primaryNavigation';

export default class DefaultLayout extends Component {
  render() {
    return(
      <div className="app">
        <PrimaryNavigation />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
