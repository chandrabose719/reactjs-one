import React from 'react';

// Components - Header
import Header from "./header";
import Footer from './footer';

// Authentication CSS
require('../../css/authentication.css');


class Signup extends React.Component{
	constructor(){
		super();
		this.state = {
			header_title: ['HOME','SIGNIN','SIGNUP']
		}
	};
	render(){
		return(
			<div>
				<Header title={this.state.header_title} />
				<div id='authentication'>
					<div className='container'>
						<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">	
							<div className="authentication-content">
								<h4>User Signup</h4>
								<form method="post">
									<div className="form-group">
										<label>User Name:</label>
										<input type="text" className="form-control" id="user_name" name="user_name" />
									</div>
									<div className="form-group">
										<label>User Email:</label>
										<input type="email" className="form-control" id="user_email" name="user_email" />
									</div>
									<div className="form-group">
										<label>User Password:</label>
										<input type="password" className="form-control" id="user_password" name="user_name" />
									</div>
									<div className="form-group">
										<input type="submit" className="form-control btn btn-info" name="signup-submit" value="Signup" />
									</div>	
								</form>
								<p>Have you an account? <a href="/signin"> Signin </a></p>
							</div>
						</div>		
					</div>
				</div>
				<nav className="navbar-fixed-bottom">
					<Footer />
				</nav>	
			</div>
		);
	}
};

module.exports = Signup;