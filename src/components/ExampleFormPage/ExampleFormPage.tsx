import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material'
import Person2Icon from '@mui/icons-material/Person2'
import { ReactElement } from 'react'
import BadgeIcon from '@mui/icons-material/Badge'
import useExampleForm, { IExampleForm } from './useExampleForm'
import {
    Control,
    Controller,
    SubmitErrorHandler,
    SubmitHandler,
} from 'react-hook-form'

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const postToAPI = async () => {
    await sleep(3000)
    return 'success'
}

function IconTitle({ text, icon }: { text: string; icon: ReactElement }) {
    return (
        <Typography variant="h4">
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                {icon}
                {text}
            </Box>
        </Typography>
    )
}

function AdaptTextField({
    control,
    name,
    label,
    multiline = false,
    fullWidth,
    type,
}: {
    control: Control<IExampleForm, any>
    name: keyof IExampleForm
    label?: string
    multiline?: boolean
    fullWidth?: boolean
    type?: any
}) {
    return (
        <Controller
            render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
            }) => (
                <TextField
                    label={label}
                    value={value}
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched
                    inputRef={ref} // wire up the input ref
                    error={Boolean(error)}
                    helperText={error && error.message}
                    multiline={multiline}
                    rows={multiline ? 4 : undefined}
                    fullWidth={fullWidth}
                    type={type}
                />
            )}
            name={name}
            control={control}
        />
    )
}

function ExampleFormPage() {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting: isLoading },
    } = useExampleForm()
    // const form = useExampleForm()
    // const {formState} = form
    // const {isSubmitting} = formState

    const onSubmitSuccess: SubmitHandler<IExampleForm> = async (values) => {
        console.log('submit form success: ', values)
        await postToAPI()
    }
    const onSubmitError: SubmitErrorHandler<IExampleForm> | undefined = (
        error,
    ) => {
        console.log('submit form error: ', error)
    }

    return (
        <form onSubmit={handleSubmit(onSubmitSuccess, onSubmitError)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <IconTitle
                        icon={
                            <Person2Icon
                                fontSize="inherit"
                                sx={{
                                    alignSelf: 'center',
                                }}
                            />
                        }
                        text="Profile"
                    />
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item>
                        <AdaptTextField
                            label={'First Name'}
                            control={control}
                            name={'firstName'}
                        />
                    </Grid>
                    <Grid item>
                        <AdaptTextField
                            label={'Last Name'}
                            control={control}
                            name="lastName"
                        />
                    </Grid>
                    <Grid item>
                        <AdaptTextField
                            label={'Email'}
                            control={control}
                            name="email"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12}>
                        <IconTitle
                            icon={
                                <BadgeIcon
                                    fontSize="inherit"
                                    sx={{
                                        alignSelf: 'center',
                                    }}
                                />
                            }
                            text={'Suitability'}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            render={({
                                field: { onChange, onBlur, value, ref },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    label={'Score'}
                                    value={value}
                                    type="number"
                                    onChange={(e) => {
                                        const val = e.target.value

                                        onChange(
                                            val === ''
                                                ? ''
                                                : parseFloat(e.target.value),
                                        )
                                    }}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                    error={!!error}
                                    helperText={error && error.message}
                                />
                            )}
                            name={'score'}
                            control={control}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                Gender
                            </FormLabel>
                            <Controller
                                control={control}
                                name="gender"
                                render={({ field: { onChange, value } }) => (
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={onChange}
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                    </RadioGroup>
                                )}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <AdaptTextField
                        control={control}
                        name="comment"
                        multiline
                        label={'Comment'}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    mt: 2,
                }}
            >
                <Button
                    type={'submit'}
                    variant="contained"
                    disabled={isLoading}
                >
                    Submit
                </Button>
            </Box>
        </form>
    )
}

export default ExampleFormPage
