import React from "react";
import Featurebox from "./Featurebox";
import image1 from "../images/1.svg";
import image2 from "../images/2.svg";
import image3 from "../images/3.svg";
import image4 from "../images/4.svg";
const Features = () => {
	return (
		<div className='features'>
			<h1>Features</h1>
			<div className='a-container'>
				<Featurebox image={image1} title='WeightLifting' />
				<Featurebox image={image2} title='Specific Muscle' />
				<Featurebox image={image3} title='Flex your Muscle' />
				<Featurebox image={image4} title='cardio Exercise' />
			</div>
		</div>
	);
};

export default Features;
