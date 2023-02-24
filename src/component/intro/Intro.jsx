import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import "./intro.scss"

function Intro() {
 const textRef = useRef();
 useEffect(() => {
  init(textRef.current, {
    showCursor: false,
    backDelay: 1500,
    backSpeed:60,
    strings: ["Developer"],
  });
}, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/jide.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
           <h2>Hello, I am</h2>
           <h1>Olajide</h1>
           <h3>Software <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
           <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro