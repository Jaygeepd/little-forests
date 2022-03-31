import * as React from "react";
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { setConstantValue } from "typescript";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// We want to pass in the hook information to close the modal once the user has completed their task here
interface HookProps {
	modalState: boolean;
	setState: any;
}

const theme = createTheme();

const LogIn = (props: HookProps) => {
	let navigate = useNavigate();

	const [signUpOpen, setSignUpOpen] = React.useState(false);

	const handleSignUp = () => {
		props.setState(false);

		setSignUpOpen(true);
	}

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			// set the login url
			let res = await fetch(
				process.env.REACT_APP_API + "/api/users/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				}
			);

			if (res.status === 200) {
				setEmail("");
				setPassword("");
				setMessage("Login Successfully");
				setIsLoggedIn(true);
				console.log("Logged in");
				navigate("/dashboard");
			} else {
				console.log(await res.text());
				setMessage("Log in failed, please try again.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Log In
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="user-or-email"
									label="Username or Email"
									name="user-or-email"
									autoComplete="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Log In
						</Button>
						{isLoggedIn? props.setState(false): <p>{message}</p>}
						<Grid container justifyContent="flex-end">
							<Grid item>
								<a onClick={handleSignUp}>
									Don't have an account? Sign Up
								</a>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
};

export { LogIn as default };
