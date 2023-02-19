import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillBehanceSquare } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/" target="blank">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/Gasimli" target="blank">
        <BsGithub />
      </a>
      <a href="https://www.behance.net/gasimlifathi" target="blank">
        <AiFillBehanceSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
