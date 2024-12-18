import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Films } from "./views/films";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Starships } from "./views/starships";
import { Vehicles } from "./views/vehicles";
import { CharacterDetails } from "./views/characterDetails";
import { PlanetDetails } from "./views/planetDetails";
import { VehicleDetails } from "./views/vehicleDetails";
import { StarshipDetails } from "./views/starshipDetails";
import { FilmDetails } from "./views/filmDetails";
import { PageNotFound } from "./views/pageNotFound";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/films" element={<Films />} />
						<Route path="/films/:filmId" element={<FilmDetails />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:characterId" element={<CharacterDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:planetId" element={<PlanetDetails />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/starships/:starshipId" element={<StarshipDetails />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<PageNotFound/>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
