import { useState } from 'react'

const usePrimeNumber = () => {
    const [_num, setNum] = useState<number>(0)
    const [isPrime, setIsPrime] = useState<boolean>(false)

    const calIsPrime = (num: number) => {
        setNum(num)

        if (num <= 0) {
            setIsPrime(false)
            return
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                setIsPrime(false)
                return
            }
        }

        setIsPrime(true)
    }

    return [isPrime, calIsPrime, _num] as const
}

export default usePrimeNumber
