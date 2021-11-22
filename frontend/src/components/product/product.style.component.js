import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '85%',
        height: '330px',
        border: '1px solid #ddd',
        margin: '0 auto',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: '0.5s',
        '&:hover': {
            boxShadow: '0px 5px 30px 0px rgb(0 0 0 / 5%)',
            border: '1px solid #fff',
        },
    },
    picbox: {
        overflow: 'hidden',
        height: '200px',
        width: '100%',
    },
    pic: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            width: '90%',
            height: 'auto',
            transition: 'all 1s',
            backgroundColor: 'white',
            filter: 'white(100%)',
        },
        transition: 'all 0.5s',
        '&:hover': {
            '& img': {
                transform: 'scale(1.25)',
            },
        },
        
    },
    evaluate: {
        '& svg': {
            width: '15px',
            color: '#ffc400',
        },
    },
    infor: {
        textAlign: 'center',
    },
    name: {
        color: '#314068',
    },
    price: {
        fontSize: '12px',
        fontWeight: '700',
        color: '#2b9077',
    },
    button: {
        margin: '10px',
        '& button': {
            backgroundColor: '#2b9077',
            color: 'white',
            transition: '0.5s',
            '&:hover': {
                backgroundColor: '#314068',
            }
        },
        '& a': {
            textDecoration: 'none',
            '& button': {
                backgroundColor: '#314068',
                color: 'white',
                transition: '0.5s',
            },
        }
    }
}))