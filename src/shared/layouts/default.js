import React, { Component } from 'react';
import '../assets/stylesheets/bootstrap.min.css'

export default class DefaultLayout extends Component {
  render() {
    return(
      <main>
        {this.props.children}
      </main>
    );
  }
}
