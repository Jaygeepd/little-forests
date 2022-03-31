import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { Footer, Header } from "../common";
import { Link } from "react-router-dom";

export default function BrowseForests() {
	return (
		<div className="BrowseLittleForests">
			<Header />

			<Grid
				container
				style={{ marginTop: "15vh", marginBottom: "15vh" }}
				justifyContent="center"
				alignItems="stretch"
				direction="column"
			>
				<Grid item>
					<h2>Browse Little Forests</h2>
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
									alt="carolinian"
									height="250"
									image={require("./images/CarolinianForest.jpg")}
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
									>
										Sample Carolinian Forest
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Carolinian Forest
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										flexDirection: "column",
										alignContent: "center",
									}}
								>
									<Button
										component={Link}
										to="/browse-forest-page"
										sx={{ marginBottom: 2 }}
										variant="outlined"
										size="small"
									>
										View Projet
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
					{[1, 2, 3].map((value) => (
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
									alt="placeholder"
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
									>
										Little Forest Name
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Forest Type
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										flexDirection: "column",
										alignContent: "center",
									}}
								>
									<Button
										component={Link}
										to="/browse-forest-page"
										sx={{ marginBottom: 2 }}
										variant="outlined"
										size="small"
									>
										View Projet
									</Button>
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
