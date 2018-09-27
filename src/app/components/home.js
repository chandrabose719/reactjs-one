import React from "react";

// Components - Header
import Header from "./header";
import Footer from './footer';

// Home CSS
require('../../css/home.css');

class Home extends React.Component{
	constructor() {
		super();
		this.state = {
			header_title: ['HOME', 'SIGNIN', 'SIGNUP']
		}
	};
	render(){
		return(
			<div>
				<Header title={this.state.header_title} />
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
				<Footer/>	
			</div>	
		);
	}
};

module.exports = Home; 