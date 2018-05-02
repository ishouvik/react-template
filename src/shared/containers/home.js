import React, { Component } from 'react';
import DefaultLayout from '../layouts/default';
import HomeHero from '../components/homeHero';
import AuthEmailSignInForm from '../components/auth/email/signInForm';
export class Home extends Component {
  render() {
    return (
      <DefaultLayout>
        <HomeHero />
        <AuthEmailSignInForm />
      </DefaultLayout>
    )
  }
}
