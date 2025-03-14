/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function returnLink(name, idx, socialLinks, isHovered, setHovered){
  return (
    <div className="hovered" key={idx}>
      <a  href={socialLinks[idx]} target="_blank" data-link={name} className="social-link" 
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      >
        {name}
      </a>
    </div>
  )
}

function Socials() {
  const socialNames = ["LinkedIn", "GitHub"];
  const socialLinks = [
    "https://www.linkedin.com/in/sai-sumakar/",
    "https://github.com/SaiSumakar",
  ];

  const [isHovered, setHovered] = useState(false);

  return (
    <div className="linksConatiner">
      <h3 className="socials-title">Socials</h3>
      <div className="socialLinks">
        {
          socialNames.map((name, idx) => {
            return (
              returnLink(name, idx, socialLinks, isHovered, setHovered)
            )
          })
        }
      </div>
      <h3 className="mail-title">Drop me a mail</h3>
      <div className="hovered mailhead">
        <a href="mailto:saisumakar.kothamasu@gmail.com" data-link="saisumakar.kothamasu@gmail.com"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          saisumakar.kothamasu@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Socials;