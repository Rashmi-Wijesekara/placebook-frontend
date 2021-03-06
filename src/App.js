import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import Card from "./shared/components/UIElements/Card";

function App() {
	return (
		<Router>
			<MainNavigation />
			<Switch>
				{/* this route will work only when the path is exactly "/" */}
				<Route path="/" exact={true}>
					<Users/>
				</Route>

				<Route path="/:uid/places" exact>
					<UserPlaces />
				</Route>

				<Route path="/places/new" exact>
					<NewPlace />
				</Route>

				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
