// import { useState } from "react"
// import PropTypes from "prop-types";
import { useEffect } from "react";
import Letter from "./Letter";
import { ReactLenis } from "lenis/dist/lenis-react"

function Name(){
  const name = "Sumakar".split('');

  useEffect(() => {
    document.querySelector('.hero-title').classList.add('animateLtr');
  }, [])


  return (
    <ReactLenis root
      options={{
        lerp: 0.05
      }}
    > 
    <div style={{gridColumn: '1'}}>
      <div className="hero-title">Hello! I&apos;m</div>
      <br />
      <div style={{display: 'flex', justifyContent: 'center', width: 'fit-content'}}>
        {name.map((l, idx) => {
          return <Letter key={idx} ltr={l}/>
        })}
      </div>
    </div>
    </ReactLenis>
  )
}

export default Name;