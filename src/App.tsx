import { useEffect, useState } from 'react'
import usePrimeNumber from './hooks/usePrimeNumber/usePrimeNumber'
import MatApp from './components/MatApp/MatApp'

function App() {
    const [count, setCount] = useState(0)
    const [isPrime, calIsPrime, _num] = usePrimeNumber()
    console.log()

    useEffect(() => {
        console.log('first first')
    }, [])
    return <MatApp />
}

export default App
