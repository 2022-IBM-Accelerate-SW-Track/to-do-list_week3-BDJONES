import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/YearbookPhoto.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile_pic_name}
              alt="Profile Pic"
              width="500" 
              height="600"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Brandon Jones</div>
            <div className="brief_description">Hello my name is Brandon Jones and I am a CS major at the University of Alabama. I watch stand up comedy and Naruto is undisputably the greatest show to ever grace the eyes of man.</div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}