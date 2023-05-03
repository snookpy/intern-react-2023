import { useState } from 'react'

const usePrimeNumber = () => {
    const [isPrime, setIsPrime] = useState<Boolean>(true)
    const [inputNum, setInputNum] = useState<Number>(0)
    const calIsPrime = (num: number) => {
        setInputNum(num)
        if (num <= 1) {
            setIsPrime(false)
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                setIsPrime(false)
                break
            }
        }
    }

    return [isPrime, calIsPrime, inputNum] as const
}

export default usePrimeNumber
