import React from "react";
import abouts from "../images/about.png";
const About = () => {
	return (
		<div id='about'>
			<div className='about-image'>
				<img src={abouts} alt='' />
			</div>
			<div className='about-text'>
				<h1>LEARN MORE ABOUT US</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Enim accusantium laboriosam dignissimos facilis provident
					iste.
				</p>
				<button>READ MORE</button>
			</div>
		</div>
	);
};

export default About;
