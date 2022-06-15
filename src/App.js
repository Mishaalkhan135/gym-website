import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Offers from "./components/Offers";
import About from "./components/About";
import Contract from "./components/Contract";
function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<Features />
			<Offers />
			<About />
			<Contract />
		</div>
	);
}

export default App;
