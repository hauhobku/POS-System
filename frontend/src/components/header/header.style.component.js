import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 130,
        borderBottom: '1px solid #ddd',
        position: 'fixed',
        backgroundColor: 'white',
        top: '0px',
        zIndex: '1000',
    },
    container: {
        height: '100%',
    },
    flexbox: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    logo: {
        width: '25%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            height: 75,
        }
    },
    search: {
        width: '50%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    wrap: {
        width: '100%',
        height: 50,
        backgroundColor: '#f8f8f8',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
    },
    left: {
        width: '30%',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555',
        borderRight: '1px solid #ddd',
        padding: '0 10px',
    },
    mid: {
        width: '70%',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        '& form': {
            width: '100%',
            display: 'flex',
            height: '40px',
        },
        '& button': {
            height: '40px',
            backgroundColor: '#2b9077',
            color: 'white',
            '&:hover': {
                backgroundColor: '#2b9077aa',
            },
            minWidth: '40px',
            fontSize: '16px',
        }
    },
    buttonfield: {
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    input: {
        width: '80%',
        border: 'none',
        outline: 'none',
        height: '45px',
        backgroundColor: '#f8f8f8',
        fontSize: '16px',
        color: '#555',
    },
    user: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        '& svg': {
            color: 'white',
            width: '30px',
            height: '30px',
        },
        '& button': {
            backgroundColor: '#2b9077',
            minWidth: '40px',
        }
    },
    ButtonLogin: {
        '& button': {
            height: '45px',
            backgroundColor: '#2b9077',
            minWidth: '120px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#2b9077aa',
            }
        },
        '& a': {
            textDecoration: 'none',
        }
    },
}));