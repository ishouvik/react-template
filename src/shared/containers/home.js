import React, { Component } from 'react';
import DefaultLayout from '../layouts/default';
import HomeHero from '../components/homeHero';
import AuthEmailSignInForm from '../components/auth/email/signInForm';
export class Home extends Component {
  render() {
    return (
      <DefaultLayout>
        <HomeHero />
        <div className='row'>
          <div className='col-lg-4 mx-auto'>
            <div className='card'>
              <div className='card-header'>
                Sign In
              </div>

              <div className='card-body'>
                <AuthEmailSignInForm />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}
