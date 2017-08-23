import React from "react"
import { Header } from "./Header"
import Instructions from "./Instructions"
import Display from "./Display"
import Footer from "./Footer"


const Roguelike = () => 
	<div className="roguelike">
		<Header />
		<Display />
		<Instructions />
		<Footer />
	</div>

export default Roguelike