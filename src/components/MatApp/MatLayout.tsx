import ExampleNavBar from "../ExampleNavBar/ExampleNavBar"
import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

function MatLayout() {
	return (
		<>
			<ExampleNavBar />
			<Container
				sx={{
					mt: 2,
				}}
			>
				<Outlet />
			</Container>
		</>
	)
}

export default MatLayout
