import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
	const [nav, setNav] = useState(false);

	const chnageBackground = () => {
		if (window.scrollY >= 50) {
			setNav(true);
		} else {
			setNav(false);
		}
	};
	window.addEventListener("scroll", chnageBackground);
	return (
		<nav className={nav ? "nav active" : "nav"}>
			<Link to='#' className='logo'>
				<img src={logo} alt='' />
			</Link>
			<input className='menu-btn' type='checkbox' id='menu-btn' />
			<label className='menu-icon' for='menu-btn'>
				<span className='nav-icon'></span>
			</label>
			<ul className='menu'>
				<li>
					<Link to='main'>HEADER</Link>
				</li>
				<li>
					<Link to='features'>FEATURES</Link>
				</li>
				<li>
					<Link to='offer'>OFFER</Link>
				</li>
				<li>
					<Link to='about'>ABOUT</Link>
				</li>
				<li>
					<Link to='contact'>CONTACT</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
