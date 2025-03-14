import { useState } from "react"
import PropTypes from "prop-types";

function Navlink(props) {

  const [isHovered, setHover] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    fontFamily: "Faculty Glyphic, sans-serif",
    fontSize: '0.985rem',
    padding: '2px 25px',
    fontWeight: isHovered && 'bold',
  }

  function onHover(){
    setHover(true)
  }

  function offHover(){
    setHover(false)
  }

  return (
    <div onMouseOver={onHover} onMouseOut={offHover} className="hovered"> 
      <a href={props.to} style={linkStyle} data-link={props.text}> {props.text} </a> 
    </div>
  )
}

Navlink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Navlink;