import { useState, useEffect } from "react";
import { Grid, Stack, TextField, Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { SelectorBoxValues } from "./Pages/PlanPage";
import { Link } from 'react-router-dom';
import placeholderImage from "../placeholder.jpg";
import PlantItem from "./PlantItem";

export interface PlantItemValues {
	commonPlantName: string;
	sciPlantName: string;
	plantUse: string;
	plantQuantity?: number;
	adderFunc?: Function;
}

function SelectorBox(props: SelectorBoxValues) {

	// Use State to update the avialable list of plants that can be selected
	const availablePlantList = ["Type: Shrub", "Type: Understory", "Type: Tree", "Type: Canopy"]

	// Function to remove a plant from the list
	const removePlant = (plantName: string) => {
		// For loop to iterate through the list
		for (
			let loopCount = 0;
			loopCount < props.selectorList.length;
			loopCount++
		) {
			// Compare the values
			if (props.selectorList[loopCount] === plantName) {
				// If match, then remove the list along with the quantity
				props.selectorList.splice(loopCount, 2);
			}
		}
	};

	return (
		<>
			<Stack>
				<h2 className="box-header">{props.title}</h2>
				<Grid container>
					<Grid item xs={7}>
						<h3>Plant</h3>
					</Grid>

					<Grid item xs={5}>
						<h3>Quantity</h3>
					</Grid>
					<Grid item xs={1} />
					<Grid item xs={11}>
						<Stack>
							<Grid container>
								<Grid item xs={1}>
									<Button variant="contained" onClick={ () => {} }>Add Plant</Button>
								</Grid>
								<Grid item xs={4.5} alignItems="left">
									<h3>Add new plant to list</h3>
								</Grid>
							</Grid>
							{availablePlantList.map((plantDisplay) => (
							<PlantItem
								commonPlantName={"Common Name"}
								sciPlantName={plantDisplay}
								plantUse="remove"
							/>
					))}
						</Stack>
						<br></br>
						<Button component={ Link } to="/plant-list" variant="contained">Confirm</Button>
					</Grid>
				</Grid>
			</Stack>
		</>
	);
}

export { SelectorBox as default };
