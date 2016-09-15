import React, { Component } from "react";

const Header = () => 
	<header>
		<Title />
		<Help_Btn />
	</header>;

const Title = () =>
	<h1>Title</h1>;

const Help_Btn = () =>
	<button>H</button>;

export default Header;
export { Title, Help_Btn };