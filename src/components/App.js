import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Side from "./Side";
import Footer from "./Footer";

import Main from "./Main";
import About from "./About";
import YoungEagles from "./YoungEagles";
import Gallery from "./Gallery";
import Contact from "./Contact";

const App = () => {
	return (
		<Router>
			<div className="container">
				<div className="grid">
					<Header />
					<Side />
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/about" component={About} />
						<Route path="/ye" component={YoungEagles} />
						<Route path="/gallery" component={Gallery} />
						<Route path="/contact" component={Contact} />
						<Redirect to="/"  />
					</Switch>
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default App;
