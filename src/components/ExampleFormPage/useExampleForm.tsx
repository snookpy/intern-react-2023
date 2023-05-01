import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export interface IExampleForm {
	firstName: string
	lastName: string
	email: string
	score: number
	gender: "female" | "male"
	comment?: string
}

const validationSchema = z.object({
	firstName: z.string().min(1, { message: "First name is required" }),
	lastName: z.string().min(1, { message: "Last name is required" }),
	email: z.string().min(1, { message: "Email is required" }).email({
		message: "Must be a valid email",
	}),
	score: z.number().positive(),
	comment: z.string().optional(),
})

const useExampleForm = () => {
	const form = useForm<IExampleForm>({
		resolver: zodResolver(validationSchema),
		defaultValues: {
			gender: "female",
			firstName: "",
			lastName: "",
			email: "",
			comment: "",
		},
	})
	return form
}

export default useExampleForm
