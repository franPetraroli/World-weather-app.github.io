import React, { Component } from "react";

const Background = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Search</button>
  </form>
);

export default Background;

//get the result
//if result is sunny disply sunny video
//if cloudy display cloudy
