import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" TO="/">Capacitación para CLP-COVID-MX</Link>
      </nav>
    );
  }
}
