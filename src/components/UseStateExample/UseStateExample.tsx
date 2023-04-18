import { useState } from "react"

function UseStateExample() {
	const [count, setCount] = useState<number>(0)

	const increase = () => {
		setCount((p) => p + 1)
	}

	return (
		<div>
			<p>Count is: {count}</p>
			<div>
				<button onClick={increase}>Plus + 1</button>
			</div>
		</div>
	)
}

export default UseStateExample
