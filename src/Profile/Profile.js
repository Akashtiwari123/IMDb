import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div style={{ fontSize: "30px", fontStyle: "bold" }}>Profile</div>
        Name: <input className="input" type="text" />
        <br />
        Email: <input className="input" type="email" />
        <br />
        Age: <input className="input" type="text" />
        <br />
        Gender:{" "}
        <label className="label">
          {" "}
          Male
          <input className="radio" type="radio" name="gender" value="Male" />
        </label>
        <label className="label">
          Female
          <input className="radio" type="radio" name="gender" value="Female" />
        </label>{" "}
        <br />
        <input type="submit" className="button" />
      </div>
    );
  }
}

export default Profile;
