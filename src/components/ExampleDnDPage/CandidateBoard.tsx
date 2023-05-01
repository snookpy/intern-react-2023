import {
	DragDropContext,
	DropResult,
	ResponderProvided,
} from "react-beautiful-dnd"
import CandidateBoardContext from "./CandidateBoardContext"
import ColumnDroppable from "./ColumnDroppable"
import { Grid } from "@mui/material"
import { useContext } from "react"

export interface IBoardColumn {
	columnID: string
	title: string
}

function CandidateBoard() {
	const { onChangeCandidateStatus } = useContext(CandidateBoardContext)

	const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
		// When drop to unknown area
		if (!result.destination) return

		const { source, destination, draggableId } = result
		// When drop to other column, change status
		if (source.droppableId !== destination.droppableId) {
			onChangeCandidateStatus(draggableId, destination.droppableId as any)
		}

		// TODO: When drop the same column, it should be sorted
		else if (source.droppableId === destination.droppableId) {
			return
		}
	}
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<ColumnDroppable
						column={{
							title: "Applied",
							columnID: "applied",
						}}
					/>
				</Grid>
				<Grid item xs={3}>
					<ColumnDroppable
						column={{
							title: "Interview",
							columnID: "interview",
						}}
					/>
				</Grid>
				<Grid item xs={3}>
					<ColumnDroppable
						column={{
							title: "Pass",
							columnID: "pass",
						}}
					/>
				</Grid>
				<Grid item xs={3}>
					<ColumnDroppable
						column={{
							title: "Reject",
							columnID: "reject",
						}}
					/>
				</Grid>
			</Grid>
		</DragDropContext>
	)
}

export default CandidateBoard
