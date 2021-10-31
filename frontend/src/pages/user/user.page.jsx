import React from 'react';
import { useStyles } from './user.style.page'

function User() {
    const classes = useStyles();
    return (
        <div>
            <div style={{height: '130px'}}></div>

            <div className={classes.flexbox}>
                
            </div>
        </div>
    )
}

export default User;
