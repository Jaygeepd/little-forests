import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressStepper from "../ProgressStepper";
import { useNavigate } from "react-router-dom";
import AccountHeader from "../common/AccountHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

function ForestResultsList() {
	const [spacing, setSpacing] = useState(2);
	let navigate = useNavigate();

	return (
		<div>
			<AccountHeader />
			<br />
			<br />
			<br />
			<br />
			<br />
			<h2>Forest Results List</h2>
			<ProgressStepper />
			<br />
			<br />
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid container justifyContent="center" spacing={5}>
					{[0].map((value) => (
							<Grid key={value} item>
								<Box
									onClick={() => {
										navigate("/results-page");
									}}
									sx={{
										borderRadius: 4,
										height: 410,
										width: 360,
										backgroundColor: "primary.dark",
										"&:hover": {
											backgroundColor: "primary.main",
											opacity: [0.9, 0.8, 0.7],
										},
									}}
								>
									<Card
										sx={{
											maxWidth: 300,
											p: 3,
											backgroundColor: "primary.main",
										}}
									>
										<CardActionArea>
											<CardMedia
												component="img"
												height="200"
												image={require("./images/CarolinianForest.jpg")}
												alt="Image placeholder"
												style={{ borderRadius: 5 }}
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
												>
													Carolinian Forest
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													The Carolinian forest refers to a life zone in eastern North America characterized primarily by the predominance of deciduous (broad-leaf) forest.
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Box>
							</Grid>
						))}
						{[1, 2].map((value) => (
							<Grid key={value} item>
								<Box
									onClick={() => {
										navigate("/results-page");
									}}
									sx={{
										borderRadius: 4,
										height: 410,
										width: 360,
										backgroundColor: "primary.dark",
										"&:hover": {
											backgroundColor: "primary.main",
											opacity: [0.9, 0.8, 0.7],
										},
									}}
								>
									<Card
										sx={{
											maxWidth: 300,
											p: 3,
											backgroundColor: "primary.main",
										}}
									>
										<CardActionArea>
											<CardMedia
												component="img"
												height="200"
												image={require("./images/image-placeholder.png")}
												alt="Image placeholder"
												style={{ borderRadius: 5 }}
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
												>
													Forest Type
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													This forest type is commonly
													found in North America and
													has these unique features
													that distinguish it from
													other forest types...
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default ForestResultsList;

