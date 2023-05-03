import Stack from '@mui/joy/Stack'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/joy/styles'
import Avatar from '@mui/joy/Avatar'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Divider from '@mui/joy/Divider'

const Item = styled(Card)(({ theme, color }) => ({
    backgroundColor: color,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: 'black',
}))

const CardContainer = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item color="#F7D060">
                    <Typography
                        variant="h5"
                        component="h2"
                        marginLeft={5}
                        marginTop={2}
                        textAlign={'left'}
                        fontWeight="bold"
                        fontStyle={'italic'}
                    >
                        Pending
                    </Typography>
                    <br />
                    <Divider color="neutral" />
                    <br />

                    <Card>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item marginLeft={1}>
                                <Avatar />
                            </Grid>
                            <Grid item>
                                <Typography
                                    color="black"
                                    textAlign="left"
                                    marginLeft={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginBottom={2}
                                    fontWeight="bold"
                                >
                                    Firstname Lastname LongLastName
                                </Typography>

                                <Box sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#394867',
                                            color: 'white',
                                            fontWeight: 400,
                                            borderRadius: '10px',
                                            padding: '8px 16px',

                                            marginLeft: '10px',
                                        }}
                                    >
                                        Score
                                    </Box>
                                </Box>

                                <br />
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                </Item>

                <Item color="#6087F7">
                    <Typography
                        variant="h5"
                        component="h2"
                        marginLeft={5}
                        marginTop={2}
                        textAlign={'left'}
                        fontWeight="bold"
                        fontStyle={'italic'}
                    >
                        Interview
                    </Typography>
                    <br />
                    <Divider color="neutral" />
                    <br />

                    <Card>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item marginLeft={1}>
                                <Avatar />
                            </Grid>
                            <Grid item>
                                <Typography
                                    color="black"
                                    textAlign="left"
                                    marginLeft={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginBottom={2}
                                    fontWeight="bold"
                                >
                                    Firstname Lastname
                                </Typography>

                                <Box sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#394867',
                                            color: 'white',
                                            fontWeight: 400,
                                            borderRadius: '10px',
                                            padding: '8px 16px',

                                            marginLeft: '10px',
                                        }}
                                    >
                                        Score
                                    </Box>
                                </Box>

                                <br />
                            </Grid>
                        </Grid>
                    </Card>
                </Item>

                <Item color="#FF6D60">
                    <Typography
                        variant="h5"
                        component="h2"
                        marginLeft={5}
                        marginTop={2}
                        textAlign={'left'}
                        fontWeight="bold"
                        fontStyle={'italic'}
                    >
                        Reject
                    </Typography>
                    <br />
                    <Divider color="neutral" />
                    <br />

                    <Card>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item marginLeft={1}>
                                <Avatar />
                            </Grid>
                            <Grid item>
                                <Typography
                                    color="black"
                                    textAlign="left"
                                    marginLeft={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginBottom={2}
                                    fontWeight="bold"
                                >
                                    Firstname Lastname
                                </Typography>

                                <Box sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#394867',
                                            color: 'white',
                                            fontWeight: 400,
                                            borderRadius: '10px',
                                            padding: '8px 16px',

                                            marginLeft: '10px',
                                        }}
                                    >
                                        Score
                                    </Box>
                                </Box>

                                <br />
                            </Grid>
                        </Grid>
                    </Card>
                </Item>
                <Item color="#98D8AA">
                    <Typography
                        variant="h5"
                        component="h2"
                        marginLeft={5}
                        marginTop={2}
                        textAlign={'left'}
                        fontWeight="bold"
                        fontStyle={'italic'}
                    >
                        Pass
                    </Typography>
                    <br />
                    <Divider color="neutral" />
                    <br />

                    <Card>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item marginLeft={1}>
                                <Avatar />
                            </Grid>
                            <Grid item>
                                <Typography
                                    color="black"
                                    textAlign="left"
                                    marginLeft={1}
                                    marginTop={2}
                                    marginRight={2}
                                    marginBottom={2}
                                    fontWeight="bold"
                                >
                                    Firstname Lastname
                                </Typography>

                                <Box sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#394867',
                                            color: 'white',
                                            fontWeight: 400,
                                            borderRadius: '10px',
                                            padding: '8px 16px',

                                            marginLeft: '10px',
                                        }}
                                    >
                                        Score
                                    </Box>
                                </Box>

                                <br />
                            </Grid>
                        </Grid>
                    </Card>
                </Item>
            </Stack>
        </div>
    )
}

export default CardContainer
