import { makeStyles } from '@mui/styles'
import bglogin from './../../assets/images/bgsignup.jpg'

export const useStyles = makeStyles((theme) => ({
    root: {

    },
    flexbox: {
        height: '778px',
        background: `url(${bglogin}) no-repeat center center`,
        backgroundSize: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            width: '100%',
            height: '778px',
            backgroundColor: 'rgb(0,0,0,0.4)',
            position: 'absolute',
            zIndex: '10',
        }
    },
    formBox: {
        position: 'absolute',
        zIndex: '100',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '320px',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 5px 30px 0px rgba(189, 89, 212, 0.5)',
    },
    box: {
        height: '400px',
        width: '270px',
    },
    title: {
        fontSize: '40px',
        fontWeight: '600',
        fontFamily: 'Playfair Diplay',
        color: '#4b2354',
        textAlign: 'center',
        height: '70px',
    },
    form: {
        textAlign: 'center',
        '& input': {
            width: '100%',
            height: '40px',
            margin: '10px 0px',
            border: '1px solid #ddd',
            outline: 'none',
            color: '#4b2354',
            fontWeight: '600',
            fontSize: '16px',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 5px 30px 0px rgba(250, 66, 81, 0.1)',
        },
        '& button': {
            margin: '10px 0px',
            width: '50%',
            height: '40px',
            backgroundColor: '#bd59d4',
            color: 'white',
            transition: '0.5s',
            borderRadius: '20px',
            '&:hover': {
                backgroundColor: '#4b2354',
            },
            boxShadow: '0 10px 30px 0px rgba(189, 89, 212, 0.3)',
        }
    },
    signup: {
        width: '100%',
        textAlign: 'center',
        marginTop: '10px',
    }
}));