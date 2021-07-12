import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./scss/app.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import ReviewForm from "./pages/Reviews";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

// Error
import Error from "./pages/Error";

function App() {
	return (
		<div className="wrapper w-100">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route path="/services" component={Services} />
					<Route path="/Template" component={ProjectPage} />
					<Route path="/contact#contactForm" component={Contact} />
					<Route exact path="/contact" component={Contact} />
					{/* <Route path="/reviews" component={ReviewForm} /> */}
					<Route exact path="/home/:id" childern={<ProjectPage />}>
						<ProjectPage />
					</Route>
					<Route exact path="/services/:id" childern={<ProjectPage />}>
						<ProjectPage />
					</Route>
					{/* Handle relevant projects paths */}
					<Route exact path={"/projects/:id"} children={<ProjectPage />}>
						<ProjectPage />
					</Route>
					<Route path="*" component={Error} />
				</Switch>
				{/* <!-- Mobile bar hidden on 450px screens and up --> */}
				<MobileNav />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
