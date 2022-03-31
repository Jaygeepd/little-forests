import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Footer, Header } from "../common";

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
										throughout Ontario, Quebec and NewfoundLand. It inhabits mainly urban 
										areas but will also grow in open mesic wooded areas and is quite 
										tolerant to pollution. Its shallow roots break sidewalks and its dense 
										foliage and shallow roots prevent native species from growing underneath. 
										It is an invasive species in Canada, and control methods include cutting, 
										and digging or pulling out saplings. Unlike most other maples, it has a 
										milky sap and is tolerant of any soil conditions. This species, which was 
										introduced to the United States from Europe in 1756, is still being sold 
										in nurseries today.
									</Typography>
								</CardContent>
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
										Aesculus glabra, commonly known as Ohio buckeye, is a species of tree in the soapberry family (Sapindaceae) native to North America.
										Its natural range is primarily in the Midwestern and lower Great Plains regions of the United States, extending southeast into the geological Black Belt of Alabama and Mississippi. 
										It is also found locally in the extreme southwest of Ontario, on Walpole Island in Lake St. Clair.
										It is found in a variety of natural habitats, including streambanks, upland mesic forests, and along the margins of old fields. It is typically found in calcareous areas.
									</Typography>
								</CardContent>
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
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
}
