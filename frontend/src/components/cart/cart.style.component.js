import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: 420,
        height: 513,
        border: '1px solid #ddd',
        top: 130,
        right: 0,
    },
    header: {
        height: '40px',
        borderBottom: '1px solid #ddd',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            fontSize: '25px',
            color: '#314068',
            fontFamily: 'Playfair Display',
        }
    },
    thead: {
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: '600',
        backgroundColor: '#f7eee3',
        letterSpacing: '1px',
    },
    d1: {
        width: '55%',
        textAlign: 'center',
    },
    d2: {
        width: '20%',
    },
    d3: {
        width: '25%',
    },
    listPro: {
        height: '321px',
        width: '100%',
        overflowY: 'scroll',
        borderBottom: '1px solid #ddd',
    },
    footer: {
        width: '100%',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fffbf7',
    },
    box: {
        width: '80%',
    },
    total: {
        height: '40px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '& div': {
            width: '50%',
            fontWeight: '600',
            color: '#314068',
            textTransform: 'uppercase',
        },
        '& p': {
            width: '50%',
            fontWeight: '800',
            color: '#2b9077',
        }
    },
    pay: {
        height: '40px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '& button': {
            backgroundColor: '#2b9077',
            color: 'white',
            width: '100%',
            transition: '0.5s',
            '&:hover': {
                backgroundColor: '#314068',
            }
        }
    }
}));