import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";
import "./Links.css"
export default class Links extends Component {
  render() {
    return (
      <div className="div">
        <Link to="/createsurvey">
          <button className="btn btn-danger btn-lg m-4 p-2">Create Survey</button>
        </Link>

        <Link to="/takesurvey">
          <button className="btn btn-danger btn-lg m-4 p-2">Take Survey</button>
        </Link>
      </div>
    );
  }
}