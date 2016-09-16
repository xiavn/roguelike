import React from "react";
import Header from "./header";
import Instructions from "./instructions";
import Display from "./display";
import Footer from "./footer";


const Roguelike = () => 
	<div className="roguelike">
		<Header />
		<Instructions />
		<Display />
		<Footer />
	</div>;

export default Roguelike;