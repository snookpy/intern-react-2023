import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import useExampleNavBar from "./useExampleNavBar"

export default function ExampleNavBar() {
	const { goToDnD, goToForm } = useExampleNavBar()

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Example React Intern 2023
					</Typography>
					<Button color="inherit" onClick={goToDnD}>
						Board
					</Button>

					<Button color="inherit" onClick={goToForm}>
						Form
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
