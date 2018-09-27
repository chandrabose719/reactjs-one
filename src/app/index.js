import React from "react";
import { render } from "react-dom";
import {Switch, Route, BrowserRouter} from 'react-router-dom';

// // Components
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Program from './components/program';

// CSS
// import { common } from './css/common.css';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/home' component={Home} />
					<Route path='/signin' component={Signin} />
					<Route path='/signup' component={Signup} />
					<Route path='/program' component={Program} />
				</Switch>
			</BrowserRouter>
		);
	}
};

render(<App/>, window.document.getElementById('wrapper'));