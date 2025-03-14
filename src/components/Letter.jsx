import { useEffect } from "react"
import PropTypes from "prop-types";

function animateLetter(){
  const letters = document.querySelectorAll('.hero-text-style');
  letters.forEach((ltr, idx) => {
    ltr.classList.add('animateLtr')
    ltr.style.animationDelay = `${idx * 0.1}s`;
  })
}

function Letter(props) {

  useEffect(() => {
    animateLetter();
  }, [])

  return (
    <span className="hero-text-style">
      {props.ltr}
    </span>
  )
}

Letter.propTypes = {
  ltr: PropTypes.string.isRequired,
};

export default Letter;