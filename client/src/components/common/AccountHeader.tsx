import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
	Box,
	Drawer,
	CssBaseline,
	Toolbar,
	Typography,
	Button,
	List,
	Divider,
} from "@mui/material";
import { Link } from 'react-router-dom';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 250;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-start",
}));

export default function AccountHeader() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [account, setAccount] = React.useState("Not Logged in");

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	React.useEffect(() => {
		console.log(process.env);
		fetch(process.env.REACT_APP_API + "/api/users/loggedin")
			.then((res) => {
				if (res.status === 200) {
					setAccount("loggedin");
				} else {
					setAccount("Not logged in");
				}
			})
			.catch(console.log);
	}, []);

	return (
		<div>
			<AppBar
				position="fixed"
				open={open}
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Button>
						<Link to="/">Little Forest</Link>
					</Button>
					<Typography
						align="left"
						variant="h6"
						noWrap
						sx={{ flexGrow: 1 }}
						component="div"
					>
						{account}
					</Typography>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerOpen}
						sx={{ ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
					},
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItemButton>
						<ListItemIcon>		
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</ListItemButton>
					<Divider />
					<ListItemButton component={Link} to="/">
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText primary="Log Out" />
					</ListItemButton>
				</List>
				<Divider />
				
			</Drawer>
		</div>
	);
}
