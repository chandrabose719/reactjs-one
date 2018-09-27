import React from "react";

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			header_title: props.title
		}
	};
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
				 					<HeaderTitle title={this.state.header_title} />				 					
				             	</ul>
				         	</div>
				        </div>
					</nav>    
				</div>
			</div>
		);
	}
};

class HeaderTitle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			header_title: props.title
		}
	};
	render(){
		var header_title = this.state.header_title;
		return(
     		header_title.map(function(item, i){
     			var lowercaseItem = item.toLowerCase();
        		return <li key={ i }><a href={ "/"+lowercaseItem }>{ item }</a></li>
     		})
     	);
	};
};

module.exports = Header;