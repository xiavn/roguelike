import React from "react";
import { Header } from "./header/header";
import Instructions from "./instructions";
import Display from "./display/display";
import Footer from "./footer";


const Roguelike = () => 
	<div className="roguelike">
		<Header />
		<Instructions />
		<Display />
		<Footer />
	</div>;

export default Roguelike;