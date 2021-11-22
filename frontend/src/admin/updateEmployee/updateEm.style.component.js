import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({
    root: {
        width: '100%',
        height: '700px',
    },
    header: {
        height: '40px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
    },
    boxmain: {
        height: '520px',
        width: '500px',
        boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
        marginTop: '20px',
        borderRadius: '20px',
        padding: '20px',
        '& input': {
            width: '100%',
            height: '50px',
            margin: '10px 0',
            borderRadius: '25px',
            border: '1px solid #ddd',
            outline: 'none',
            backgroundColor: '#eeeeee50',
            padding: '0 20px',
            fontSize: '20px',
            color: '#555',
        },
        
    },
    btn: {
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        '& button': {
            margin: '10px 0',
            height: '40px',
            width: '150px',
            borderRadius: '25px',
            backgroundColor: 'rgb(0, 171, 85)',
            color: 'white',
            boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px',
            '&:hover': {
                backgroundColor: 'rgb(0, 123, 85)',
            }
        }
    }
}))