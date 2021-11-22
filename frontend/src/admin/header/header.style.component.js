import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({
    root: {
        width: '100%',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            height: '50px',
            marginLeft: '30px',
        },
        borderBottom: '1px solid #ddd',
    }
}));