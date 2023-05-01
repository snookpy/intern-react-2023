import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const useExampleNavBar = () => {
	const navigate = useNavigate()

	const goToDnD = useCallback(() => {
		navigate("/")
	}, [navigate])

	const goToForm = useCallback(() => {
		navigate("/form")
	}, [navigate])

	return {
		goToDnD,
		goToForm,
	}
}

export default useExampleNavBar
