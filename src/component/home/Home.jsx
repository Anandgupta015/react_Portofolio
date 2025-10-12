import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <div id="home">

      <div className="lefthome">
         <div className="homedetails">
                <div className="line1">I'm</div>
                <div className="line2">Anand Gupta</div>
                <div className="line3">
                 <TypeAnimation
                sequence={[
                  "Web Developer", 1000,
                  "MERN Stack Developer", 1000,
                  "Software Developer", 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
                </div>
         </div>
      </div>

            <div className="righthome">
                <img src={man} alt="" />  
            </div>


    </div>
  )
}

export default Home