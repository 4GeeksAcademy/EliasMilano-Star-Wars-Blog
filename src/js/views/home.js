import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";
import { Context } from "../store/appContext"

export const Home = () => {
	
	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	},[])

	return (
		<div className="text-center mt-3">
			<h1 className="text-warning" style={{fontFamily: "Star Wars"}}>Star Wars</h1>

			<div className="container-fluid d-flex mb-2" >
					<h2 className="text-secondary">Characters  <i className="fa-solid fa-jedi"/></h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						store.characters.map((item, index) => {
							return (
								<CardCharacters key={index} name={item.name} uid={item.uid}></CardCharacters>
							)
						})
					}
				</div>
			</div>

			<div className="container-fluid d-flex mb-2" >
					<h2 className="text-secondary">Planets  <i className="fa-solid fa-earth-asia"/></h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						store.planets.map((item, index) => {
							return (
								<CardPlanets key={index} name={item.name} uid={item.uid}></CardPlanets>
							)
						})
					}
				</div>
			</div>

			<div className="container-fluid d-flex mb-2" >
					<h2 className="text-secondary">Vehicles  <i className="fa-solid fa-jet-fighter-up"/></h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row d-flex flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						store.vehicles.map((item, index) => {
							return (
								<CardVehicles key={index} name={item.name} uid={item.uid}></CardVehicles>
							)
						})
					}
				</div>
			</div>

		</div>
	)
};
