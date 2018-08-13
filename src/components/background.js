import React, { Component } from "react";
import ReactPlayer from "react-player";

class Background extends Component {
  render() {
    let videoUrl = "";
    switch (this.props.current) {
      case "scattered clouds":
        videoUrl =
          "https://s3-ap-southeast-2.amazonaws.com/dating-app-image-store/videos/cloudy.mp4";
        break;
      case "clear sky":
        videoUrl =
          "https://s3-ap-southeast-2.amazonaws.com/dating-app-image-store/videos/sunny.mp4";
        break;
      default:
        videoUrl =
          "https://s3-ap-southeast-2.amazonaws.com/dating-app-image-store/videos/cloudy.mp4";
    }

    return <ReactPlayer url={videoUrl} playing loop muted />;
  }
}

// const Background = props => (
//   <ReactPlayer
//     url="https://s3-ap-southeast-2.amazonaws.com/dating-app-image-store/videos/cloudy.mp4"
//     playing
//     loop
//     muted
//   />
// );

export default Background;
