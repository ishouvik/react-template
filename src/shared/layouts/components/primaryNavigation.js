import React, { Component } from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

class PrimaryNavigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  renderPublicNavItems() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
      </Nav>
    );
  }

  renderProtectedNavItems() {
    return null;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavbarBrand href="/">React Template</NavbarBrand>

        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse isOpen={!this.state.collapsed} navbar>
          {this.renderPublicNavItems()}
          {this.renderProtectedNavItems()}
        </Collapse>
      </nav>
    )
  }
}

export default PrimaryNavigation;
