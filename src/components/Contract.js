import React from "react";

const Contract = () => {
	return (
		<div id='contact'>
			<h1>CONTACT US</h1>
			<form>
				<input type='text' placeholder='Full Name' required />
				<input type='email' placeholder='Enter Email' required />
				<textarea
					name='message'
					placeholder='Write Here......'
				></textarea>
				<input type='submit' value='Send' />
			</form>
		</div>
	);
};

export default Contract;
