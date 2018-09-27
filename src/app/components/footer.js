import React from "react";

class Footer extends React.Component{
	render(){
		return(
			<div>
				<div id='footer'>
					<div className='container'>
						<div className="footer-content">
							<p> { new Date().getFullYear() } &copy; Digital Curriculum </p>
						</div>	
					</div>
				</div>
			</div>
		);
	}
};

module.exports = Footer;