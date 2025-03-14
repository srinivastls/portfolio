/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import Divider from '@mui/material/Divider';

const langsImages = [
  { name: "C", path: "./public/assets/c.png" },
  { name: "C++", path: "./public/assets/cpp.png" },
  { name: "Python", path: "./public/assets/python.png" },
  { name: "HTML", path: "./public/assets/html.png" },
  { name: "JavaScript", path: "./public/assets/js.png" },
];

const fworksImages = [
  { name: "CSS", path: "./public/assets/css.png" },
  { name: "PyTorch", path: "./public/assets/pytorch.png" },
  { name: "TensorFlow", path: "./public/assets/tf.png" },
  { name: "NumPy", path: "./public/assets/numpy.png" },
  { name: "pandas", path: "./public/assets/pandas.png" },
  { name: "Matplotlib", path: "./public/assets/plt.png" },
  { name: "Node.js", path: "./public/assets/nodejs.png" },
  { name: "React.js", path: "./public/assets/react.png" },
];

function displayList(list, typeSkill) {
  return list.map((element, index) => {

    const delay = typeSkill === "languages" ? `calc(25s / ${list.length} * (${list.length} - ${index}) * -1)` : "0s";

    return (
      <div 
        key={index} 
        className={`skill-div ${element.name.replace("+", "p").toLowerCase()}`}
        id={typeSkill} 
        data-content={element.name}
        style={{animationDelay: delay}}
      >
        <img src={element.path} draggable="false" className="skill" style={{WebkitUserSelect: 'none'}}/>
      </div>
    )
  })
}

function SkillList(props) {

  const lview = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }

  const fview = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "2.5rem",
  }

  if (props.type === "languages") {
    return (
      <div style={lview} id="languages-list">
        {displayList(langsImages, props.type)}
      </div>
    )
  } 
  else if (props.type === "fworks") {
    return (
      <div style={fview} id="fworks-list">
        {displayList(fworksImages, props.type)}
      </div>
      )
  }
}

SkillList.propTypes = {
  type: PropTypes.string.isRequired
}

export default SkillList;