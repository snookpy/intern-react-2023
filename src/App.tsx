import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MatApp from './components/MatApp/MatApp'

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('first first')
    }, [])
    return <MatApp />
}

export default App
