import { TextField } from '@mui/material'
import { useState } from 'react'
import {
    SubmitHandler,
    useForm,
    Controller,
    SubmitErrorHandler,
} from 'react-hook-form'
// Control vs Un-control

function DemoFormPage() {
    const demoForm = useForm()

    const { register, handleSubmit, formState } = demoForm

    const { errors } = formState
    const onSubmitSuccess: SubmitHandler<any> = (values) => {
        console.log('values values values : ', values)
    }
    const onSubmitError: SubmitErrorHandler<any> = (error) => {
        console.log('error error: ', error)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitSuccess, onSubmitError)}>
                <div>
                    {/* <label htmlFor="first-name">First Name</label> */}
                    <TextField
                        id="outlined-uncontrolled"
                        label="FirstName"
                        error={Boolean(errors?.firstName)}
                        helperText={errors?.firstName?.message as any}
                        {...register('firstName', {
                            required: 'First Name is required',
                            minLength: 5,
                        })}
                    />
                </div>
                <div>
                    <TextField
                        label="LastName"
                        {...register('lastName', { required: true })}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-uncontrolled"
                        label="email"
                        type="email"
                        {...register('email', { required: true })}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default DemoFormPage
