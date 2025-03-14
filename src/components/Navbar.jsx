import "react";
import Navlink from "./Navlink";



function Navbar() {
  const navitems = ["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  const navto = ["#home-page", "#about-page", "#projects-page", "#skills-page", "#contact-page"];

  return (
    <>
      {
      navitems.map((item, index) => (
        <Navlink key={index} text={item} to={navto[index]} />
      ))
      }
    </>
  )
}

export default Navbar;