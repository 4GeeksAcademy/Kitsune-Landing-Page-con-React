import React from "react";


//include images into your bundle

import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import Jumbotron from "./Jumbotron";


//create your first component
const Home = () => {
	return (
		
		<div className="text-center" >
			<Navbar />
			 
			
			<div className="jumbotron" style={{margin:"0px 30px 0px 40px"}}>
				<Jumbotron/>
			</div>

			<div className="container-fluid row justify-content-center">
				<Cards/>
			</div>

			<Footer/>
		</div>
	);
};

export default Home;
