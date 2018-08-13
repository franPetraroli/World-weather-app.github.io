import React from "react";

const Weather = props => (
  <div className="weather row">
    {props.city &&
      props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
    {props.temperature && (
      <p className="col-md-3">Temperature: {props.temperature}</p>
    )}
    {props.humidity && <p className="col-md-3"> Humidity: {props.humidity}</p>}
    {props.description && <p className="col-md-3">{props.description}</p>}
    {props.error && <p className="col-md-3">Error: {props.error}</p>}
  </div>
);

export default Weather;
