import { useState } from 'react'

const usePrimeNumber = () => {
    const [isPrime, setIsPrime] = useState<boolean>(false)
    const [_num, setNum] = useState<number>(0)

    const calIsPrime = (num: number) => {
        setNum(num)

        if (num < 2) {
            setIsPrime(false)
            return false
        }
        if (num === 2 || num === 3) {
            setIsPrime(true)
            return true
        }
        if (num % 2 === 0) {
            setIsPrime(false)
            return false
        }

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                setIsPrime(false)
                return false
            }
        }

        setIsPrime(true)
        return true
    }

    return [isPrime, calIsPrime, _num] as const
}

export default usePrimeNumber
