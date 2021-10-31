import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 70,
        backgroundColor: '#2b9077',
    },
    container: {
        height: '100%',
    },
    flexbox: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '20%',
        '& img': {
            height: '50px',
        }
    },
    mid: {
        width: '60%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& button': {
            height: '40px',
            minWidth: '40px',
            backgroundColor: 'none',
            border: '1px solid white',
            borderRadius: '50%',
            color: 'white',
            transition: '0.5s',
            '&:hover': {
                backgroundColor: '#ffddb2',
                color: '#2b9077',
            }
        }
    },
    contact: {
        width: '20%',
        height: '50%',
        color: 'white',
        justifyContent: 'flex-end',
    },
    item: {
        width: '100%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            width: '20px',
            height: '20px',
            marginRight: '10px',
        }
    }
}));