import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "14vmax", height: "14vmax", }}
              src="https://res.cloudinary.com/vimalecommerce/image/upload/v1639149569/profile_pic.copy_biiuac.jpg"
              alt="Founder"
            />
            <Typography>Vimal Shetty</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Myself 2nd year engineering student pursuing bachelor's degree in Computer Science at Manglore Institution of Technology and Engineering. Iam passionate about Web Developement and Cloud services and I am quiet good at data structures and algprithms and want to provide eficient software solutions to real life problems 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Socials</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;