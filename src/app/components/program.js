import React from 'react';

// Components
import Header from './header';		// Header
import Footer from './footer';		// Footer
import program_data from '../../data/program.json';

// CSS
require('../../css/program.css');

class Program extends React.Component{
	constructor(){
		super();
		this.state = {
			header_title: ['PROGRAM','CART'],
			program_title: 'Programs'
		}
	};
	render(){
		return(
			<div>
				<Header title={this.state.header_title} />
				<div id='program'>
					<div className='container'>
						<h2>{this.state.program_title}</h2>
						{program_data.map(function(obj){
							return <div key={ obj.program_id } className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="program-content">
									<h4>{obj.program_name}</h4>
									<div className="program-detail">	
										<img src="https://placehold.it/150x170" className="img-responsive" />
										<div className="program-info">
											<h5>
												<i className="fa fa-folder-o" aria-hidden="true"></i> 
												&nbsp;{'Grade: '+obj.program_grade}
											</h5>
											<h5>
												<i className="fa fa-clock-o" aria-hidden="true"></i>
												&nbsp;{obj.program_duration+' Months'}
											</h5>
											<h5>
												<i className="fa fa-inr" aria-hidden="true"></i>
												&nbsp;{obj.program_cost}
											</h5>
											<a className="read-more" href={"/program/"+obj.program_id}>Read More...</a>
										</div>	
									</div>
								</div>
							</div>
						})}	
					</div>
				</div>
				<nav className="navbar-fixed-bottom">
					<Footer />
				</nav>
			</div>
		);
	}		
};

module.exports = Program;
