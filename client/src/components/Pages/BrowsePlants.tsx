import { Button, Card, CardMedia, CardContent, CardActions, Typography, Grid } from "@mui/material";
import { Footer, Header } from "../common";
import { Link } from 'react-router-dom';

export default function BrowsePlants() {
	return (
		<div>
			<Header />
			<Grid
				container
				style={{ marginTop: "15vh", marginBottom: "15vh" }}
				justifyContent="center"
				alignItems="stretch"
				direction="column"
			>
				<Grid item>
					<h2>Browse Plants</h2>
				</Grid>

				<Grid
					container
					style={{}}
					justifyContent="center"
					alignItems="stretch"
					direction="row"
				>
					{[0].map((value) => (
						<Grid key={value} item>
							<Card
								sx={{
									width: 250,
									maxWidth: 300,
									backgroundColor: "#e1e1e1",
									borderRadius: 5,
									padding: 3,
									margin: 2,
								}}
							>
								<CardMedia
									component="img"
									alt="Placeholder Image" /*prop later?*/
									height="250"
									image={require("./images/norwaymaple.jpg")}
									sx={{
										border: 1,
										borderColor: "white",
										borderRadius: 3,
									}}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										sx={{ textAlign: "left" }}
									>
										Norway Maple
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ textAlign: "left" }}
									>
										The Norway Maple is native to Europe and can be found 
										throughout Ontario, Quebec and NewfoundLand...
									</Typography>
								</CardContent>
								<CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
									<Button component={Link} to='/indiv-plant-page' sx={{ marginBottom:2 }} variant="outlined" size="small">View Plant</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
					{[1].map((value) => (
						<Grid key={value} item>
							<Card
								sx={{
									width: 250,
									maxWidth: 300,
									backgroundColor: "#e1e1e1",
									borderRadius: 5,
									padding: 3,
									margin: 2,
								}}
							>
								<CardMedia
									component="img"
									alt="Placeholder Image" /*prop later?*/
									height="250"
									image={require("./images/Ohiobuckeye.jpeg")}
									sx={{
										border: 1,
										borderColor: "white",
										borderRadius: 3,
									}}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										sx={{ textAlign: "left" }}
									>
										Ohio Buckeye
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ textAlign: "left" }}
									>
										Aesculus glabra, commonly known as Ohio buckeye, is a species of tree in the soapberry family (Sapindaceae) native to North America...
									</Typography>
								</CardContent>
								<CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
									<Button component={Link} to='/indiv-plant-page' sx={{ marginBottom:2 }} variant="outlined" size="small">View Plant</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
					{[2, 3].map((value) => (
						<Grid key={value} item>
							<Card
								sx={{
									width: 250,
									maxWidth: 300,
									backgroundColor: "#e1e1e1",
									borderRadius: 5,
									padding: 3,
									margin: 2,
								}}
							>
								<CardMedia
									component="img"
									alt="Placeholder Image" /*prop later?*/
									height="250"
									image={require("./images/image-placeholder.png")}
									sx={{
										border: 1,
										borderColor: "white",
										borderRadius: 3,
									}}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										sx={{ textAlign: "left" }}
									>
										Plant Name
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ textAlign: "left" }}
									>
										Description: Lorem ipsum dolor sit amet,
										consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et
										dolore magna aliqua.
									</Typography>
								</CardContent>
								<CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
									<Button component={Link} to='/indiv-plant-page' sx={{ marginBottom:2 }} variant="outlined" size="small">View Plant</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
}
