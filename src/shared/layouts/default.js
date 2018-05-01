import React, { Component } from 'react';
import '../assets/stylesheets/bootstrap.min.css';
import '../assets/stylesheets/app.css';
import PrimaryNavigation from './components/primaryNavigation';
import Footer from './components/footer';

export default class DefaultLayout extends Component {
  render() {
    return(
      <div className="app">
        <PrimaryNavigation />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
