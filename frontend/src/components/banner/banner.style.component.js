import { makeStyles } from '@mui/styles'
import backgr from './../../assets/images/background.png';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '600px',
        background: `url(${backgr}) no-repeat center center`,
        backgroundSize: '100% 600px',
    },
    container: {
        height: '100%',
    },
    flexbox: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '50%',
        height: '400px',
        textAlign: 'center',
        color: '#ddd',
        fontFamily: 'Playfair Display',
        '& p': {
            marginTop: '30px',
            fontSize: '14px',
            letterSpacing: '1px',
        },
        '& h1': {
            fontSize: '40px',
            letterSpacing: '2px',
        },
        '& button': {
            marginTop: '30px',
            backgroundColor: 'rgb(255, 221, 178)',
            color: 'rgb(49, 64, 104)',
            height: '50px',
            width: '100px',
            transition: '0.5s',
            '&:hover': {
                backgroundColor: 'rgb(49, 64, 104)',
                color: 'rgb(255, 221, 178)',
            }
        }
    }
}));