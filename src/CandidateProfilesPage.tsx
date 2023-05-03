import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextInput from '@mui/material/TextField'
import Profile from '../Imgs/Profiles.jpg'
import CardCadidateComponent from '../CardCandidate/CardCandidateComponent'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import '../fonts/static/LexendExa-Regular.ttf'
import './CandidateProfilesPage.css'
import InputAdorenment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

export default function CandidateProfilesPage() {
    const list = [
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '0263159874',
        },
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '026 315 9874',
        },
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '026 315 9874',
        },
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '026 315 9874',
        },
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '026 315 9874',
        },
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '026 315 9874',
        },
        {
            FirstName: 'Parinya',
            LastName: 'Muangrod',
            ImagePath: { Profile },
            Email: 'Parinya@gmail.com',
            Phone: '026 315 9874',
        },
    ]

    const ShowItems = () => {
        return list.map((item, i) => {
            return (
                <Grid item key={i}>
                    <CardCadidateComponent
                        FirstName={item.FirstName}
                        LastName={item.LastName}
                        ImagePath={Profile}
                        Email={item.Email}
                        Phone={item.Phone}
                    ></CardCadidateComponent>
                </Grid>
            )
        })
    }
    return (
        <>
            <div
                className="Board"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <h1
                    className="font-LexendExa"
                    style={{
                        margin: 'auto',
                        fontSize: '64',
                        color: '#09B4A9',
                        padding: '10px',
                        fontWeight: 'bold',
                    }}
                >
                    Candidate Profiles
                </h1>

                <div
                    className="SearchFillter"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginRight: '60px',
                    }}
                >
                    <TextInput
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdorenment position="end">
                                    <SearchIcon />
                                </InputAdorenment>
                            ),
                        }}
                        sx={{
                            margin: '0',
                            width: 342,
                            padding: '0',
                            justifyContent: 'center',
                        }}
                    ></TextInput>
                    <Button sx={{}}>
                        <p>Filter</p>
                        <FilterAltIcon></FilterAltIcon>
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            width: 200,
                            height: 60,
                            color: '#DE5151',
                            backgroundColor: '#FFDF6A',
                        }}
                    >
                        Add Candidate
                    </Button>
                </div>
                <div className="Table">
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            justifyContent: 'flex-start',
                            padding: '20px',
                            paddingLeft: '120px',
                        }}
                    >
                        {ShowItems()}
                    </Grid>
                </div>
            </div>
        </>
    )
}
