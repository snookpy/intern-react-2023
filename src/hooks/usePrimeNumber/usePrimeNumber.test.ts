import usePrimeNumber from "./usePrimeNumber"
import { act, renderHook } from "@testing-library/react"

describe("usePrimeNumber", () => {
	test("fully return;", () => {
		const { result } = renderHook(usePrimeNumber)

		expect(result.current).toEqual([
			expect.any(Boolean),
			expect.any(Function),
			expect.any(Number),
		])
	})

	describe("should check is Prime number correctly", () => {
		test.each([
			{
				num: 2,
				isPrime: true,
			},
			{
				num: 13,
				isPrime: true,
			},
			{
				num: 0,
				isPrime: false,
			},
			{
				num: 99,
				isPrime: false,
			},
			{
				num: 103,
				isPrime: true,
			},
			{
				num: 27,
				isPrime: false,
			},
			{
				num: 29,
				isPrime: true,
			},
			{
				num: 37,
				isPrime: true,
			},
		])("$num is prime: $isPrime", ({ num, isPrime }) => {
			// Arrange
			const { result } = renderHook(usePrimeNumber)

			// Act
			act(() => {
				result.current[1](num)
			})

			// Assert
			expect(result.current[0]).toEqual(isPrime)
			expect(result.current[2]).toEqual(num)
		})
	})
})
