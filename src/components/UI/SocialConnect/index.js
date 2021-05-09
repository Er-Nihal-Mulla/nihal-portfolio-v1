import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-12">Follow me on: </span>
      <a className="socialLink" href="https://www.facebook.com/nihal.mulla.18659/">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="https://www.instagram.com/sw_engineer_nihalmulla/">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="https://www.youtube.com/channel/UCv7ZyDB8P3fx-Hag_TeuT6Q">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/nihal-mulla-ab117315a/">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
