import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '50px',
    },
    flexbox: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    pic: {
        width: '20%',
        alignItems: 'center',
        display: "flex",
        justifyContent: 'center',
        overflow: 'hidden',
        '& img': {
            height: 'auto',
            width: '70%',
            marginLeft: '15%',
        },
    },
    name: {
        width: '30%',
        fontSize: '14px',
        fontWeight: '600',
        color: '#314068',
    },
    price: {
        width: '25%',
        fontSize: '12px',
        fontWeight: '600',
        color: '#2b9077',
        textAlign: 'center',
    },
    quantity: {
        width: '17.5%',
        height: '70%',
        border: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        color: '#2b9077',
        '& p': {
            width: '20%',
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: '600',
        },
        '& button': {
            minWidth: '10px',
            width: '40%',
            height: '100%',
            color: '#2b9077',
            '& svg': {
                width: '100%',
                height: '100%',
            }
        }
    },
    del: {
        width: '7.5%',
        height: '70%',
        '& button': {
            minWidth: '10px',
            width: '100%',
            height: '100%',
            '& svg': {
                width: '100%',
                height: '100%',
            },
            color: 'red',
        }
    }
}));