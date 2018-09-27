import React from "react";

// Components - Header
import { Header } from "./header";

// CSS - Home 
require('../../css/allprogram.css');

class Home extends React.Component{
	render(){
		return(
			<div>
				<div id="header-part">
			    	<nav className="navbar navbar-custom navbar-fixed-top">	
			        	<div className="container">    
				            <div className="navbar-header">
				                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
									<span className='sr-only'>Toggle navigation</span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
								</button>
				                <a className="navbar-brand" href="">Digital Curriculum</a>
				            </div>
				            <div className="collapse navbar-collapse navbar-right">
				                <ul className="nav navbar-nav">
				                	<li><a href="/">HOME</a></li>
				                	<li><a href="/signin">SIGNIN</a></li>
				                	<li><a href="/signup">SIGNUP</a></li>
				                </ul>
				            </div>
				        </div>
					</nav>    
				</div>
				<div id='home'>
					<div className='container'>
						<div className="home-content">
							<h2>STEM Digital Curriculum</h2>
							<h4>Comprehensive hands-on preK-12 Digital Curriculum series for Schools </h4>
						</div>	
					</div>
				</div>
				<div id='home-image'>
					<div className='container'>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="home-image-content">
								<img src="https://placehold.it/450x200" className="img-responsive" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="home-image-content">
								<img src="https://placehold.it/450x200" className="img-responsive" />
							</div>
						</div>		
					</div>
				</div>
				<div id='home-program'>
					<div className='container'>
						<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
							<div className="home-program-content">	
								<h4> STEM in Motion </h4>
								<p> Sense of style and trend goes in hand with all kinds of projects today. If you are applying your precious time onto building something, it ought to look good and reflect class.</p> 
							</div>
						</div>
						<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
							<div className="home-program-content">	
								<h4> Super Hero Engineering </h4>
								<p> Have you ever wondered if there could be a real life Batman or Iron Man or for that matter Dexter! It always excites us here at STEM Champ, to think about them and how they came into being.</p> 
							</div>
						</div>
					</div>
				</div>
				<nav className="navbar-fixed-bottom">
					<div id='footer'>
						<div className='container'>
							<div className="footer-content">
								<p> { new Date().getFullYear() } &copy; Digital Curriculum </p>
							</div>	
						</div>
					</div>
				</nav>	
			</div>	
		);
	}
};

module.exports = Allprogram;