import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Alert,
} from 'reactstrap';

import {
  emailChanged,
  passwordChanged
} from '../../../actions';

class AuthEmailSignInForm extends Component {
  _onEmailChanged(text) {
    this.props.emailChanged(text.target.value);
  }

  _onPasswordChanged(text) {
    this.props.passwordChanged(text.target.value)
  }

  _onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this._onFormSubmit.bind(this)}>
        <code>
          {this.props.email}
        </code>

        <FormGroup>
          <Input
            type="email"
            name="email"
            id="authEmailFormEmail"
            placeholder="yourname@example.com"
            onChange={this._onEmailChanged.bind(this)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            name="password"
            id="authEmailFormPassword"
            placeholder="password"
            onChange={this._onPasswordChanged.bind(this)}
          />
        </FormGroup>

        <Button color="primary" block>
          Sign In
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return { email, password }
};

const mapDispatchToProps = {
  emailChanged,
  passwordChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthEmailSignInForm);
