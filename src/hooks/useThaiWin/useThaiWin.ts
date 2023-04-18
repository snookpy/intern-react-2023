import { useCallback, useState } from "react"
import { enterThaiWin, exitThaiWin } from "../../api/weWinApi"

const useThaiWin = () => {
	const [isLogin, setIsLogin] = useState<boolean>(false)

	const enter = useCallback(() => {
		setIsLogin(true)
		enterThaiWin()
	}, [])

	const exit = useCallback(() => {
		setIsLogin(false)
		exitThaiWin()
	}, [])

	return [isLogin, enter, exit] as const
}

export default useThaiWin
