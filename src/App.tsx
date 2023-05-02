import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MatApp from './components/MatApp/MatApp'
import usePrimeNumber from './hooks/usePrimeNumber/usePrimeNumber'
function App() {
    const [count, setCount] = useState(0)
    const [num] = usePrimeNumber()
    console.log(num)
    useEffect(() => {
        console.log('first first')
    }, [])
    return <MatApp />
}

export default App
