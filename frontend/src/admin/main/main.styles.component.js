import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    root: {
        width: '100%',
        display: 'flex',
        height: '800px',
    },
    boxleft: {
        width: '15%',
        border: '1px solid #ddd',
    },
    boxright: {
        width: '85%',
        borderBottom: '1px solid #ddd',
        marginTop: '70px',
    },
    boxadmin: {
        width: '80%',
        height: '70px',
        backgroundColor: 'rgba(0, 171, 85, 0.08) !important',
        margin: '20px auto 0px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px',
        '& h4': {
            marginLeft: '10px',
            color: '#555',
            fontSize: '14px',
            letterSpacing: '1px',
        }
    },
    managebox: {
        marginTop: '40px',
        '& h4': {
            width: '80%',
            margin: '0 auto 30px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#333',
            letterSpacing: '1px',
        },
    },
    accordion: {
        borderRight: '2px solid rgb(0, 171, 85)',
        backgroundColor: 'rgba(0, 171, 85, 0.08) !important',
    },
    accordionTitle: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
        padding: '0 10px',
        color: 'rgb(0, 171, 85)',
        '& p': {
            fontSize: '14px',
            marginLeft: '15px',
        }
    },
    accorlist: {
        width: '100%',
        padding: '0px !important',
    },
    tab: {
        height: '50px',
        '& button': {
            height: '50px',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '45px',
            borderRadius: '0px !important',
        }
    },
    btnLogout: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        padding: '0 30px',
        
    }
}));