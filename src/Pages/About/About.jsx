import "./About.css";

import React from 'react'

function About() {
  return (
    <div className="About_Us">
      <div className="About_Us_container">
        <div className="aboutus_image">
          <img src="../../src/assets/Kitchen2.jpg" alt="" />
        </div>
        <div className="aboutus_content">
          <h1 className="aboutus_heading">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur autem, nisi quos id alias aliquid ipsum perspiciatis dicta? Iure eius incidunt deserunt veniam temporibus exercitationem delectus perspiciatis reiciendis voluptate?
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente placeat soluta sunt dolor at id, praesentium optio explicabo repellat consectetur aperiam in fuga repellendus ratione beatae laudantium corrupti quia modi?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
